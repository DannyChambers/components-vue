import { storiesOf } from '@storybook/vue'

import Colours from './index.vue'

storiesOf('Components/Tokens/Colours', module)
  .add('Primary pallette', () => ({
    components: { Colours },
      template: '<Colours />'
  }));