<template>

  <label :class="classes">
    <span class="label_text">{{text}}</span>
    <input type="radio" :name="groupname" />
    <em></em>
  </label>

</template>

<script>
  export default {
    name: 'RadioButton',
    props: {
      classList:{
        type: String,
        default: "",
      },
      groupname: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `label radio-button ${this.classList}`;  
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
