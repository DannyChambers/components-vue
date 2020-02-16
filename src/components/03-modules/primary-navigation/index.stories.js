import { storiesOf } from '@storybook/vue'

import store from '@/store';
import PrimaryNavigation 	from './variant-1/component.vue'

storiesOf('Components/Modules/Primary navigation', module)
  .add('Logged in', () => ({
    store,
    components: { PrimaryNavigation },
    template: '<PrimaryNavigation />'
  }))
  .add('Logged out', () => ({//Logged in state ot working in storybook yet TODO
    store,
    components: { PrimaryNavigation },
    template: '<PrimaryNavigation />'
  }));