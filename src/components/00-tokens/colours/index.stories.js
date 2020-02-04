import { storiesOf } from '@storybook/vue'

import Colours from './index.vue'

storiesOf('Components/Tokens/Colours', module)
  .add('Palette', () => ({
    components: { Colours },
      template: '<Colours />'
  }));