<template>
  <div :class="classes">

    <ul class="app-bar_list">
      <li  v-for="navItem in navItems" :key="navItem"><router-link to="/">{{navItem}}</router-link></li>
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
    name: 'AppBar',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    data() {
      return {
        navitems: ['Item one', 'Item two', 'Item three', 'Item four', 'Item five']
      }
    },
    computed: {
      classes() {
        return `app-bar ${this.classList}`;  
      },
      navItems() {
          return this.navitems
      }
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

  @import "./_style";

</style>
