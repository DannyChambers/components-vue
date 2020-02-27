
<template>

  <div>
    <Splash />
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --

  //Patterns --

  //Modules --

  //Pages --
  import Splash from            '@/components/04-pages/splash/variant-1/component.vue'

  export default {
    components: {
      Splash
    },
    name: 'SplashPage',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `splash-page ${this.classList}`;  
      },
    },
    methods: {
    }
  }

</script>

<style lang="scss">

</style>



