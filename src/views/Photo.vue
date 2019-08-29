<template>
		<div>
			<van-nav-bar 
				title="时光机" 
				left-arrow 
				@click-left="onClickLeft" 
				style="background: #DFDFDF 100%;" 
				fixed
			/>
			
			<div class="main">
				<div class="yi" @click="tap100()"><img src="./img/3.jpg" style="width: 170px;height: 190px;"></div>
				<div class="er" @click="tap100()"><img src="./img/4.jpg" style="width: 170px;height: 200px;"></div>
				<div class="san" @click="tap100()"><img src="./img/2.jpg" style="width: 170px;height: 200px;"></div>
				<div class="si" @click="tap100()"><img src="./img/6.jpg" style="width: 170px;height: 180px;"></div>
				<div class="wu" @click="tap100()"><img src="./img/5.jpg" style="width: 170px;height: 190px;"></div>
				<div class="liu" @click="tap100()"><img src="./img/1.jpg" style="width: 170px;height: 180px;"></div>
			</div>
			
		</div>
</template>

<script>
	export default {
		name: 'Photo',
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			tap100(){
				this.$router.push('/ClickPhoto')
			}
		}
	}
</script>

<style scoped="">
	.main{
		margin-top: 46px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.main div{
		margin: 5px;
	}
	.yi{
		width: 170px;
		height: 190px;
		background: #CCCCCC 100%;
	}
	.er{
		width: 170px;
		height: 200px;
		background:  #CCCCCC 100%;
	}
	.san{
		width: 170px;
		height: 200px;
		background: #CCCCCC 100%;
	}
	.si{
		width: 170px;
		height: 180px;
		background: #CCCCCC 100%;
	}
	.wu{
		width: 170px;
		height: 190px;
		background: #CCCCCC 100%;
	}
	.liu{
		width: 170px;
		height: 180px;
		background: #CCCCCC 100%;
	}
	
</style>