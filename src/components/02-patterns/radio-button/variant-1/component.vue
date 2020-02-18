<template>

  <fieldset :class="classes">
    <legend class="legend">{{this.legend}}</legend>

    <label v-for="(option, index) in generateOptions" :key="{index}" class="label">
      <span class="label_text">{{option}}</span>
      <input type="radio" :name="{name}" />
      <em></em>
    </label>

  </fieldset>

</template>

<script>
  export default {
    name: 'RadioButton',
    props: {
      classList:{
        type: String,
        default: "",
      },
      name: {
        type: String,
        required: true
      },
      legend: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      options: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `radio-buttons ${this.classList}`;  
      },
      generateOptions() {
        return this.options.split('|');
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
