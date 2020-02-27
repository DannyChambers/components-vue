
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import Logo from './variant-1/component.vue'

storiesOf('Components/Tokens/logo', module)
  .add('Default', () => ({
    components: { Logo },
    template: '<Logo />'
  }));