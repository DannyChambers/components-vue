
import { storiesOf } from '@storybook/vue'

import Button from '@/components/02-patterns/button/variant-1/component.vue'
import Modal from './variant-1/component.vue'

storiesOf('Components/Patterns/Modal', module)
  .add('Default', () => ({
    components: { Modal, Button },
    template: `
        <div>
          <Modal title="This is a modal" initialState="hidden" />
          <Button variant="secondary" text="Open modal" />
        </div>
      `
    }));