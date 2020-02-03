
<template>

  <div :class="classes">
    <Container>

      <H2 text="Home" />

      <ul>
        <li  v-for="user in users" :key="user.id">{{user.name}} {{user.status}} {{user.species}}</li>
      </ul>

      <Textarea id="comment" label="Comment" maxLength="140" />

      <Button variant="primary" text="Submit"  />
      
    </Container>
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --
  import Container from     '../../01-arrangements/container/index.vue'
  import H2 from            '../../01-arrangements/typography/h2.vue'

  //Patterns --
  import Textarea from      '../../02-patterns/textarea/index.vue'
  import Button from        '../../02-patterns/button/index.vue'

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
        return this.$store.state.users;
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
  @import "./_index";

</style>



