
<template>

  <div>
    <Home />
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --

  //Patterns --

  //Modules --

  //Pages --
  import Home from            '@/components/04-pages/home/variant-1/component.vue'

  export default {
    components: {
      Home
    },
    name: 'PrototypeAlpha1',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `page-header ${this.classList}`;  
      },
    },
    methods: {
    }
  }

</script>

<style lang="scss">

</style>



