<script>
export default {
    data() {
        return {
            users: [],
            user: {}
        }
    },
    methods: {
        getUserList() {
            fetch('http://localhost:3000/users')
                .then(response => response.json())
                .then(response => {
                    this.users = response
                })
        },
        getUser(id) {
            fetch(`http://localhost:3000/users/${id}`)
                .then(response => response.json())
                .then(response => {
                    this.user = response
                })
        }
    }
}
</script>