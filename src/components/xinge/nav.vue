<template>
  <div class="nav">

				<div class="swiper-container" id="min-swiper">
				<div class="swiper-wrapper">
		
				<div class="swiper-slide">
						<img src="../../images/87435.jpg"/>
					
				</div>
					<div class="swiper-slide">
						<img src="../../images/87660.jpg"/>
					
				</div>
					<div class="swiper-slide">
						<img src="../../images/87678.jpg"/>
					
				</div>
					<div class="swiper-slide">
						<img src="../../images/87757.jpg"/>
					
				</div>
					<div class="swiper-slide">
						<img src="../../images/87438.jpg"/>
					
				</div>
	<div class="swiper-pagination"></div>

	
			
		</div>
		
		</div>
  </div>
</template>

<script>

export default {


  data () {
    return {
    
   }
  },
   mounted: function () {
  
   	var mSwiper=new Swiper('#min-swiper',{
	autoplay:1000,
	loop:true,
	autoplayDisableOnInteraction:false,
	     pagination: '.swiper-pagination'

   
	
});
    
      }

}
</script>

<style lang="scss">
@charset "utf-8";
/*.nav{

	width:100%;


	img{
		width:100%;
		
	}
	
}*/

</style>
