
<template>

  <div :class="classes">
    <label :for="id" class="textarea_label">{{ label }}</label>
    <textarea v-model="text" :id="id" :name="id" @keyup="autosize" :maxlength="maxLength" class="textarea_input"></textarea>
    <T3 class="textarea_message textarea_message--information">{{ charactersRemaining }} of {{ this.maxCharacters }} characters remaining.</T3>
  </div>

</template>

<script>

  //Tokens --

  //Arrangements --
  import T3 from            '../../01-arrangements/typography/t3.vue'

  //Patterns --

  //Modules --

  //Pages --


  export default {
    components: {
      T3
    },
    props: {
      classList: {
        type: String,
        default: "",
      },
      labelVisible: {
        type: Boolean,
        default: true
      },
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      },
      maxLength: {
        type: Number,
        required: true
      },
    },
    data: function() {
      return {
        text: '',
        maxCharacters: 140,
      }
    },
    computed: {
      classes() {
        return `textarea ${this.classList}`;  
      },
      charactersRemaining: function () {
        return (this.text.length < this.maxCharacters) ? (this.maxCharacters - this.text.length) : 0;
      }
    },
    methods: {
      autosize: function(){
        console.log("autosize");

        setTimeout(function(){

          let input = this.$el.getElementsByTagName('textarea')[0];
          input.style.height = "auto";
          input.style.height = `${input.scrollHeight}px`;
          
        }.bind(this), 0);

      }
    },
    mounted: function () {
      this.maxCharacters = this.maxLength;
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



