Vue.component('speed', {
  template: '<div class="speed" v-show="main" style="display: none;">' +
            '<i class="ion-ios-arrow-thin-up"></i>&nbsp;' +
            '<b>{{speed.up}}</b>&nbsp;{{ $t("speed") }}&nbsp;' +
            '<i class="ion-ios-arrow-thin-down"></i>&nbsp;' +
            '<b>{{speed.down}}</b>&nbsp;{{ $t("speed") }}&nbsp;' +
            '</div>',
  props: ['main', 'speed']
})
