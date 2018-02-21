Vue.component('download', {
		  template: '<div class="block" style="right:0;">' +
		      '<div class="block-head">Downloading</div>' +
		      '<div class="block-body" >' +
		      '<div v-if="down.visible">' +
		      '<p>File name:{{down.name}}</p>' +
		      '<p>Hash:{{down.hash}}</p>' +
		      '<p>Size:{{down.length}}MB</p>' +
		      '<br>' +
		      '<p><a :href="down.url" :download="down.name">' +
		      '<label class="btn"><i class="ion-ios-copy-outline"></i>Get file</label>' +
		      '</a></p>' +
		      '</div>' +
		      '</div>' +
		      '</div>',
		  props: ['down'],
	      })