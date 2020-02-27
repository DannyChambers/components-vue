
<template>

  <div :class="classes">

    <Pane v-scrollobserver>
      <Container>

        <PageHeader>
          <Logo linkTarget="/alpha-1" />
        </PageHeader>

        <PrimaryNavigation />

        <H2>Hello {{ this.user.firstname }}</H2>

        <AppBar />
    
      </Container>
    </Pane>

  </div>

</template>

<script>
    
  //Tokens --
  import Icon               from '@/components/00-tokens/icon/variant-1/component'
  import Logo               from '@/components/00-tokens/logo/variant-1/component'

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
  import AppBar             from '@/components/03-modules/app-bar/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import Listen             from '@/components/03-modules/listen/variant-1/component'

  
  //Pages --

  export default {
    name: 'HomePage',
    components: {
      Listen, Container, Layout, PageHeader, Logo, PrimaryNavigation, AppBar, Pane, LoginForm, Card, H2, T2, TextInput, PasswordInput, Textarea, Select1, Select2, Toggle, Button, Icon, Modal
    },
    props: {
      classList:{
        type: String,
        default: ""
      }
    },
    data: function () {
      return {
        user: {}
      }
    },
    computed: {
      classes() {
        return `home-page ${this.classList}`;  
      }
    },
    methods: {
    },
    mounted() {
      this.user = this.$store.getters.loggedInUser
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



