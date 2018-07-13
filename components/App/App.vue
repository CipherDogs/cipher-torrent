<template>
    <div id="preloaders" v-if="loader">
        <img src="img/preloader.gif">
    </div>
    <div class="main" v-else>
        <headline></headline>
        <panel></panel>
        <speed></speed>
        <div class="blocks">
            <upload></upload>
            <download></download>
        </div>
        <notice></notice>
        <footline></footline>
    </div>
</template>

<script>
import headline from '../Header/Header.vue'
import panel from '../Panel/Panel.vue'
import speed from '../Speed/Speed.vue'
import upload from '../Upload/Upload.vue'
import download from '../Download/Download.vue'
import notice from '../Notice/Notice.vue'
import footline from '../Footer/Footer.vue'

export default {
    data: {
        loader: false
    },
    components: {
        headline,
        panel,
        speed,
        upload,
        download,
        notice,
        footline
    }
}
</script>
