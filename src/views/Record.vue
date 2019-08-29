<template>
	<div class="">
		<van-nav-bar 
			title="成长记录" 
			left-arrow @click-left="onClickLeft" 
			style="background: #DFDFDF 100%;" 
		/>

		<van-tabs v-model="active" animated>
			<van-tab title="记录列表">
				<div class="main">
					<div class="main-t">
						<div class="main-t-t">
							<p>2018.11.11</p>
							<p>30天</p>
							<p>+</p>
						</div>
						<div class="main-t-x">体重偏胖,头围偏大,注意控制饮食</div>
					</div>
					<div class="main-x">
						<div class="main-x-t">
							<p>身高50cm</p>
							<p>头围30cm</p>
						</div>
						<div class="main-x-x">体重5kg</div>
					</div>
				</div>
			</van-tab>
			<van-tab title="身高图表">
				<div class="section">
					<h4>2019.7.7</h4>
					<ul class="timeline">
						<li>
							<span class="label">1</span>
							<span class="count" style="height: 20%">(10)</span>
						</li>
						<li>
							<span class="label">2</span>
							<span class="count" style="height: 21%">(11)</span>
						</li>
						<li>
							<span class="label">3</span>
							<span class="count" style="height: 22%">(12)</span>
						</li>
						<li>
							<span class="label">4</span>
							<span class="count" style="height: 23%">(13)</span>
						</li>
						<li>
							<span class="label">5</span>
							<span class="count" style="height: 24%">(15)</span>
						</li>
						<li>
							<span class="label">6</span>
							<span class="count" style="height: 24%">(17)</span>
						</li>
						<li>
							<span class="label">7</span>
							<span class="count" style="height: 24%">(19)</span>
						</li>
						<li>
							<span class="label">8</span>
							<span class="count" style="height: 25%">(20)</span>
						</li>
						<li>
							<span class="label">9</span>
							<span class="count" style="height: 26%">(21)</span>
						</li>
						<li>
							<span class="label">10</span>
							<span class="count" style="height: 26%">(22)</span>
						</li>
						<li>
							<span class="label">11</span>
							<span class="count" style="height: 30%">(30)</span>
						</li>
						<li>
							<span class="label">12</span>
							<span class="count" style="height: 35%">(40)</span>
						</li>
						<li>
							<span class="label">13</span>
							<span class="count" style="height: 35%">(40)</span>
						</li>
						<li>
							<span class="label">14</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">15</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">16</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">17</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">18</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">19</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">20</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
					</ul>
				</div>
			</van-tab>
			
			<van-tab title="体重图表">
				<div class="section">
					<h4>2019.7.7</h4>
					<ul class="timeline">
						<li>
							<span class="label">1</span>
							<span class="count" style="height: 20%">(10)</span>
						</li>
						<li>
							<span class="label">2</span>
							<span class="count" style="height: 21%">(11)</span>
						</li>
						<li>
							<span class="label">3</span>
							<span class="count" style="height: 22%">(12)</span>
						</li>
						<li>
							<span class="label">4</span>
							<span class="count" style="height: 23%">(13)</span>
						</li>
						<li>
							<span class="label">5</span>
							<span class="count" style="height: 24%">(15)</span>
						</li>
						<li>
							<span class="label">6</span>
							<span class="count" style="height: 24%">(17)</span>
						</li>
						<li>
							<span class="label">7</span>
							<span class="count" style="height: 24%">(19)</span>
						</li>
						<li>
							<span class="label">8</span>
							<span class="count" style="height: 25%">(20)</span>
						</li>
						<li>
							<span class="label">9</span>
							<span class="count" style="height: 26%">(21)</span>
						</li>
						<li>
							<span class="label">10</span>
							<span class="count" style="height: 26%">(22)</span>
						</li>
						<li>
							<span class="label">11</span>
							<span class="count" style="height: 30%">(30)</span>
						</li>
						<li>
							<span class="label">12</span>
							<span class="count" style="height: 35%">(40)</span>
						</li>
						<li>
							<span class="label">13</span>
							<span class="count" style="height: 35%">(40)</span>
						</li>
						<li>
							<span class="label">14</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">15</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">16</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">17</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">18</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">19</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">20</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
					</ul>
				</div>
			</van-tab>
			
			<van-tab title="头尾图表">	
				<div class="section">
					<h4>2019.7.7</h4>
					<ul class="timeline">
						<li>
							<span class="label">1</span>
							<span class="count" style="height: 20%">(10)</span>
						</li>
						<li>
							<span class="label">2</span>
							<span class="count" style="height: 21%">(11)</span>
						</li>
						<li>
							<span class="label">3</span>
							<span class="count" style="height: 22%">(12)</span>
						</li>
						<li>
							<span class="label">4</span>
							<span class="count" style="height: 23%">(13)</span>
						</li>
						<li>
							<span class="label">5</span>
							<span class="count" style="height: 24%">(15)</span>
						</li>
						<li>
							<span class="label">6</span>
							<span class="count" style="height: 24%">(17)</span>
						</li>
						<li>
							<span class="label">7</span>
							<span class="count" style="height: 24%">(19)</span>
						</li>
						<li>
							<span class="label">8</span>
							<span class="count" style="height: 25%">(20)</span>
						</li>
						<li>
							<span class="label">9</span>
							<span class="count" style="height: 26%">(21)</span>
						</li>
						<li>
							<span class="label">10</span>
							<span class="count" style="height: 26%">(22)</span>
						</li>
						<li>
							<span class="label">11</span>
							<span class="count" style="height: 30%">(30)</span>
						</li>
						<li>
							<span class="label">12</span>
							<span class="count" style="height: 35%">(40)</span>
						</li>
						<li>
							<span class="label">13</span>
							<span class="count" style="height: 35%">(40)</span>
						</li>
						<li>
							<span class="label">14</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">15</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">16</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">17</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">18</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">19</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
						<li>
							<span class="label">20</span>
							<span class="count" style="height: 40%">(50)</span>
						</li>
					</ul>
				</div>
			</van-tab>
			
		</van-tabs>

	<div>
	
	</div>

	</div>
</template>

<script>
	export default {
		name: 'Record',
		data() {
			return {
				active: 0
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style type="text/css" media="screen" scoped="">
	.main {
		height: 110px;
		background: #E3E3E3 100%;
		border-radius: 10px;
		margin: 5px;
		padding: 15px;
	}
	
	.main-t {
		height: 55px;
	}
	
	.main-t-t {
		height: 27px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
	}
	
	.main-t-x {
		height: 28px;
		line-height: 28px;
		float: left;
	}
	
	.main-x {
		height: 55px;
		font-size: 14px;
	}
	
	.main-x-t {
		height: 27px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.main-x-x {
		height: 28px;
		float: left;
	}
	
	/*图表*/
	.section {
		float: left;
		clear: left;
		padding: 15px 0;
	}
	/* TIMELINE CHARTS */
	
	.timeline {
		font-size: 0.75em;
		height: 10em;
		width: 370px;
	}
	
	.timeline li {
		position: relative;
		float: left;
		width: 15px;
		margin: 0 0.1em;
		height: 8em;
	}
	
	.timeline li span {
		cursor: pointer;
	}
	
	.timeline li .label {
		display: block;
		position: absolute;
		bottom: -2em;
		left: 0;
		background: #fff;
		width: 100%;
		height: 2em;
		line-height: 2em;
		text-align: center;
	}
	
	.timeline li .count {
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		height: 0;
		width: 100%;
		background: #AAA;
		text-indent: -9999px;
		overflow: hidden;
	}
	
</style>