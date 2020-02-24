
<template>

  <div>
    <Milton />
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --

  //Patterns --

  //Modules --
  import Milton from            '@/components/03-modules/milton/variant-1/component.vue'

  //Pages --

  export default {
      name: 'MiltonPrototype',
    components: {
      Milton
    },
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `milton ${this.classList}`;  
      },
    },
    methods: {
    }
  }

</script>

<style lang="scss">

</style>



