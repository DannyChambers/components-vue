/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Home from './index.vue'

storiesOf('Components/Pages/Home', module)
  .add('Default', () => ({
    components: { Home },
    template: '<Home />'
  }));