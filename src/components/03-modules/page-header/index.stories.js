import { storiesOf } from '@storybook/vue'

import PageHeader 	from './variant-1/component.vue'
import Container 	from '../../01-arrangements/container/variant-1/component.vue'
import H2 			from '../../01-arrangements/h2/variant-1/component.vue'

storiesOf('Components/Modules/Page header', module)
  .add('Default', () => ({
    components: { PageHeader, Container, H2 },
    template: '<PageHeader><H2>Page header</H2></PageHeader>'
  }));