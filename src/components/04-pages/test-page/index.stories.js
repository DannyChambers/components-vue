import { storiesOf } from '@storybook/vue'
import store from '@/store';

import TestPage from './variant-1/component.vue'

storiesOf('Components/Pages/Test page', module)
  .add('Default', () => ({
  	store,
    components: { TestPage },
    template: '<TestPage />'
  }));