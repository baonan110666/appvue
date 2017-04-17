<template>
	<div>
		<div class="count">
			<ul>

				<li v-for="(item,index) in tasks" :key="index" @click="getsum(item)">
                
					<span>{{item.sing}}</span><i>{{item.preson}}</i>

				</li>
			</ul>
			<div class="jiazai">
				<p class="get-more" v-on:click="getMore()" v-show="switchShow"> 点击加载更多</p>
				<p class="loading" v-show="!switchShow">加载中...</p>
			</div>

		</div>
<v-footer :msg="msg"></v-footer>
	</div>
</template>

<script>
	import Footer from './footer.vue';
	export default {

		data() {
				return {
					tasks: [],
					nowPage: 0,
					switchShow: true,
					msg: {
						"id": "1",
						"sing": "凡人歌",
						"preson": "五月天",
						"image": "/src/images/58d0991517cd2_3586872_1490065685.jpg",
						"hash": "/dist/LMFAO - Get Crazy.mp3"

					}
				}
			},
			components: {
				'v-footer': Footer
			},
			mounted: function() {

				var that = this;
				this.$http.get('./src/mock/onelist.json')
					.then(function(data) {
						that.tasks = data.body.splice(0, 4);
						console.log(that.tasks.length);

						console.log(data.body);

					}, function(err) {

						console.log(err);

					})

			},
		methods: {
				getsum: function(item) {

					this.msg = item;
					console.log(this.msg);
					var myAuto = document.getElementById('myaudio');
					var icon = document.getElementsByClassName("ico")[0];
					myAuto.play();
					icon.innerHTML = "&#xe60a;";

				},

				moreFnc: function() {
					var that = this;
					this.$http.get('./src/mock/onelist.json')
						.then(function(data) {
							that.tasks = that.tasks.concat(data.body.splice(4,8));
	                     

							console.log(that.tasks);

							console.log(data.body);
						}, function(err) {

							console.log(err);

						})

				},

				getMore: function() {
					var that = this;
					this.switchShow = !this.switchShow; //点击加载中
					setTimeout(function() {
						that.switchShow = true;
						that.moreFnc();
						//点击加载更多
					

					}, 2000)

					//					this.moreFnc();
				}

			}
	}
</script>

<style lang="scss" scoped>
	@charset "utf-8";
	/*.count{
		
     height:100% !important;
     width:100%;


	ul{
	
		height:100% !important;
	display: flex;
	flex-direction: column;
		li{
			
			height:.4rem;
				display: flex;
	      flex-direction: column;
	      		border-bottom: .01rem solid #ccc;
			i{
				color: #ccc;
			}
			
	
					
			
		}
		
		
	}
	
	
}*/
</style>