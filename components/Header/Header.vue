<template lang="html">
    <div class="header">
        <div class="left">
            <a href="index.html">
                <h1 class="title">CipherTorrent&nbsp;<i class="ion-ios-infinite-outline"></i></h1>
            </a>
        </div>
        <div class="right">{{ $t("title.head") }}</div>
    </div>
</template>

<script>
    import { bus, client } from '../../js/bus.js'
    import myLocal from '../../js/translation.js'
    
    export default{
        i18n: myLocal
    }
</script>
