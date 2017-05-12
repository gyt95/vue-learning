//main.js主要作用：初始化Vue实例，渲染组件到DOM
//R+num：实现路由的步骤


import Vue from 'vue';
import App from './App.vue';
//R1、引入并注册vue-router、vue-resource，分别用于页面跳转和Ajax请求
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.config.debug=true;//开启debug模式，这个干嘛用的？

Vue.use(VueRouter);
Vue.use(VueResource);


//R2、定义组件   (const有啥用？这个模板是给谁用的？)
const First = {
	template: '<div><h2>我是第1页</h2></div>'
}
  import secondComponent from './component/secondCom.vue'//引入组件

//R3、创建路由器实例、配置路由规则   (包含的属性都什么意思？)
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/first',   //跳转时的url
			component: First  //上面定义的组件First
		},
		{
			path: '/second',
			component: secondComponent
		}
	]
});

//R4、可以启动应用了！
//路由器创建一个App实例，并挂载到#app匹配的元素上  (.$mount('#app')是啥？)
const app = new Vue({
	el: '#app',
	router:router,
	render:h=>h(App)
}).$mount('#app');


//下面是原始版(不用路由时)，普通Vue实例创建而已
// new Vue({
//   el: '#app',
//   render: h => h(App)
//   render是个函数，用于渲染DOM，即给绑定的节点渲染一个vue组件App

// 	相当于
// 	{
// 	    render: function (h) {
// 	        return h(App)
// 	    }
// 	}

// 	//ES5语法是 components: { App }
// 	//ES6语法是 render: h => h(App)

  
// });
