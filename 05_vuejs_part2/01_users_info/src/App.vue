<template>
  <div id="app">
    <HelloWorld msg="Counter"/>
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      users: [
        { id: 0, name: 'Cloyd', surname: 'Oberbrunner', years: 34, score: 65 },
        { id: 1, name: 'Kevon', surname: 'Schaden', years: 24, score: 45 },
        { id: 2, name: 'Cassandra', surname: 'Fadel', years: 25, score: 92 },
        { id: 3, name: 'Brandi', surname: 'Koelpin', years: 37, score: 76 },
      ]
    }
  }
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
