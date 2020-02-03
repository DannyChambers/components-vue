import { storiesOf } from '@storybook/vue'

import Grid from './index.vue'

storiesOf('Components/Arrangements/Grid', module)
  .add('Default', () => ({
    components: { Grid },
    template: '<Grid />'
  }));