
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import H2 from '@/components/01-arrangements/h2/variant-1/component.vue'
import Ul from '@/components/01-arrangements/ul/variant-1/component.vue';
import Icon from './variant-1/component.vue'

storiesOf('Components/Tokens/Icons', module)
  .add('Default', () => ({
    components: { H2, Ul, Icon },
    template: `
    <div>
      <H2>Icons</H2>
      <Ul classList="token-list">
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Github</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="github" /></div>
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Facebook</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="facebook" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Twitter</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="twitter" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> LinkedIn</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="linkedin" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Checkmark</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="checkmark" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Cheveron</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="cheveron" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Close</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="close" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Menu</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="menu" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Envelope</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="envelope" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Happy</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="mood-happy-outline" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Neutral</div>    
            <div><strong>Graphic: </strong> <Icon iconPlacement="before" iconGraphic="mood-neutral-outline" /></div>
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Sad</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="mood-sad-outline" />
          </div>
        </li>
        <li class="list_item">
          <div>
            <div><strong>Name: </strong> Search</div>
            <div><strong>Graphic: </strong><Icon iconPlacement="before" iconGraphic="search" /></div>
          </div>
        </li>
      </Ul>
    </div>
    `
  }));