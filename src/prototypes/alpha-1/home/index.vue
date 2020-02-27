
<template>

  <div>
    <HomePage />
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --

  //Patterns --

  //Modules --

  //Pages --
  import HomePage from            '@/components/04-pages/home/variant-1/component.vue'

  export default {
    components: {
      HomePage
    },
    name: 'Alpha1Home',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `home ${this.classList}`;  
      },
    },
    methods: {
    }
  }

</script>

<style lang="scss">

</style>



