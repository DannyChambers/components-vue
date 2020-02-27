<template>
  <form action="this.action" method="post" v-on:submit.prevent :class="classes">
    <fieldset class="login-form_fieldset">
      <Legend text="Log in" />

      <TextInput label="Username" id="username" v-model="username" />

      <PasswordInput id="password" label="Password" v-model="password" />

      <T3 if="formError" classList="message--error">{{formError}}</T3>

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
  import T3               from '@/components/01-arrangements/t3/variant-1/component.vue'
  import Legend           from '@/components/01-arrangements/legend/variant-1/component.vue'
  import ButtonGroup      from '@/components/01-arrangements/button-group/variant-1/component.vue'

  //Patterns --
  import TextInput 	      from '@/components/02-patterns/text-input/variant-1/component.vue'
  import PasswordInput 	  from '@/components/02-patterns/password-input/variant-1/component.vue'
  import Button 	        from '@/components/02-patterns/button/variant-1/component.vue'

  //Modules --

  //Pages --

  export default {
    name: 'LoginForm',
    components: {
      Legend, TextInput, PasswordInput, ButtonGroup, T3, Button
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
        username: null,
        password: null,
        formError: null
      }
    },
    computed: {
      classes() {
        return `login-form ${this.classList}`;  
      }
    },
    methods: {
      logIn (){

        if(!this.username || !this.password){

          this.formError = "Please complete all fields";

          return

        } else { 

          let users = this.$store.state.data.users;

          for(let i = 0; i < users.length; i++){

              let user = users[i];

              if (this.username == user.username){

                if(this.password == user.password){
                
                  this.$store.dispatch('logInUser', user.id);
                  this.$emit('logInAttempt', true);

                  return;

                } else {
                  this.formError = "Incorrect password";
                }

                return

              } else {
                
                if(i == (users.length - 1)){
                  this.formError = "Username not recognised";
                }
              }
          }
        }
      }
    },
    mounted () {
      this.$store.dispatch('loadData', 'users');
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
