<!-- 记住：各自组件里的template中的id，不是用于挂载的。。 -->
<!-- 当前组件里，默认输出中data选项，return的数据只有在当前的template有用 -->
<template>
	<div id="demo">
		<h3>测试自己写组件</h3>
		<p>{{ demoMsg }}</p>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				demoMsg : '哈哈哈哈哈哈不知道写啥'
			}
		}
	}
</script>
<style>
	#demo p{
		color:red;
	}
</style>