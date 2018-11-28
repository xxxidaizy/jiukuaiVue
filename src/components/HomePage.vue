<template>
	<div class="jk-homepage">
		<div class="jk-search">
			<span>北京</span>
			<input type="text" placeholder="您想住哪儿？" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomePage',
		data() {
			return {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	body {
		font-family: "microsoft yahei";
	}
	.jk-search {
		padding: 31px;
		width: 680px;
		height: 28px;
		border-radius: 45px;
		background-color: rgb(248, 248, 248);
		vertical-align: middle;
	}
	.jk-search span {
		color: rgb(51, 51, 51);
		text-align: center;
		font-size: 28px;
	}
	.jk-search input{
		margin-left:10px;
		background-color: rgb(248, 248, 248);
		border: none;
		border-left: 2px solid rgb(219, 219, 219);
		color: rgb(200,200,200);
		font-size: 28px;
		width: 70%;
		padding-left: 20px;
	}
	
</style>