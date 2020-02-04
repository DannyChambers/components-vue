import { storiesOf } from '@storybook/vue'

import Layout from './index.vue'

storiesOf('Components/Arrangements/Layout', module)
	.add('50-50', () => ({
		components: { Layout },
		template: `
			<Layout variant="50_50">
				<div class="column">
					<div>Column 1</div>
				</div>
				<div class="column">
					<div>Column 2</div>
				</div>
			</Layout>
		`
	}))
	.add('60-40', () => ({
		components: { Layout },
		template: `
			<Layout variant="60_40">
				<div class="column">
					<div>Column 1</div>
				</div>
				<div class="column">
					<div>Column 2</div>
				</div>
			</Layout>
		`
	}))
	.add('70-30', () => ({
		components: { Layout },
		template: `
			<Layout variant="70_30">
				<div class="column">
					<div>Column 1</div>
				</div>
				<div class="column">
					<div>Column 2</div>
				</div>
			</Layout>
		`
	}))
	.add('80-20', () => ({
		components: { Layout },
		template: `
			<Layout variant="80_20">
				<div class="column">
					<div>Column 1</div>
				</div>
				<div class="column">
					<div>Column 2</div>
				</div>
			</Layout>
		`
	}))
	.add('33-33-33', () => ({
		components: { Layout },
		template: `
			<Layout variant="33_33_33">
				<div class="column">
					<div>Column 1</div>
				</div>
				<div class="column">
					<div>Column 2</div>
				</div>
				<div class="column">
					<div>Column 2</div>
				</div>
			</Layout>
		`
	}));







