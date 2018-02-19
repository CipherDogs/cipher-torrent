Vue.component('speed', {
		  template: '<div class="speed" v-show="main" style="display: none;">' +
		      'Statistics:' +
		      '[Up&nbsp;<i class="ion-ios-arrow-thin-up"></i>{{up/1000}}&nbsp;kB/sec]&nbsp;' + 
		      '[Down&nbsp;<i class="ion-ios-arrow-thin-down"></i>{{down/1000}}&nbsp;kB/sec]' +
		      '</div>',
		  props: ['up', 'down'],
	      })