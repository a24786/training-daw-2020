<template>
  <div>{{msg}} {{another}}</div>
</template>

<script>
import SampleMixin from '../mixins/SampleMixin.vue'
import SampleMixinWithData from '../mixins/SampleMixinWithData.vue'

export default {
  mixins: [SampleMixinWithData],
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