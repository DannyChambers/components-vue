
<template>

  <div :class="classes">

    <Pane v-scrollobserver>
      <Container>

        <H2>Home</H2>

        <PrimaryNavigation />

        <br/><br/>

        <LoginForm />
    
      </Container>
    </Pane>

    <Pane v-scrollobserver>
      <Container>

        <Layout variant="25_25_25_25">

          <div class="column" v-for="product in products" :key="product.id">

            <Card>
              <h2 class="card_title">{{product.title}}</h2>
              <div class="card_content">
                <T2>{{product.description}}</T2>
                <T2>{{product.category}}</T2>
              </div>
            </Card>

          </div>

        </Layout>

      </Container>
    </Pane>

    <Pane v-scrollobserver>
      <Container>

        <TextInput id="name" label="Name" />

        <br/><br/>

        <Textarea id="comment" label="Comment" maxLength="140" />

        <br/><br/>

        <Select2 id="abc" labelText="Select an item" options="Option one | Option two | Option three" />

        <br/><br/>

        <Select1 id="xyz" labelText="Select an item" options="Option one | Option two | Option three | Option four | Option five" />

        <br/><br/>

        <Toggle />

      </Container>
    </Pane>

    <Pane v-scrollobserver>
      <Container>

        <Modal id="xyz">
          <h2 class="modal_title">Modal title here..</h2>
          <T2>Some modal content</T2>
        </Modal>
        <Button variant="secondary" text="Open modal" @click="openModal('xyz')" />

      </Container>
    </Pane>

  </div>

</template>

<script>
  
  //Tokens --

  //Arrangements --
  import Container          from '@/components/01-arrangements/container/variant-1/component'
  import Layout             from '@/components/01-arrangements/layout/variant-1/component'
  import Pane               from '@/components/01-arrangements/pane/variant-1/component'
  import H2                 from '@/components/01-arrangements/h2/variant-1/component'
  import T2                 from '@/components/01-arrangements/t2/variant-1/component'
  import T3                 from '@/components/01-arrangements/t3/variant-1/component'
  import Card               from '@/components/01-arrangements/card/variant-1/component'
  import ButtonGroup        from '@/components/01-arrangements/button-group/variant-1/component'

  //Patterns --
  import Textarea           from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput          from '@/components/02-patterns/text-input/variant-1/component'
  import Select1            from '@/components/02-patterns/select/variant-1/component'
  import Select2            from '@/components/02-patterns/select/variant-2/component'
  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'

  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'

  //Modules --
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  
  //Pages --

  export default {
    name: 'TestPage',
    components: {
      Container, Layout, Pane, LoginForm, PrimaryNavigation, Card, H2, T2, TextInput, Textarea, Select1, Select2, Toggle, ButtonGroup, Button, Modal
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
        return `test-page ${this.classList}`;  
      },
      products() {
        return this.$store.state.data.products;
      }
    },
    methods: {
      openModal (id){
        //console.log("Called openModal in Home");
        this.$store.state.ui.modal.visible = id
      }
    },
    created() {
      this.$store.dispatch('loadData', 'products');
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



