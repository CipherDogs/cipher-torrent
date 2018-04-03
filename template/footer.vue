<template lang="html">
  <div class="footer">
    <div class="left">
      <a href="https://github.com/deadblackclover" target="_blank">
        <i class="ion-social-github"></i>&nbsp;DEADBLACKCLOVER
      </a>
    </div>
    <slot></slot>
    <div class="right">
      <a href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
        <img src="http://logo.js.org/dark_horz.png" width="102" alt="JS.ORG Logo" style="width:40px;"/>
      </a>
      <!-- alternatives [bright|dark]_[horz|vert|tiny].png (width[horz:102,vert:50,tiny:77]) -->
      <a href="https://webtorrent.io/" target="_blank">
        <img src="https://webtorrent.io/img/webtorrent-small.png">
      </a>
      <a href="https://vuejs.org/" target="_blank"><img src="https://vuejs.org/images/logo.png"></a>
    </div>
  </div>
</template>