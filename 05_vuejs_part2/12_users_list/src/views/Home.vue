<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>This is home</div>
    <div v-for="user in users" :key="user.id">
      <!-- <span>{{user.name}}</span> -->
      <router-link :to="{ name: 'details', params: { id: user.id } }">{{user.name}}</router-link>
    </div>
  </div>
</template>

<script>
import UsersService from '../components/UsersService.vue'

export default {
  name: 'Home',
  components: {
  },
  mixins: [UsersService],
  created() {
    this.getUserList()
  }
}
</script>
