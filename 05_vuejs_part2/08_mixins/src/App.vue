<template>
  <div id="app">
    <SampleComponent></SampleComponent>
  </div>
</template>

<script>
import SampleComponent from './components/SampleComponent'

export default {
  name: 'App',
  components: {
    SampleComponent
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
