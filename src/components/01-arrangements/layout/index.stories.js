import { storiesOf } from '@storybook/vue'

import T2 from            '../../01-arrangements/t2/component.vue'
import Layout from './variant-1/component.vue'

storiesOf('Components/Arrangements/Layout', module)
	.add('50-50', () => ({
		components: { Layout, T2 },
		template: `
			<Layout variant="50_50">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('60-40', () => ({
		components: { Layout, T2 },
		template: `
			<Layout variant="60_40">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('70-30', () => ({
		components: { Layout, T2 },
		template: `
			<Layout variant="70_30">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('80-20', () => ({
		components: { Layout, T2 },
		template: `
			<Layout variant="80_20">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('33-33-33', () => ({
		components: { Layout, T2 },
		template: `
			<Layout variant="33_33_33">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}));







