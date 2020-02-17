import { storiesOf } from '@storybook/vue'

import Pane from './variant-1/component.vue'

storiesOf('Components/Arrangements/Pane', module)
  .add('Default', () => ({
    components: { Pane },
    template: '<Pane />'
  }));