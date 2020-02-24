import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import store from '@/store';
import scrollobserver from '@/directives/scroll-into-view'
Vue.directive('scrollobserver', scrollobserver);

import TestPage from './variant-1/component.vue'

storiesOf('Components/Pages/Test page', module)
  .add('Default', () => ({
  	store,
    components: { TestPage },
    template: '<TestPage />'
  }));