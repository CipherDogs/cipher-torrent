Vue.component('upload', {
		  template: '<div class="block" style="left:0;">' +
		      '<div class="block-head">{{ $t("title.seed") }}</div>' +
		      '<div class="block-body">' +
		      '<div v-if="up.visible">' +
		      '<p>{{ $t("text.file") }}:{{up.name}}</p>' +
		      '<p>{{ $t("text.hash") }}:{{up.hash}}</p>' +
		      '<br>' +
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
		  props: ['up'],
	      })