<template lang="html">

	<div class="navf">

			<ul id="u">
				<li>
					<router-link :to="{name:'xinge'}">新歌</router-link>
				</li>
				<li>
					<router-link :to="{name:'paihang'}">排行榜</router-link>
				</li>
				<li>
					<router-link :to="{name:'jingxuan'}">精选集</router-link>
				</li>
				<li>
					<router-link :to="{name:'geshou'}">歌手</router-link>
				</li>
				<li>
					<router-link :to="{name:'sousuo'}">搜索</router-link>
				</li>
			</ul>
	
		

			<router-view></router-view>
			<!--<ul>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>12345</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
			</ul>
			
		-->
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
	}
</script>
<style lang="scss">
	@charset "utf-8";
	/*.navf {
		
			height: .3rem;
			width: 100%;
	
		
		
			#u {
				height: .3rem;
				background-color: rgba(249, 249, 249, .6);
				box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				li {
					line-height: .3rem;
					text-align: center;
					.router-link-active {
						color: #ff5800;
						border-bottom: .01rem solid #ff5800;
					}
					a {
						color: #000;
					}
				}
			}
		
	}	*/

</style>