Vue.component('speed', {
		  template: '<div class="speed" v-show="main" style="display: none;">' +
		      'Speed:' +
		      '[Up&nbsp;<i class="ion-ios-arrow-thin-up"></i>{{speed.up/1000}}&nbsp;kB/sec]&nbsp;' + 
		      '[Down&nbsp;<i class="ion-ios-arrow-thin-down"></i>{{speed.down/1000}}&nbsp;kB/sec]' +
		      '</div>',
		  props: ['main', 'speed'],
	      })