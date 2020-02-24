
<template>

  <div :class="classes">

    <Listen watchword="Milton" :listening="ready" @phrasesHeard="phrasesHeard" />

    <Speak :phrase="response" />

  </div>

</template>

<script>
    
  //Tokens --

  //Arrangements --

  //Patterns --

  //Modules --
  import Listen             from '@/components/03-modules/listen/variant-1/component'
  import Speak              from '@/components/03-modules/speak/variant-1/component'
  
  //Pages --

  export default {
    name: 'Milton',
    components: {
      Listen, Speak
    },
    props: {
      classList:{
        type: String,
        default: ""
      }
    },
    data: function () {
      return {
        ready: true,
        response: ""
      }
    },
    computed: {
      classes() {
        return `milton ${this.classList}`;  
      }
    },
    methods: {
      respond (input){
        this.classify(input);
      },
      categorize (term) {
        console.log("called categorize");

        term = term.toLowerCase();

        if (term.includes("hello") || term.includes("hi") || term.includes("hiya") || term.includes("alright") || term.includes("how's it going")){
          return 'greeting';
        } else 
        
        if (term.includes("how") || term.includes("what") || term.includes("where") || term.includes("why") || term.includes("who") || term.includes("when") || term.includes("which")){
          return 'question';
        }

      },
      async classify (input) {
        console.log("called classify");

        let category = await this.categorize(input);

        if(category !== undefined){

          console.log("Category is: ", category, "'" + input+ "'");

          switch(category){
            case "greeting":
              this.response = "Hello. It's nice to meet you. Would you like to ask me a question?"
            break;
            case "question":
              this.response = "That's a tough one. Perhaps we can't know everything there is to know!"
            break;
            default:
              this.response = "Yikes! I'm not yet intelligent enough to respond to that."
          }

          this.ready = true;
          console.log(this.response);

        }
      },
      phrasesHeard (lastPhrase){
        
        this.ready = false;
        this.respond(lastPhrase)

      }
    }
  }

</script>

<style lang="scss">

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>



