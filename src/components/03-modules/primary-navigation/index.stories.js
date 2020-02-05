import { storiesOf } from '@storybook/vue'

import PrimaryNavigation 	from './index.vue'

storiesOf('Components/Modules/Primary navigation', module)
  .add('Default', () => ({
    components: { PrimaryNavigation },
    template: '<PrimaryNavigation />'
  }));