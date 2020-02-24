<template>
  <div :class="classes">
    <label :for="id" class="text-input_label">{{ label }}</label>
    <input type="password" :id="id" :value="value" />
    <T3 v-if="fieldError" class="message--error">{{this.fieldError}}</T3>
  </div>
</template>

<script>

  //Tokens --

  //Arrangements --
  import T3 from            '@/components/01-arrangements/t3/variant-1/component'

  //Patterns --

  //Modules --

  //Pages --
  

  export default {
    name: 'PasswordInput',
    components: {
      T3
    },
    props: {
      classList:{
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
      fieldError: {
        type: [String, null]
      }
    },
    data: function () {
      return {
      }
    },
    computed: {
      classes() {
        return `text-input ${this.classList}`;  
      },
      genrateRules() {
        return this.rules.split('|');
      }
    },
    methods: {
      validate(rules){
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
