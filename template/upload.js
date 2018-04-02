Vue.component('upload', {
  template: '<div class="block" style="left:0;">' +
            '<div class="block-head">{{ $t("title.seed") }}</div>' +
            '<div class="block-body">' +
            '<div v-if="up.visible">' +
            '<table>' +
            '<tr><td class="td-name">{{ $t("text.file") }}</td><td>{{up.name}}</td></tr>' +
            '<tr><td class="td-name">{{ $t("text.hash") }}</td><td>{{up.hash}}</td></tr>' +
            '</table>' +
            '<div class="down-btn">' +
            '<a :href="up.magnet">' +
            '<label class="btn"><i class="ion-ios-world-outline"></i>{{ $t("btn.magnet") }}</label>' +
            '</a>' +
            '<a :href="up.blob" :download="up.name">' +
            '<label class="btn"><i class="ion-ios-copy-outline"></i>{{ $t("btn.torrent") }}</label>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>',
  props: ['up']
})
