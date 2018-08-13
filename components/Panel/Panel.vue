<template lang="html">
    <div class="panel">
        <div class="left">
            <input id="file-upload" type="file" @change="upload($event)">
            <label class="btn" for="file-upload"><i class="ion-android-upload"></i>{{ $t("btn.seed") }}</label>
        </div>
        <div class="right">
            <input class="ipt" type="text" :placeholder="$t('text.magnet')" v-model="magnetUrlDown">
            <label class="btn" @click="download">
                <i class="ion-android-download"></i>{{ $t("btn.down") }}
            </label>
            <label class="btn" @click="recently">
                <i class="ion-android-stopwatch"></i>{{ $t("btn.recently") }}
            </label>
        </div>
        <div class="recents" v-if="recents.visible">
            <div class="recents-name">
                {{ $t("title.recently") }}
                <label class="btn" @click="recents.visible = false">
                    <i class="ion-android-close"></i>{{ $t("btn.close") }}
                </label>
            </div>
            <ul><li v-for="item in recents.recent">{{item}}</li></ul>
        </div>
    </div> 
</template>

<script>
    import { bus, client } from '../../js/bus.js'
    import myLocal from '../../js/translation.js'
    
    export default{
        data() {
            return {
                down: {
                    length: 0,
                    visible: false,
                    hash: '',
                    name: '',
                    url: '',
                    btns: {
                        visible: false
                    },
                    progress: 0,
                    process: {
                        visible: true
                    }
                },
                up: {
                    visible: false,
                    name: '',
                    torrent: '',
                    magnet: '',
                    hash: '',
                    blob: ''
                },
                magnetUrlDown: '',
                recents: {
                    visible: false,
                    recent: []
                }
            }
        },
        i18n: myLocal,
        methods: {
            upload: function(event) {
                let _this = this
                let file = event.target.files[0]
                if (file != null) {
                    _this.$emit('nSuccess', 'The distribution began!')
                    client.seed(file, function(torrent) {
                        _this.up.name = file.name
                        _this.up.torrent = `${file.name}.torrent`
                        _this.up.magnet = torrent.magnetURI
                        _this.up.hash = torrent.infoHash
                        _this.up.blob = torrent.torrentFileBlobURL
                        _this.up.visible = true
                        _this.$emit('upload', _this.up)
                    })
                } else {
                    _this.$emit('nWarning', 'File not found')
                }
            },
            download: function() {
                let _this = this
                if ((this.magnetUrlDown != null) && this.magnetUrlDown.length > 0) {
                    _this.$emit('nSuccess', 'Download has started!')
                    client.add(this.magnetUrlDown, function(torrent) {
                        _this.down.hash = torrent.infoHash
                        var file = torrent.files[0]
                        _this.down.name = file.name
                        _this.down.length = Number(file.length / 1000 / 1000).toFixed(2)
                        _this.down.visible = true
                        _this.$emit('download', _this.down)
                        file.getBlobURL(function(err, url) {
                            if (err) throw err
                            _this.down.process.visible = false
                            _this.down.url = url
                            _this.down.btns.visible = true
                            _this.$emit('download', _this.down)
                            _this.$emit('nSuccess', 'Loading is complete!')
                            window.localStorage[_this.down.hash] = _this.magnetUrlDown
                            _this.magnetUrlDown = ''
                        })
                    })
                } else {
                    _this.$emit('nWarning', 'Add a magnet link')
                }
            },
            recently: function() {
                this.recents.recent = []
                for (let i = 0; i < window.localStorage.length; i++) {
                    this.recents.recent.push(window.localStorage.getItem(window.localStorage.key(i)))
                }
                this.recents.visible = true
            }
        }
    }
</script>
