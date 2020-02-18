import { storiesOf } from '@storybook/vue'

import LoginForm 	from './variant-1/component.vue'

storiesOf('Components/Modules/Login form', module)
  .add('Default', () => ({
    components: { LoginForm },
    template: `
      <LoginForm />
    `
  }));