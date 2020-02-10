<template>
  <div :class="classes">
    <label for="{id}" class="toggle_label">{{labelText}}</label>
    <div class="toggle_switch">
      <input type="checkbox" id="{id}" class="toggle_input" />
      <em></em>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      classList:{
        type: String,
        default: "",
      },
      classList:{
        type: String,
        default: "",
      },
      id: {
        type: String,
        required: true
      },
      labelText: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `toggle ${this.classList}`;  
      },
    },
    methods: {
      onClick() {
        this.$emit('click')
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
