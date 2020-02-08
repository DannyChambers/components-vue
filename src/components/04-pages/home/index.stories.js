import { storiesOf } from '@storybook/vue'
import store from '@/store';

import Home from './variant-1/component.vue'

storiesOf('Components/Pages/Home', module)
  .add('Signed out', () => ({
  	store,
    components: { Home },
    template: '<Home />'
  }));