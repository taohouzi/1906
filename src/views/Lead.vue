<template>
	<div>
		<van-nav-bar 
			title="时光机" 
			left-arrow 
			@click-left="onClickLeft" 
			style="background: #DFDFDF 100%;" 
			fixed
		/>
		
		<div class="tu"></div>
		
		<div class="zi-t">上传宝宝从小到大的样子</div>
		<div class="zi-x">每一寸时光都是成长的样子</div>
		
		<button class="btn" @click="tap1()">开始导入</button>
		
	</div>
</template>

<script>
	export default{
		name:'Lead',
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			tap1(){
				this.$router.push('/Photo')
			}
		}
	}
</script>

<style scoped="">
	.tu{
		margin:120px 0 0 55px;
		width: 270px;
		height: 270px;
		background:  #CCCCCC 100%;
		border-radius: 15px;
	}
	.zi-t{
		margin:20px 0 5px 0;
	}
	.btn{
		margin-top: 20px;
		width: 150px;
		height: 30px;
		border: none;
		border-radius: 10px;
	}
</style>