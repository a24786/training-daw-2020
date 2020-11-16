<template>
  <div>
    Esto es un componente
    <span>{{counter}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  created() {
    setInterval(() => this.counter++, 1000)
  }
}
</script>

<style scoped>
span {
  color: cadetblue;
}
</style>