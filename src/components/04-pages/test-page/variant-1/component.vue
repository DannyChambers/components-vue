
<template>

  <div :class="classes">

    <PageHeader>

      <H2>Test page</H2>

      <Button variant="icononly" classList="primary-navigation_trigger" @click="toggleMenu()">
        <span class="button_text">Menu</span>
        <Icon iconPlacement="after" iconGraphic="menu" />
      </Button>

    </PageHeader>

    <PrimaryNavigation />

    <Pane v-scrollobserver>
      <Container>

        <LoginForm />
    
      </Container>
    </Pane>

    <Pane v-scrollobserver>
      <Container>

        <Layout variant="25_25_25_25">

          <div class="column" v-for="product in getProducts" :key="product.id">

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

        <PasswordInput id="passwordxyz" label="Password" />

        <br/><br/>

        <Textarea id="comment" label="Comment" maxLength="140" />

        <br/><br/>

        <Select2 id="abc" labelText="Select an item" options="Option one | Option two | Option three" />

        <br/><br/>

        <Select1 id="xyz" labelText="Select an item" options="Option one | Option two | Option three | Option four | Option five" />

        <br/><br/>

        <Toggle labelText="Switch on or off" id="toggle" />

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
  import Icon               from '@/components/00-tokens/icon/variant-1/component'

  //Arrangements --
  import Container          from '@/components/01-arrangements/container/variant-1/component'
  import Layout             from '@/components/01-arrangements/layout/variant-1/component'
  import Pane               from '@/components/01-arrangements/pane/variant-1/component'
  import H2                 from '@/components/01-arrangements/h2/variant-1/component'
  import T2                 from '@/components/01-arrangements/t2/variant-1/component'
  import T3                 from '@/components/01-arrangements/t3/variant-1/component'
  import Card               from '@/components/01-arrangements/card/variant-1/component'

  //Patterns --
  import Textarea           from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput          from '@/components/02-patterns/text-input/variant-1/component'
  import PasswordInput      from '@/components/02-patterns/password-input/variant-1/component'
  import Select1            from '@/components/02-patterns/select/variant-1/component'
  import Select2            from '@/components/02-patterns/select/variant-2/component'
  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'

  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'

  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-1/component'
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import Listen             from '@/components/03-modules/listen/variant-1/component'
  

  export default {
    name: 'TestPage',
    components: {
      Listen, Container, Layout, PageHeader, PrimaryNavigation, Pane, LoginForm, Card, H2, T2, TextInput, PasswordInput, Textarea, Select1, Select2, Toggle, Button, Icon, Modal
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
      getProducts() {
        return this.$store.state.data.products;
      }
    },
    methods: {
      toggleMenu (){
        if(this.$store.state.ui.primaryNavigation.visible == true){
          this.$store.state.ui.primaryNavigation.visible = false
        } else {
          this.$store.state.ui.primaryNavigation.visible = true
        }
      },
      openModal (id){
        this.$store.state.ui.modal.visible = id
      },
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



