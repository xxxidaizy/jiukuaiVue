<template>
	<div class="jk-homepage">
		<!--搜索框-->
		<div class="jk-search">
			<span>北京</span>
			<input type="text" placeholder="您想住哪儿？" />
		</div>
		<!--租赁方式-->
		<div class="jk-rent">
			<div class="jk-rent-item">
				<a href="javascript:;">
					<img :src="rentImg1" alt="整租" />
					<p>整租</p>
				</a>
			</div>
			<div class="jk-rent-item" style="margin: auto 1.52rem;">
				<a href="javascript:;">
					<img :src="rentImg2" alt="合租" />
					<p>合租</p>
				</a>
			</div>
			<div class="jk-rent-item">
				<a href="javascript:;">
					<img :src="rentImg3" alt="短租" />
					<p>短租</p>
				</a>
			</div>
		</div>
		<!--筛选条件-->
		<div class="jk-filter">
			<!--区域-->
			<div class="jk-filter-item jk-filter-area">
				<span>区域 <img :src="icon_dropdown" /></span>
			</div>
			<!--租金-->
			<div class="jk-filter-item jk-filter-rent">
				<span>租金 <img :src="icon_dropdown" /></span>
			</div>
			<!--户型-->
			<div class="jk-filter-item jk-filter-houseType">
				<span>户型 <img :src="icon_dropdown" /></span>
			</div>
			<!--筛选-->
			<div class="jk-filter-item jk-filter-select">
				<span>筛选 <img :src="icon_dropdown" /></span>
			</div>
			<!--排序-->
			<div class="jk-filter-item jk-filter-sort" style="margin: auto;">
				<span><img :src="icon_sort" /></span>
			</div>
		</div>
		<!--banner-->
		<div class="jk-banner">
			<img :src="bannerImg" />
		</div>
		<!--房源列表-->
		<div class="jk-houseList">
			<div></div>
		</div>
		<div class="jk-footer">
			<!--首页-->
			<div class="jk-footer-item jk-footer-home active">
				<img :src="footer_home" />
				<p>首页</p>
			</div>
			<!--发布-->
			<div class="jk-footer-item jk-footer-publish">
				<img :src="footer_publish" />
				<p>发布</p>
			</div>
			<!--我-->
			<div class="jk-footer-item jk-footer-self">
				<img :src="footer_self" />
				<p>我</p>
			</div>
		</div>

	</div>

</template>

<script>
	import rentImg1 from '../assets/icon-func1.png';
	import rentImg2 from '../assets/icon-func2.png';
	import rentImg3 from '../assets/icon-func3.png';
	import icon_dropdown from '../assets/icon-dropdown.png';
	import icon_sort from '../assets/icon-sort.png';
	import bannerImg from '../assets/banner.jpg';
	import footer_home from '../assets/footer_home.png';
	import footer_publish from '../assets/footer_publish.png';
	import footer_self from '../assets/footer_self.png';

	export default {
		name: 'HomePage',
		data() {
			return {
				rentImg1: rentImg1,
				rentImg2: rentImg2,
				rentImg3: rentImg3,
				icon_dropdown: icon_dropdown,
				icon_sort: icon_sort,
				bannerImg: bannerImg,
				footer_home: footer_home,
				footer_publish: footer_publish,
				footer_self: footer_self,

			}
		},
		beforeCreate() {

		},
		created() {

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	body {
		font-family: "microsoft yahei";
		height: 100%;
	}
	/*搜索*/
	.jk-search {
		margin: auto;
		margin-top: 0.2rem;
		padding: 0.4rem;
		padding-top: 0.2rem;
		width: 6.8rem;
		height: 0.28rem;
		border-radius: 0.45rem;
		background-color: rgb(248, 248, 248);
		vertical-align: middle;
	}
	.jk-search span {
		margin-left: 0.1rem;
		color: rgb(51, 51, 51);
		text-align: center;
		font-size: 0.28rem;
	}
	.jk-search input {
		margin-left: 0.2rem;
		background-color: rgb(248, 248, 248);
		border: none;
		border-left: 0.02rem solid rgb(219, 219, 219);
		font-size: 0.28rem;
		width: 70%;
		padding-left: 0.3rem;
	}
	.jk-search input::-webkit-input-placeholder {
		color: rgb(200, 200, 200);
	}
	
	/*租赁方式*/
	.jk-rent {
		margin: auto;
		margin-top: 0.38rem;
		text-align: center;
	}
	.jk-rent .jk-rent-item,
	.jk-filter .jk-filter-item,
	.jk-footer .jk-footer-item {
		display: inline-block;
	}
	.jk-rent a {
		color: rgb(0, 0, 0);
	}
	.jk-rent a img {
		width: 0.98rem;
		height: 0.97rem;
	}
	.jk-rent p {
		font-size: 0.24rem;
		color: rgb(0, 0, 0);
	}
	
	/*筛选条件*/
	.jk-filter {
		margin: auto;
		margin-top: 0.4rem;
		width: 6.84rem;
		text-align: left;
		padding-top: 0.34rem;
		padding-bottom: 0.32rem;
		border-top: 0.02rem solid rgb(214, 214, 214);
		border-bottom: 0.02rem solid rgb(214, 214, 214);
	}
	.jk-filter .jk-filter-item {
		margin-right: 0.86rem;
	}
	.jk-filter .jk-filter-item span {
		color: rgb(51, 51, 51);
		font-size: 0.24rem;
	}
	.jk-filter .jk-filter-item span img {
		width: 0.14rem;
	}
	.jk-filter .jk-filter-sort span img {
		width: 0.22rem;
	}
	
	/*banner*/
	.jk-banner {
		width: 6.84rem;
		margin: auto;
		margin-top: 0.3rem;
		margin-bottom: 0.3rem;
	}
	.jk-banner img {
		width: 100%;
	}
	
	/*footer*/
	.jk-footer {
		height: 1.5rem;
		width: 100%;
		position: fixed;
		margin: auto;
		text-align: center;
		background-color: rgb(255,255,255);
		bottom: 0;
	}
	.jk-footer .jk-footer-item {
		margin: 0.18rem auto 0.16rem auto;
	}
	.jk-footer .jk-footer-home,
	.jk-footer .jk-footer-publish {
		margin-right: 1.88rem;
	}
	.jk-footer .jk-footer-home img {
		width: 0.45rem;
	}
	.jk-footer .jk-footer-publish img {
		width: 0.38rem;
	}
	.jk-footer .jk-footer-self img {
		width: 0.36rem;
	}
	.jk-footer .jk-footer-item p{
		font-size: 0.24rem;
		color: rgb(153,153,153);
	}
	.jk-footer .jk-footer-item.active p{
		color: rgb(44,106,220);
	}
</style>