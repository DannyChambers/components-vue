
<template>

  <div :class="classes">
    <Container>

      <H2>Home</H2>

      <ul>
        <li  v-for="user in users" :key="user.id">{{user.name}} {{user.status}} {{user.species}}</li>
      </ul>

      <Textarea id="comment" label="Comment" maxLength="140" />

      <Button variant="primary" text="Submit" />
      
    </Container>
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --
  import Container from     '@/components/01-arrangements/container/variant-1/component'
  import H2 from            '@/components/01-arrangements/h2/variant-1/component'

  //Patterns --
  import Textarea from      '@/components/02-patterns/textarea/variant-1/component'
  import Button from        '@/components/02-patterns/button/variant-1/component'

  //Modules --

  //Pages --

  export default {
    components: {
      Container, H2, Textarea, Button
    },
    props: {
     
    },
    data: function () {
      return {
     
      }
    },
    computed: {
      classes() {
        return `home ${this.classList}`;  
      },
      users() {
        return this.$store.state;
      }
    },
    methods: {
    },
    created() {
      this.$store.dispatch('loadUsers');
    }
  }

</script>

<style lang="scss">

  //local styles --
  @import "./_style";

</style>



