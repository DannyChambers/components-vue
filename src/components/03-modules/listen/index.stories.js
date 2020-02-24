import { storiesOf } from '@storybook/vue'

import Listen 	from './variant-1/component.vue'

storiesOf('Components/Modules/Listen', module)
  .add('Default', () => ({
    components: { Listen },
    template: '<Listen watchword="Milton" />'
  }));