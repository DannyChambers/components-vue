
<template>

  <div>
    <LoginPage />
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --

  //Patterns --

  //Modules --

  //Pages --
  import LoginPage from            '@/components/04-pages/log-in/variant-1/component.vue'

  export default {
    components: {
      LoginPage
    },
    name: 'Alpha1',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `alpha-1 ${this.classList}`;  
      },
    },
    methods: {
    }
  }

</script>

<style lang="scss">

</style>



