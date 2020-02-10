<template>
  <div :class="classes">
    <label for="{id}" class="select_label">{{labelText}}</label>
    
    <div v-if="options.length > 4">
      <select class="select_input" id="{id}">
        <option v-for="option in options">{{option}}</option>
      </select>
      <span></span>
    </div>

    <div v-else>
      <label v-for="option in options" class="select_label select_label--button">
        <input type="radio"  name="{id}"/>
        <span>{{option}}</span>
      </label>
    </div>

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
          "Option three"
        ]
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
