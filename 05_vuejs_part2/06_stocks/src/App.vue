<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      quotes: [
        { id: '3M', name: '3M', value: 166.41, change: 0.13, percentChange: 0.08	},
        { id: 'APPL', name: 'Apple', value: 128.91, change: -1.98, percentChange: -1.51	},
        { id: 'AXP', name: 'American Express', value: 123.78, change: 1.38, percentChange: 1.13	},
        { id: 'BA', name: 'Boing Co', value: 208.21, change: 2.7, percentChange: 1.3	},
        { id: 'CSCO', name: 'Cisco Systems Inc', value: 44.85, change: -0.21, percentChange: -0.46	}
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
