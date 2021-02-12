<template>
  <div>
    Detalles del usuario
    {{user.description}}
  </div>
</template>

<script>
import UsersService from '../components/UsersService.vue'

export default {
    mixins: [UsersService],
    created() {
        console.log(`get info of ${this.$route.params.id}`)
        this.getUser(this.$route.params.id)
    }
}
</script>

<style>

</style>