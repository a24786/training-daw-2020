<template>
  <div>
      <div>Editing {{number}}</div>
      <div>Route param {{$route.params.id}}</div>
  </div>
</template>

<script>
export default {
        // mounted() {
        //     this.fetchData()
        // },
    data() {
        return {
            number: 0
        }
    },
    // beforeRouteUpdate(to, from, next) {
    //     this.number = to.params.id
    //     next()
    // },
    watch: {
        $route: "fetchData"
    },
    methods: {
        fetchData() {
            console.log(`edit ${this.$route.params.id}`)
            this.number = this.$route.params.id
        }
    }
}
</script>

<style>

</style>