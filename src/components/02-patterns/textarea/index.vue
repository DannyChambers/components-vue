
<template>

  <div :class="classes">
    <label :for="id" class="textarea_label">Comment</label>
    <textarea v-model="text" :id="id" :name="id" @keyup="autosize" max-length="" class="textarea_input"></textarea>
    <p class="textarea_message">{{charactersRemaining}} of {{this.maxCharacters}} characters remaining.</p>
  </div>

</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
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
        return this.maxCharacters - this.text.length;
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



