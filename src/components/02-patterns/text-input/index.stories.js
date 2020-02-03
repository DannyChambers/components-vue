/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import TextInput from './index.vue'

storiesOf('Components/Patterns/Text input', module)
  .add('Default', () => ({
    components: { TextInput },
    template: '<TextInput inputID="abc" />'
  }));