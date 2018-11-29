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
			<div class="jk-rent-item">
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
	</div>
	
</template>

<script>
	import rentImg1 from '../assets/icon-func1.png';
	import rentImg2 from '../assets/icon-func2.png';
	import rentImg3 from '../assets/icon-func3.png';
	
	export default {
		name: 'HomePage',
		data() {
			return {
				rentImg1:rentImg1,
				rentImg2:rentImg2,
				rentImg3:rentImg3,
				
			}
		},
		beforeCreate(){
			
		},
		created(){
			
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	body {
		font-family: "microsoft yahei";
	}
	/*搜索*/
	.jk-search {
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
	.jk-search input{
		margin-left:0.2rem;
		background-color: rgb(248, 248, 248);
		border: none;
		border-left: 0.02rem solid rgb(219, 219, 219);
		color: rgb(200,200,200);
		font-size: 0.28rem;
		width: 70%;
		padding-left: 0.3rem;
	}
	/*租赁方式*/
	.jk-rent a{
		color: rgb(0,0,0);
	}
	
</style>