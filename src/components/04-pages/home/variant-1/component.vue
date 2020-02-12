
<template>

  <div :class="classes">
    <Container>

      <H2>Home</H2>

      <Layout variant="25_25_25_25">

        <div class="column" v-for="product in products" :key="product.id">

          <Card>
            <h2 class="card_title">{{product.title}}</h2>
            <div class="card_content">
              <T2>{{product.content}}</T2>
            </div>
          </Card>

        </div>

      </Layout>

      <Textarea id="comment" label="Comment" maxLength="140" />

      <Button variant="primary" text="Submit" />
      
    </Container>
  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --
  import Container from     '@/components/01-arrangements/container/variant-1/component'
  import Layout from        '@/components/01-arrangements/layout/variant-1/component'
  import H2 from            '@/components/01-arrangements/h2/variant-1/component'
  import T2 from            '@/components/01-arrangements/t2/variant-1/component'
  import Card from          '@/components/01-arrangements/card/variant-1/component'

  //Patterns --
  import Textarea from      '@/components/02-patterns/textarea/variant-1/component'
  import Button from        '@/components/02-patterns/button/variant-1/component'

  //Modules --

  //Pages --

  export default {
    components: {
      Container, Layout, Card, H2, T2, Textarea, Button
    },
    props: {
      classList:{
        type: String,
        default: ""
      }
    },
    data: function () {
      return {
     
      }
    },
    computed: {
      classes() {
        return `home ${this.classList}`;  
      },
      products() {
        return this.$store.state.products;
      }
    },
    methods: {
    },
    created() {
      this.$store.dispatch('loadData', 'products');
    }
  }

</script>

<style lang="scss">

  //local styles --
  @import "./_style";

</style>



