
<template>

  <div>
    <Container>

      <H2>Prototype inventory</H2>

      <Ul classlist="router_links">
        <li class="list_item"><router-link to="/test-ground">Test ground</router-link></li>
        <li class="list_item"><router-link to="/milton">Milton</router-link></li>
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
    name: 'Prototypes',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `${this.classList}`;  
      },
    },
    methods: {
    }
  }

</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

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



