<template>
  <div>{{getConfig('sample')}} {{another}}</div>
</template>

<script>
import Configuration from '../mixins/Configuration.vue'

export default {
  mixins: [Configuration],
  data() {
    return {
      another: 'from Vuejs'
    }
  },
  // created() {
  //   this.msg = this.hello()
  // }
}
</script>

<style>

</style>