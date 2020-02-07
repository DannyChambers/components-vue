import { storiesOf } from '@storybook/vue'

import Colours from './variant-1/component.vue'

storiesOf('Components/Tokens/Colours', module)
  .add('Palette', () => ({
    components: { Colours },
      template: '<Colours />'
  }));