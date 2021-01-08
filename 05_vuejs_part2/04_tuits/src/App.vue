<template>
  <div id="app">
    <HelloWorld id="0" @click="parentDoClick"/>
    <HelloWorld id="1" @click="parentDoClick"/>
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
      tuits: [
        { id: 0, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/beshur/128.jpg', msg: 'Quisquam dolor perspiciatis ea expedita.' },
        { id: 1, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sementiy/128.jpg', msg: 'Deserunt velit qui dicta delectus eos ab laudantium mollitia.' },
        { id: 2, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/malgordon/128.jpg', msg: 'Nihil vel sequi voluptatem omnis similique culpa consequuntur.' },
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
