<template>
  <div class="hello">
    <div class="d-flex flex-row justify-content-center mb-4">
      <div class="w-75 d-flex flex-row justify-content-center">
        <b-form-input
            v-model="text"
            placeholder="Enter your name"
            class="col-9"
          ></b-form-input>
        <b-button
          variant="danger"
          class="col-3"
          >Peligro</b-button>
      </div>
    </div>

    <div class="d-flex flex-row justify-content-center">
      <b-list-group class="w-75">
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
