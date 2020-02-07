import { storiesOf } from '@storybook/vue'

import T2 from   '../../01-arrangements/t2/component.vue'
import Card from './variant-1/component.vue'

storiesOf('Components/Arrangements/Card', module)
  .add('Default', () => ({
    components: { Card, T2 },
    template: `
          <Card>
          	<h2 class="card_title">Card title here</h2>
          	<div class="card_content">
          		<T2>Loren ipsum dolor sit etiet emet..</T2>
          	</div>
          </Card>
    `
  }));