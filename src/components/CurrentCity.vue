<template>
	<div class="jk-city">
		<!--搜索框-->
		<div class="jk-search">
			<input type="text" placeholder="请输入城市名称或首字母" />
		</div>
		<!--当前定位-->
		<div class="jk-position">
			<div class="jk-position-title">
				<span>当前定位</span>
			</div>
			<div class="jk-position-city">
				<span>北京</span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	@import url("../css/common.css");
	
	/*搜索*/
	.jk-search input {
		border: none;
		padding-left: 0;
	}
	.jk-search input::-webkit-input-placeholder {
		color: rgb(119, 119, 119);
	}
	
	/*当前定位*/
	.jk-position{
		margin: 0.64rem auto;
	}
	.jk-position-title{
		font-size: 0.26rem;
		color: rgb(30,30,30);
	}
	.jk-position-city{
		padding: 0.15rem auto;
		background-color: rgba(94,144,243,0.5);
		width: 1.48rem;
		height: 0.58rem;
		border-radius: 0.05rem;
		text-align: center;
	}
	.jk-position-city span{
	}
</style>