
<template>

  <div>
    <TestPage />
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --

  //Patterns --

  //Modules --

  //Pages --
  import TestPage from            '@/components/04-pages/test-page/variant-1/component.vue'

  export default {
    components: {
      TestPage
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



