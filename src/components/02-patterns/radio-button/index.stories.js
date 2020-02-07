/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import RadioButton from './variant-1/component.vue'

storiesOf('Components/Patterns/Radio button', module)
  .add('Default', () => ({
    components: { RadioButton },
    template: '<RadioButton groupname="group_1" text="Radio button label" />'
  }));