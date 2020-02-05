<template>
  <div :class="classes">

    <ul class="primary-navigation_list">
      <li  v-for="navItem in navItems" :key="navItem">{{navItem}}</li>
    </ul>

  </div>
</template>

<script>

  //Tokens --

  //Arrangements --

  //Patterns --

  //Modules --

  //Pages --

  export default {
    name: 'PrimaryNavigation',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    data() {
      return {
        loggedIn: {
          items: ['Item one', 'Item two', 'Item three', 'Item four', 'Item five']
        },
        loggedOut: {
          items: ['Item one', 'Item two', 'Item three', 'Item four']
        }
      }
    },
    computed: {
      classes() {
        return `primary-navigation ${this.classList}`;  
      },
      navItems() {
        if(false){//Look for logged in state here
          return this.loggedIn.items
        } else {
          return this.loggedOut.items
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "../../00-tokens/colours/_index";
  @import "../../00-tokens/fonts/_index";
  @import "../../00-tokens/dimensions/_index";


  @import "./_index";

</style>
