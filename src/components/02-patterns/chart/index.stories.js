import { storiesOf } from '@storybook/vue'
import store from '@/store';

import Chart from './variant-1/component.vue'

storiesOf('Components/Patterns/Chart', module)
   .add('Line', () => ({
  	store,
    components: { Chart },
    template: '<Chart variant="line" endpoint="users" />'
  }))
  .add('Bar', () => ({
    store,
    components: { Chart },
    template: '<Chart variant="bar" endpoint="users" />'
  }))
  .add('Area', () => ({
    store,
    components: { Chart },
    template: '<Chart variant="area" endpoint="users" />'
  }))
  .add('Radar', () => ({
    store,
    components: { Chart },
    template: '<Chart variant="radar" endpoint="users" />'
  }))
  .add('Pie', () => ({
    store,
    components: { Chart },
    template: '<Chart variant="pie" endpoint="users" />'
  }));