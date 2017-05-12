<!-- template写html，script写js，style写css -->
<!-- App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。 -->
<!-- 也可以理解为所有的路由也是App.vue的子组件。
     所以我将router标示为App.vue的子组件。 -->

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <firstComponent></firstComponent>
    <h2>Essential Links</h2>
    <secondComponent></secondComponent>


    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    
  <!-- 这个是重点啊。。。没写这个导致没有跳转按钮。。。 -->
    <ul>
        <h1>下面是路由导航</h1>
        <li><router-link to="/first">点我跳转到第一页</router-link></li>
        <li><router-link to="/second">点我跳转到第二页</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  <!-- end -->
  
  </div>
</template>

<script>
  import firstComponent from './component/firstCom.vue'//引入组件
  import secondComponent from './component/secondCom.vue' //在main.js已经引入，不知道这里为何还要引入。。

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    
    //components:{ firstComponent }//注册组件，然后在template使用组件

    components:{ firstComponent,secondComponent } //既然不用引入，就不需要注册组件
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
