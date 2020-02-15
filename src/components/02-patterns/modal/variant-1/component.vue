<template>

  <div :class="classes" v-if="this.state.visibility == 'visible'">
    <div class="modal">
      <div class="modal_content">
        <Button class="button button--icononly" @click="closeModal()">
          <span class="button_text">Close</span>
          <Icon iconPlacement="before" iconGraphic="close" />
        </Button>
        <h2 class="modal_title">{{this.title}}</h2>
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script>

  //Event bus --
  import { eventBus } from "@/events/index";

  //Tokens --
  import Icon from      '@/components/00-tokens/icon/variant-1/component.vue'

  //Arrangements --

  //Patterns --  
  import Button from    '@/components/02-patterns/button/variant-1/component.vue'

  //Modules --

  //Pages --

  export default {
    name: 'Modal',
    components: {
      Button, Icon
    },
    data() {
      return {
        state: {
          visibility: this.initialState
        }
      };
    },
    props: {
      classList: {
        type: String,
        default: "",
      },
      initialState:{
        type: String,
        default: "hidden",
      },
      title: {
        type: String,
        required: true,
        default: 'Modal title'
      }
    },
    computed: {
      classes() {
        return `modal_overlay ${this.classList}`;
      }
    },
    methods: {
      openModal() {
        //console.log("Called openModal in Modal");
        this.state.visibility = 'visible'
      },
      closeModal() {
        //console.log("Called closedModal in Modal");
        this.state.visibility = 'hidden'
      }
    },
    created() {
        eventBus.$on('openModal', () => {
          //console.log("Called openModal on eventBus");
          this.openModal();
        })
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
