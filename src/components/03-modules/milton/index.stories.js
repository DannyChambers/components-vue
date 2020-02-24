import { storiesOf } from '@storybook/vue'

import Milton from './variant-1/component.vue'

storiesOf('Components/Modules/Milton', module)
  .add('Default', () => ({
    components: { Milton },
    template: '<Milton />'
  }));