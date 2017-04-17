<template>

<mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
</mt-actionsheet>

 
</template>
import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);
<script>

export default {
	data(){
		return{
			
		
		}
		
		
	}

}

  

</script>

<style>

</style>