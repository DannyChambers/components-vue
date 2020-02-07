import { storiesOf } from '@storybook/vue'

import PrimaryNavigation 	from './variant-1/component.vue'

storiesOf('Components/Modules/Primary navigation', module)
  .add('Default', () => ({
    components: { PrimaryNavigation },
    template: '<PrimaryNavigation />'
  }));