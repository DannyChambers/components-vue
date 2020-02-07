import { storiesOf } from '@storybook/vue'

import Container from './variant-1/component.vue'

storiesOf('Components/Arrangements/Container', module)
  .add('Default', () => ({
    components: { Container },
    template: '<Container />'
  }));