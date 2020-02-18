<template>
  <form action="this.action" method="post" v-on:submit.prevent :class="classes">
    <fieldset class="login-form_fieldset">
      <Legend text="Log in" />

      <TextInput label="Username" />

      <TextInput label="Password" />

    </fieldset>

    <ButtonGroup variant="fullwidth">
      <Button variant="primary" text="Submit" @click="logIn()" />
      <Button variant="secondary" text="Reset" />
    </ButtonGroup>

  </form>
</template>

<script>

  //Tokens --

  //Arrangements --
  import Legend       from '@/components/01-arrangements/legend/variant-1/component.vue'
  import ButtonGroup  from '@/components/01-arrangements/button-group/variant-1/component.vue'

  //Patterns --
  import TextInput 	  from '@/components/02-patterns/text-input/variant-1/component.vue'
  import Button 	    from '@/components/02-patterns/button/variant-1/component.vue'

  //Modules --

  //Pages --

  export default {
    name: 'LoginForm',
    components: {
      Legend, TextInput, ButtonGroup, Button
    },
    props: {
      classList: {
        type: String,
        default: "",
      },
      action: {
        type: String,
        default: "",
      }
    },
    data() {
      return {

      }
    },
    computed: {
      classes() {
        return `login-form ${this.classList}`;  
      },
      navItems() {
          return this.navitems
      }
    },
    methods: {
      logIn (){
        this.$store.state.ui.loggedIn = true
      }
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
