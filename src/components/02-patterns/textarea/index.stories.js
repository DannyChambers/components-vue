/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Textarea from './index.vue'

storiesOf('Components/Patterns/Textarea', module)
  .add('Default', () => ({
    components: { Textarea },
    template: '<Textarea id="comment" label="Comment" maxLength="140" />'
  }));