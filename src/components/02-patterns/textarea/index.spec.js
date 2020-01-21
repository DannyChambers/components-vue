import { shallowMount } from "@vue/test-utils";
import Textarea from './index.vue'

describe('Textarea', () => {
  test('character count decreases', () => {
	const wrapper = shallowMount(Textarea, {
	  propsData: {
	    id: 'xyz',
	    name: 'xyz',
	    label: 'Comment',
	    maxLength: 140
	  }
	})
    let tm = wrapper.find('.textarea_message')
    expect(tm.text()).toContain('140 of 140 characters remaining.')
    wrapper.find('.textarea_input').trigger('keydown')
    wrapper.find('.textarea_input').setValue('abc')
    expect(tm.text()).toContain('137 of 140 characters remaining.')
  })
})