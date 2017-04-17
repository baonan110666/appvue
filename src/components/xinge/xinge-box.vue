<template>
	<div class="box">
		<v-nav></v-nav>	
		
		<v-count></v-count>

	</div>
</template>

<script>
	import Nav from './nav.vue';
	import Count from './count.vue';

	export default {

		data() {
				return {

				}
			},
			components: {
				'v-nav': Nav,
				'v-count': Count
			
				

			}

	}
</script>

<style lang="scss">
	@charset "utf-8";
	/*.box {
      
		display: flex;
		flex-direction: column;

	
		
	}*/
</style>