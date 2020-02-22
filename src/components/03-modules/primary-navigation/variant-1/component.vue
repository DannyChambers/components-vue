<template>
  <div :class="this.$store.state.ui.primaryNavigation.visible == true ? 'primary-navigation primary-navigation--visible' : 'primary-navigation'" >

    <Button variant="icononly" classList="primary-navigation_trigger" @click="toggleMenu()">
      <span class="button_text">Menu</span>
      <Icon iconPlacement="after" iconGraphic="close" />
    </Button>

    <ul class="primary-navigation_list">
      <li  v-for="navItem in navItems" :key="navItem" class="primary-navigation_list-item"><router-link to="/" class="primary-navigation_link"><span class="link_text">{{navItem}}</span></router-link></li>
    </ul>

  </div>
</template>

<script>

  //Tokens --
  import Icon               from '@/components/00-tokens/icon/variant-1/component'

  //Arrangements --

  //Patterns --
  import Button             from '@/components/02-patterns/button/variant-1/component'

  //Modules --
  
  //Pages --

  export default {
    name: 'PrimaryNavigation',
    components: {
      Button, Icon
    },
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
        if(this.$store.state.ui.loggedIn === true){
          return this.loggedIn.items
        } else {
          return this.loggedOut.items
        }
      }
    },
    methods: {
      toggleMenu (){
        //console.log("Called toggleMenu");
        if(this.$store.state.ui.primaryNavigation.visible == true){
          this.$store.state.ui.primaryNavigation.visible = false
        } else {
          this.$store.state.ui.primaryNavigation.visible = true
        }
      }
    }
  }
</script>

<style lang="scss">

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
