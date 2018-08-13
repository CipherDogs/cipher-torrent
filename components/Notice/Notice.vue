<template lang="html">
    <div>
        <div class="alert alert-success" role="alert" v-show="notification.success">
            {{notification.message}}
        </div>
        <div class="alert alert-warning" role="alert" v-show="notification.warning">
            {{notification.message}}
        </div>
    </div>
</template>

<script>
    import { bus, client } from '../../js/bus.js'
    import myLocal from '../../js/translation.js'
    
    export default{
        i18n: myLocal,
        props: ['notification'],
        watch: {
            'notification.success': function() {
                let _this = this
                if (this.notification.success === true) {
                    setTimeout(function() { _this.notification.success = false }, 2000)
                }
            },
            'notification.warning': function() {
                let _this = this
                if (this.notification.warning === true) {
                    setTimeout(function() { _this.notification.warning = false }, 2000)
                }
            }
        },
    }
</script>
