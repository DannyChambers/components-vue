
<template>

  <div :class="classes">
    <Container>

      <H2>Prototype inventory</H2>

      <Ul>
        <li class="ul_item"><router-link to="/prototype-alpha-1">Alpha 1</router-link></li>
      </Ul>
      
    </Container>
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --
  import Container from     '../../components/01-arrangements/container/variant-1/component.vue'
  import H2 from            '../../components/01-arrangements/h2/variant-1/component.vue'
  import Ul from            '../../components/01-arrangements/ul/variant-1/component.vue'

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

<style lang="scss">

</style>



