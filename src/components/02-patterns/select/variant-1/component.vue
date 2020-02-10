<template>
  <div :class="classes">
    <label for="{id}" class="select_label">{{labelText}}</label>
    
    <select class="select_input">
      <option v-for="option in options">{{option}}</option>
    </select>
    <span></span>

  </div>
</template>

<script>
  export default {
    name: 'Select',
    props: {
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
    data: function() {
      return {
        options: [
          "Option one",
          "Option two",
          "Option three",
          "Option four",
          "Option five",        ]
      }
    },
    computed: {
      classes() {
        return `select ${this.classList}`;  
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
