<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	import indexJs from './js/index'
	export default {
		name: 'App',
		mounted() {
			indexJs.flexible(750, 750);
		}
	}
</script>

<style>

</style>