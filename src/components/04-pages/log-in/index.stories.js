import { storiesOf } from '@storybook/vue'
import store from '@/store';

import LogInPage from './variant-1/component.vue'

storiesOf('Components/Pages/Log in', module)
  .add('Default', () => ({
  	store,
    components: { LogInPage },
    template: '<LogInPage />'
  }));