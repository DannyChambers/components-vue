<template>
  <div :class="classes">
    <label :for="id" class="text-input_label">{{ label }}</label>
    <input :type="type" :id="id" :value="value" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      classList: {
        type: String,
        default: "",
      },
      labelVisible: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "text"
      },
      id: {
        type: Boolean,
        required: true
      },
      value: {
        type: String
      },
      placeholder: {
        type: String
      },
    },
    computed: {
      classes() {
        return `text-input ${this.classList}`;  
      },
    },
    methods: {
      onClick() {
      }
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
