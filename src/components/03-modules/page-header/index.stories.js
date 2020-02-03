import { storiesOf } from '@storybook/vue'

import PageHeader 	from './index.vue'
import Container 	from '../../01-arrangements/container/index.vue'
import H2 			from '../../01-arrangements/typography/h2.vue'

storiesOf('Components/Modules/Page header', module)
  .add('Default', () => ({
    components: { PageHeader, Container, H2 },
    template: '<PageHeader><H2 text="Page header" /></PageHeader>'
  }));