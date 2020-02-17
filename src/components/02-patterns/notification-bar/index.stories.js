
import { storiesOf } from '@storybook/vue'

import NotificationBar from './variant-1/component.vue'

storiesOf('Components/Patterns/Notification bar', module)
  .add('Information', () => ({
    components: { NotificationBar },
    template: '<NotificationBar variant="information" text="This is a standard dismissable notification bar no time limit and no link" dismissable="true" removeafterseconds="" link="" />'
  }))
  .add('Warning', () => ({
    components: { NotificationBar },
    template: '<NotificationBar variant="warning" text="This is a warning style non-dismissable notification bar no time limit and no link" dismissable="false" removeafterseconds="" link="http://www.alink.com/" />'
  }))
  .add('Success', () => ({
    components: { NotificationBar },
    template: '<NotificationBar variant="success" text="This is a success style dismissable notification bar with a 4 second time limit and no link" dismissable="true" removeafterseconds="4" link="" />'
  }))
  .add('Error', () => ({
    components: { NotificationBar },
    template: '<NotificationBar variant="error" text="This is a standard non-dismissable notification bar no time limit and no link" dismissable="false" removeafterseconds="" link="http://www.alink.com/" />'
  }));