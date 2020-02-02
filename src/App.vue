<template>
  <div id="app">
	<Textarea  id="abc" label="Message" maxLength="140" />
  </div>
</template>

<script>
	import Textarea from './components/02-patterns/textarea/index.vue'

	export default {
		name: 'app',
		components: {
			Textarea
		}
	}
</script>

<style>

</style>
