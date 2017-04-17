import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
Vue.use(VueResource);
Vue.use(VueRouter);
import "./styles/app.scss";

import Xinge from './components/xinge/xinge-box.vue';
import Geshou from './components/geshou/geshou-box.vue';
import Jingxuan from './components/jingxuan/jingxuan-box.vue';
import Sousuo from './components/sousuo/sousuo-box.vue';
import Paihang from './components/paihang/paihang-box.vue';
import PaihangDetail from './components/paihang/paihangDetail.vue';
import Paihangmain from './components/paihang/paihangmain.vue';
	
const router=new VueRouter({
	routes:[
	{
		path:'/xinge',
		name:'xinge',
		component:Xinge
	
		
		
	},
	{
		path:'/geshou',
		name:'geshou',
		component:Geshou
		
		
		
	},
{
		path:'/jingxuan',
		name:'jingxuan',
		component:Jingxuan
		
		
		
	},
		{
		path:'/sousuo',
		name:'sousuo',
		component:Sousuo
		
		
		
	},
	{
		path:'/paihang',
		name:'paihang',
		component:Paihang,
		'children':[
			{
				path: '/',
				name:'paihang.asd',
				component:Paihangmain,
			},
			{
				path:'painame',
				name:'paihang.paihangDetail',
				component:PaihangDetail
				
				
			}
		
		]
		
		
		
	},
	
	
	{
		path:'*',
		redirect:'/xinge'
		
		
		
	}
	]
	
	
})
//var store=new Vuex.Store({
//	 state:{
//	 	
//	 	
//	 	
//	 },
//	   mutations:{
//	   	 
//	   	
//	   	
//	   }
//	
//})
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
