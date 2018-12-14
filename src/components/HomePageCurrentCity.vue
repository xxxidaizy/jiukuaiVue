<template>
	<div class="jk-city">
		<!--搜索框-->
		<div class="jk-search">
			<input type="text" placeholder="请输入城市名称或首字母" />
		</div>
		<div class="jk-cityList-ABC">
			<div class="jk-cityList-ABC-1">
				<span>#</span>
			</div>
			<p>A</p>
			<p>B</p>
			<p>C</p>
			<p>D</p>
			<p>E</p>
			<p>F</p>
			<p>G</p>
			<p>H</p>
			<p>I</p>
			<p>J</p>
			<p>K</p>
			<p>L</p>
			<p>M</p>
			<p>N</p>
			<p>O</p>
			<p>P</p>
			<p>Q</p>
			<p>R</p>
			<p>S</p>
			<p>T</p>
			<p>U</p>
			<p>V</p>
			<p>W</p>
			<p>X</p>
			<p>Y</p>
			<p>Z</p>
		</div>
		<!--当前定位-->
		<div class="jk-position">
			<div class="jk-position-title jk-city-title">
				<span>当前定位</span>
			</div>
			<div class="jk-position-city">
				<span>北京</span>
			</div>
		</div>
		<!--热门城市-->
		<div class="jk-hotCity">
			<div class="jk-hotCity-title jk-city-title">
				<span>热门城市</span>
			</div>
			<div class="jk-hotCity-list">
				<div class="jk-hotCity-city">
					<span>北京</span>
				</div>
				<div class="jk-hotCity-city">
					<span>上海</span>
				</div>
				<div class="jk-hotCity-city">
					<span>广州</span>
				</div>
				<div class="jk-hotCity-city">
					<span>深圳</span>
				</div>
				<div class="jk-hotCity-city">
					<span>成都</span>
				</div>
				<div class="jk-hotCity-city">
					<span>长沙</span>
				</div>
				<div class="jk-hotCity-city">
					<span>重庆</span>
				</div>
				<div class="jk-hotCity-city">
					<span>武汉</span>
				</div>
				<div class="jk-hotCity-city">
					<span>杭州</span>
				</div>
				<div class="jk-hotCity-city">
					<span>西安</span>
				</div>
			</div>
		</div>
		<!--城市列表-->
		<div class="jk-cityList">
			<div class="jk-cityList-title">
				<span>A</span>
			</div>
			<div class="jk-cityList-city">
				<p>阿坝</p>
				<p>阿克苏</p>
				<p>阿勒泰</p>
			</div>
			<div class="jk-cityList-title">
				<span>B</span>
			</div>
			<div class="jk-cityList-city">
				<p>巴西</p>
				<p>巴西</p>
				<p>巴西</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	@import url("../css/common.css");
	.jk-city{
		margin: auto;
		width: 6.8rem;
	}
	/*搜索*/
	.jk-search{
		width: 6rem;
	}
	.jk-search input {
		border: none;
		padding-left: 0;
		margin: 0;
	}
	.jk-search input::-webkit-input-placeholder {
		color: rgb(119, 119, 119);
	}
	
	/*右侧字母导航*/
	.jk-cityList-ABC{
		margin: auto;
		float: right;
		text-align: center;
		background-color: #fff;
	}
	.jk-cityList-ABC-1{
		width: 0.4rem;
		height: 0.4rem;
		background-color: rgb(242,242,242);
		border-radius: 50%;
		margin-top: 0.25rem;
	}
	.jk-cityList-ABC-1 span,.jk-cityList-ABC p{
		font-size: 0.18rem;
		color: rgb(153,153,153);
	}
	.jk-cityList-ABC p{
		font-family: "ArialMT";
		margin-top: 0.25rem;
	}
	
	/*当前定位*/
	.jk-position {
		margin: 0.64rem auto;
	}
	.jk-city-title {
		margin-bottom: 0.13rem;
	}
	.jk-city-title span {
		font-size: 0.26rem;
		color: rgb(30, 30, 30);
	}
	.jk-position-city,.jk-hotCity-city {
		width: 1.48rem;
		height: 0.58rem;
		border-radius: 0.05rem;
		text-align: center;
	}
	.jk-position-city{
		background-color: rgba(94, 144, 243, 0.5);
	}
	.jk-position-city span {
		font-size: 0.28rem;
		color: rgb(44, 106, 219);
	}
	
	/*热门城市*/
	.jk-hotCity{
		margin: auto;
	}
	.jk-hotCity-city {
		margin: auto;
		background-color: rgba(248, 248, 248, 0.5);
		display: inline-block;
		margin-bottom: 0.13rem;
	}
	.jk-hotCity-city span{
		font-size: 0.28rem;
		color: rgb(30,30,30);
	}
	
	/*城市列表*/
	.jk-cityList{
		margin: auto;
		margin-top: 0.66rem;
	}
	.jk-cityList-title{
		margin-top: 0.16rem;
		margin-bottom: 0.6rem;
	}
	.jk-cityList-title span{
		font-size: 0.26rem;
		color: rgb(136,136,136);
	}
	.jk-cityList-city p{
		padding-top: 0.44rem;
		padding-bottom: 0.44rem;
		font-size: 0.28rem;
		color: rgb(30,30,30);
		border-bottom: 1px solid rgb(244,244,244);
	}
</style>