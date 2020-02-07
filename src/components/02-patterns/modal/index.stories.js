/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Modal from './variant-1/component.vue'

storiesOf('Components/Patterns/Modal', module)
  .add('Default', () => ({
    components: { Modal },
    template: `
    		<Modal>

    			<h2>This is a modal</h2>

    		</Modal>

    `
    }));