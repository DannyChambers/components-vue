import { storiesOf } from '@storybook/vue'

import SelectInput from './variant-1/component.vue'
import SelectInput2 from './variant-2/component.vue'

storiesOf('Components/Patterns/Select', module)
  .add('Default', () => ({
    components: { SelectInput },
    template: '<SelectInput id="xyz" labelText="Select an item"/>'
  }))
  .add('Three or less options', () => ({
    components: { SelectInput2 },
    template: '<SelectInput2 id="xyz" labelText="Select an item"/>'
  }));