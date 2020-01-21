import { storiesOf } from '@storybook/vue'

import Dimensions from './index.vue'

storiesOf('Components/Tokens/Dimensions', module)
  .add('Default', () => ({
    components: { Dimensions },
    template: '<Dimensions />'
  }));