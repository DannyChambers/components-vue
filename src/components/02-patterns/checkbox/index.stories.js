import { storiesOf } from '@storybook/vue'

import Checkboxes from './variant-1/component.vue'

storiesOf('Components/Patterns/Checkboxes', module)
  .add('Multiple', () => ({
    components: { Checkboxes },
    template: '<Checkboxes name="checkbox1" legend="Please specify any of the following options" options="Option one | Option two | Option three" />'
  }))
  .add('Single', () => ({
    components: { Checkboxes },
    template: '<Checkboxes name="checkbox1" legend="This will be ignored as there is only one option in this example" options="A longer label that you might see at the bottom of a form, such as a terms and conditions aknowledgement" />'
  }));