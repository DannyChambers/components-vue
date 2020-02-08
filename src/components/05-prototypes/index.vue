
<template>

  <div>
    <Container>

      <H2>Prototype inventory</H2>

      <Ul classlist="router_links">
        <li class="ul_item"><router-link to="/prototype-alpha-1" class="link link--standalone">Alpha 1</router-link></li>
      </Ul>
      
    </Container>
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --
  import Container from     '@/components/01-arrangements/container/variant-1/component.vue'
  import H2 from            '@/components/01-arrangements/h2/variant-1/component.vue'
  import Ul from            '@/components/01-arrangements/ul/variant-1/component.vue'

  //Patterns --

  //Modules --

  //Pages --

  export default {
    components: {
      Container, H2, Ul
    },
    props: {
     
    },
    data: function () {
      return {
     
      }
    },
    computed: {
    },
    methods: {
    }
  }

</script>

<style lang="scss" scoped>

  //Tokens --
  @import "../00-tokens/colours/variant-1/_style";
  @import "../00-tokens/fonts/variant-1/_style";
  @import "../00-tokens/dimensions/variant-1/_style";
  @import "../00-tokens/transitions/variant-1/_style";

  .router_links {

    .list_item {

      a {
        display: inline-block;
        font-family: $font-family-regular;
        color: $link-colour;
        text-decoration: none;
        border-bottom: 1px solid $link-colour;

        &:hover {
          border-color: transparent;
        }
      }
    }
  }

</style>



