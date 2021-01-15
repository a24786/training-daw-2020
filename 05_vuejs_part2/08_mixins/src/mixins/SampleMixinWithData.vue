<script>
export default {
  methods: {
    hello() {
      return `Hello world`
    }
  },
  data() {
    return {
      msg: String
    }
  },
  created() {
    this.msg = this.hello()
  }
}
</script>