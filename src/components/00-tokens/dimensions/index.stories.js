import { storiesOf } from '@storybook/vue'

import Dimensions from './variant-1/component.vue'

storiesOf('Components/Tokens/Dimensions', module)
  .add('Default', () => ({
    components: { Dimensions },
    template: '<Dimensions />'
  }));