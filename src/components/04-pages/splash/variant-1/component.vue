
<template>

  <div :class="classes">
    <div class="splash_inner">
      <Container> 

        <H2 classList="greeting">Welcome</H2>

        <T2 classList="greeting2">To the future of prototyping</T2>
        
      </Container>
    </div>
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --
  import Container from     '@/components/01-arrangements/container/variant-1/component'
  import H2 from            '@/components/01-arrangements/h2/variant-1/component'
  import T2 from            '@/components/01-arrangements/t2/variant-1/component'

  //Patterns --

  //Modules --

  //Pages --

  export default {
    components: {
      Container, H2, T2
    },
    props: {
      classList:{
        type: String,
        default: ""
      }
    },
    data: function () {
      return {
     
      }
    },
    computed: {
      classes() {
        return `splash ${this.classList}`;  
      }
    },
    methods: {
    },
    created() {
    }
  }

</script>

<style lang="scss">

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  //local styles --
  @import "./_style";

</style>



