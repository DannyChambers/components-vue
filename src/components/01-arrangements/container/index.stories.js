import { storiesOf } from '@storybook/vue'

import Container from './index.vue'

storiesOf('Components/Arrangements/Container', module)
  .add('Default', () => ({
    components: { Container },
    template: '<Container />'
  }));