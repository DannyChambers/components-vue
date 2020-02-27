import { storiesOf } from '@storybook/vue'
import store from '@/store';

import SplashPage from './variant-1/component.vue'

storiesOf('Components/Pages/Splash', module)
  .add('Default', () => ({
  	store,
    components: { SplashPage },
    template: '<SplashPage />'
  }));