<template lang="html">
    <div class="speed">
        <i class="ion-ios-arrow-thin-up"></i>&nbsp;
        <b>{{speed.up}}</b>&nbsp;{{ $t("speed") }}&nbsp;
        <i class="ion-ios-arrow-thin-down"></i>&nbsp;
        <b>{{speed.down}}</b>&nbsp;{{ $t("speed") }}&nbsp;
    </div>
</template>

<script>
    import { bus, client } from '../../js/bus.js'
    import myLocal from '../../js/translation.js'
    
    export default {
        data() {
            return {
                speed: {
                    up: 0,
                    down: 0
                }
            }
        },
        i18n: myLocal,
        mounted: function() {
            let _this = this
            setInterval(function() {
                _this.speed.down = Number(client.downloadSpeed / 1000).toFixed(2)
                _this.speed.up = Number(client.uploadSpeed / 1000).toFixed(2)
            }, 500)
        }
    }
</script>
