/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Checkbox from './index.vue'

storiesOf('Components/Patterns/Checkbox', module)
  .add('Default', () => ({
    components: { Checkbox },
    template: '<Checkbox groupname="group_1" text="Checkbox label" />'
  }));