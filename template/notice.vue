<template lang="html">
  <div v-show="main" style="display: none;">
    <div class="alert alert-success" role="alert" v-show="notification.success">{{notification.message}}</div>
    <div class="alert alert-warning" role="alert" v-show="notification.warning">{{notification.message}}</div>
  </div>
</template>

<script>
export default {
  props: ['main', 'notification']
}
</script>