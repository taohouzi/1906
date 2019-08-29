<template>
	<div>
		<van-nav-bar 
			title="成就" 
			left-arrow 
			@click-left="onClickLeft" 
			style="background: #DFDFDF 100%;" 
			fixed
		/>
		
		<div class="main">
			<div class="kuang">
				<p>第一次叫妈妈</p>
				<p>宝宝1岁2个月是18天了，第一次明确的在喊妈妈了，心都给我萌化了。</p>
				<button class="btn">查看更多</button>
				<div class="han"></div>
			</div>
			<div class="zuo"></div>
			<div class="you"></div>
		</div>
	
	</div>
</template>

<script>
	export default{
		name:'All',
		methods:{
			onClickLeft() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.main{
		margin-top: 46px;
		height: 600px;
	}
	.kuang{
		margin: 100px 0 0 60px;
		width: 270px;
		height: 450px;
		background: #ECECEC 100%;
		border-radius: 10px;
		position: relative;
	}
	.kuang p:nth-child(1){
		font-size: 16px;
		position: absolute;
		top: 280px;
		left: 85px;
		color: rgba(102,102,102,1);
		font-weight: 900;
	}
	.kuang p:nth-child(2){
		width: 230px;
		font-size: 12px;
		position: absolute;
		top: 320px;
		left: 20px;
		color: rgba(153,153,153,1);
	}
	.btn{
		width: 150px;
		height: 30px;
		border: 0;
		border-radius: 20px;
		position: absolute;
		top: 380px;
		left: 58px;
		color: #666666 100%;
	}
	.han{
		width: 330px;
		height: 1px;
		background: #BBBBBB 100%;
		position: absolute;
		left: -30px;
		top: 270px;
	}
	.zuo{
		width: 40px;
		height: 420px;
		background: #ECECEC 100%;
		position: absolute;
		top: 120px;
		left: -10px;
		border-radius: 10px;
	}
	.you{
		width: 40px;
		height: 420px;
		background: #ECECEC 100%;
		position: absolute;
		top: 120px;
		right: -22px;
		border-radius: 10px;
	}
</style>