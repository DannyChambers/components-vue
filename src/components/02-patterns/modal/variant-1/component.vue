<template>

  <div :class="classes" v-if="this.open">
    <div class="modal">
      <div class="modal_content">
        <button class="button button--icononly">
          <span class="button_text">Close</span>
          <Icon icon_placement="before" icon_graphic="close" />
        </button>
  
        <slot></slot>

      </div>
    </div>
  </div>

</template>

<script>

  //Tokens --
  import Icon from          '@/components/00-tokens/icon/variant-1/component.vue'

  //Arrangements --

  //Patterns --  

  //Modules --

  //Pages --

  export default {
    name: 'Modal',
    components: {
      Icon
    },
    props: {
      classList:{
        type: String,
        default: "",
      },
      classList:{
        type: String,
        default: "",
      },
      open: {
        type: Boolean,
        required: true,
        default: false
      }
    },
    computed: {
      classes() {
        return `modal_overlay ${this.classList}`;
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

  @import "./_style";

</style>
