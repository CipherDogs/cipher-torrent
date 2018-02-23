Vue.component('upload', {
		  template: '<div class="block" style="left:0;">' +
		      '<div class="block-head">Seeding</div>' +
		      '<div class="block-body">' +
		      '<div v-if="up.visible">' +
		      '<p>File name:{{up.name}}</p>' +
		      '<p>Hash:{{up.hash}}</p>' +
		      '<br>' +
		      '<div class="down-btn">' +
		      '<a :href="up.magnet">' +
		      '<label class="btn"><i class="ion-ios-world-outline"></i>Magnet</label>' +
		      '</a>' +
		      '<a :href="up.blob" :download="up.name">' +
		      '<label class="btn"><i class="ion-ios-copy-outline"></i>Torrent file</label>' +
		      '</a>' +
		      '</div>' +
		      '</div>' +
		      '</div>' +
		      '</div>',
		  props: ['up'],
	      })