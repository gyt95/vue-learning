<template>
	<div id="routerDemo">
		<h3>不知道写啥反正会显示</h3>
		<p>{{ msg }}</p>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				msg:'这是展示router的组件'
			}
		}
	}
</script>
<style>
	#routerDemo p{
		color:blue;
	}
</style>