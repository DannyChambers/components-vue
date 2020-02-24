import { storiesOf } from '@storybook/vue'

import Speak 	from './variant-1/component.vue'

storiesOf('Components/Modules/Speak', module)
  .add('Default', () => ({
    components: { Speak },
    template: `
      <Speak phrase="Hello, I am Milton.." />
    `
  }));