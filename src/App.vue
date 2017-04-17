<template>

	<div id="app">
			<div id="www">
			<v-header></v-header>
		 
			<v-navf></v-navf>
			
			</div>

		
			
	
	</div>
</template>

<script>
	import Header from './components/xinge/header.vue';

	import Navf from './components/xinge/navf.vue';


	export default {

		name: 'app',
		data() {
			return {

			}
		},
	
		components: {
			'v-header': Header,
			
				'v-navf': Navf
			
				

		}
	}
</script>

<style lang="scss">


	/*html {
		font-size: 31.25vw;
		* {
			margin: 0;
			padding: 0;
		
		}
		
		
		
	}
	
	ul,
	dl,
	li {
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}*/
	
	/*#app {
		font-size: .12rem;
		display: flex;
		flex-direction: column;
	
		height: 100%;
		
	}*/
	

	

</style>