<template>
  <div :class="classes">
    <label :for="id" class="text-input_label">{{ label }}</label>
    <input type="text" :id="id" :value="value" :placeholder="placeholder" />
    <T3 v-if="fieldError" class="text-input_message text-input_message--error">{{fieldError.message}}</T3>
  </div>
</template>

<script>

  //Tokens --

  //Arrangements --
  import T3 from            '../../01-arrangements/t3/component.vue'

  //Patterns --

  //Modules --

  //Pages --
  

  export default {
    components: {
      T3
    },
    name: 'TextInput',
    props: {
      classList: {
        type: String,
        default: "",
      },
      label: {
        type: String,
        required: true
      },
      labelVisible: {
        type: Boolean,
        default: true
      },
      id: {
        type: String,
        required: true
      },
      value: {
        type: String
      },
      placeholder: {
        type: String
      },
    },
    data: function () {
      return {
        fieldError: {
          message: "This field is required"
        }
      }
    },
    computed: {
      classes() {
        return `text-input ${this.classList}`;  
      },
    },
    methods: {
      validate(){


      }
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "../../../00-tokens/colours/variant-1/_style";
  @import "../../../00-tokens/fonts/variant-1/_style";
  @import "../../../00-tokens/dimensions/variant-1/_style";
  @import "../../../00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
