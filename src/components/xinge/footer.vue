<template>
     <div>
   
		<div class="footer" id="footer" style="position: absolute;left:0;bottom: 0;">
		<div class="fo" @click="bigshow">
		<p><span><img :src='msg.image'/></span><span><i ref="i">{{msg.sing}}</i><i>{{msg.preson}}</i></span></p>
		<!--<audio id="myaudio" src='http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000' >-->
		<audio id="myaudio"  :src='msg.hash'>

		</audio>
		</div>
			
	
	<i class="icon iconfont ico"@click="autoPlay">&#xe638;</i>
	</div>
<div id="autoDiv"  style="width:100%;height:100%;background: rgba(0, 0, 0, 1);position:absolute;left:800px;top:0">
	<div class="header">
		<i @click="smallShow" class="iconfont">&#xe697;</i><i>{{msg.sing}}</i>
		
	</div>
	<div class="imgs">
		<p><img :src='msg.image'/></p>
			<i class="icon iconfont ico" @click="autoPlay" style="color:#fff;font-size:30px;">&#xe60a;</i>
			

		
	</div>
		
	</div>
</div>
</template>

<script>
	export default {

		data() {
				return {
          flag:true,
    
				}
			},
            props:["msg"],
            	mounted:function(){
//                if(this.$refs.i.innerHTML==""){
//                	this.$refs.i.innerHTML="222";
//                	
//                }else{
//                		this.$refs.i.innerHTML="";
//                		
//                	
//                }
			       
            	},
			methods: {
        
          
          	autoPlay() {
          		console.log("aaa");
	var myAuto = document.getElementById('myaudio');
	var icon=document.getElementsByClassName("ico")[0];
			if(this.flag) {

			myAuto.play();
      icon.innerHTML="&#xe60a;";
				this.flag = false;
			} else if(this.flag == false) {
       	myAuto.pause();
         icon.innerHTML="&#xe638;";
				this.flag = true;
			}
		},

		bigshow(){
			
			var autoDiv=document.getElementById('autoDiv');
				var footer=document.getElementById("footer");
			
			var count=800;
			var num=0;
			var time=setInterval(function(){
			count-=50;
			num-=5;
				console.log(count);
					autoDiv.style.left=count+"px";
					footer.style.bottom=num+"px";
				if(count==0){
					autoDiv.style.left=count+"px";
					clearInterval(time);
					
				}
				if(num==-60){
					footer.style.bottom=num+"px";
						
				}
				
			},20)
			
			
			
		},
		smallShow(){
		var autoDiv=document.getElementById('autoDiv');
		var footer=document.getElementById("footer");
			var count=0;
			var num=-60;
			var time=setInterval(function(){
			count+=50;
			num+=5;
				console.log(count);
					autoDiv.style.left=count+"px";
					footer.style.bottom=num+"px";
					if(num==0){
						footer.style.bottom=num+"px";	
						clearInterval(time);
					}
				
				if(count==800){
					autoDiv.style.left=count+"px";
					
					
					
				}
			
				
			},50)
			
			
			
			
		}
          
          
          
		
			

			}

	}
</script>

<style lang="scss" scoped>
	@charset "utf-8";



</style>