import { storiesOf } from '@storybook/vue'
import store from '@/store';

import HomePage from './variant-1/component.vue'

storiesOf('Components/Pages/Home', module)
  .add('Default', () => ({
  	store,
    components: { HomePage },
    template: '<HomePage />'
  }));