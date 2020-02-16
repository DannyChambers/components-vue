<template>

  <div :class="classes" v-if="this.$store.state.ui.modal.visible == this.id">
    <div class="modal" @click.self="closeModal()">
      <div class="modal_content">
        <Button class="button button--icononly" @click="closeModal()">
          <span class="button_text">Close</span>
          <Icon iconPlacement="before" iconGraphic="close" />
        </Button>
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script>

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
      };
    },
    props: {
      classList: {
        type: String,
        default: "",
      },
      id: {
        type: String,
        required: true,
      }
    },
    computed: {
      classes() {
        return `modal_overlay ${this.classList}`;
      }
    },
    methods: {
      closeModal() {
        //console.log("Called closedModal in Modal");
        this.$store.state.ui.modal.visible = null
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
