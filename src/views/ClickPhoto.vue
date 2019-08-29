<template>
	<div class="txt">
		<div class="main">
			<div class="xiantiao"></div>
			<p>萌小宝</p>
			<p>2017.12.28</p>
			<p>宝宝第一次见到雪的样子,真是个没见过世面的宝宝!!!</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ClickPhoto'
	}
</script>

<style>
	.txt{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.main{
		height: 450px;
		width: 300px;
		background: #F2F2F2 100%;
		margin-top: 80px;
		border-radius: 10px;
	}
	.xiantiao{
		width: 280px;
		height: 1px;
		background: black;
		margin-top: 300px;
		margin-left: 10px;
	}
	.main p{
		font-size: 16px;
	}
	
</style>