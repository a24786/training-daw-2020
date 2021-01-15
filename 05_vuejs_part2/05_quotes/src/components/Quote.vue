<template>
  <div>
        <div>{{quote}}</div>
        <div>{{author}}</div>
  </div>
</template>

<script>
export default {
    name: 'QuoteWidget',
    data() {
        return {
            quote: '',
            author: ''
        }
    },
    created() {
        // fetch('https://quotes.rest/qod?language=en')
        fetch('https://favqs.com/api/qotd')
            .then(response => response.json())
            .then(response => {
                // this.quote = response.contents.quotes[0].quote
                this.quote = response.quote.body
                this.author = response.quote.author
            })
    }
}
</script>

<style>

</style>