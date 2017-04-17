<template>
	  <div class="paihang">
  
<ul>
	
		<router-link :to="{name:'paihang.paihangDetail'}"><li v-for="(item,index) in tasks" :key="index">
<p><span><img :src='item.img'/></span><i>{{item.title}}</i></p>
<i class="icon iconfont">&#xe6a7;</i>
		</li></router-link>

</ul>

  <div class="jiazai">
			<p class="get-more" v-on:click="getMore()" v-show="switchShow"> 点击加载更多</p>
			<p class="loading" v-show="!switchShow">加载中...</p>
		</div>
		

  </div>
	
</template>
<script>

export default {

		data() {
				return {
					tasks: [],
					 nowPage: 0,
           switchShow:true
				}
			},
			
			mounted:function(){
					 

				var that = this;
				this.$http.get('./src/mock/twolist.json')
					.then(function(data) {
						console.log(data.body[0].img);
						that.tasks = data.body.splice(0,4);
						console.log(that.tasks.length);
						
						console.log(data.body);
					}, function(err) {

						console.log(err);

					})
				
				
			},
			methods:{
				moreFnc:function(){
			var that = this;
				this.$http.get('./src/mock/twolist.json')
					.then(function(data) {
						that.tasks =that.tasks.concat(data.body.splice(0,4));
						console.log(that.tasks);
						
						console.log(data.body);
					}, function(err) {

						console.log(err);

					})

			},
			 
				getMore: function() {
						var that = this;
					this.switchShow = !this.switchShow;//点击加载中
				setTimeout(function(){
				that.switchShow =true;
					that.moreFnc();
					//点击加载更多
					console.log(1);
					
				},2000)
			
//					this.moreFnc();
				}


				}
			
			
			}

	
</script>
<style>
	
	
	
</style>