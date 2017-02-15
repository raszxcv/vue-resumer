<template>
<div id="topbar">
	<div class="wrapper">
		<span class="logo">Resumer</span>
		<div class="actions">
			<button class="primary">保存</button>
			<button>预览</button>
		</div>
	</div>
</div>
</template>

<script>
export default {

  name: 'TopBar',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
#topbar{
	background:#fff;
	box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
	>.wrapper{
		min-width:1024px;
		max-width:1440px;
		margin:0 auto;
		height:64px;
		display: flex;
		justify-content: space-between;
		align-items:center;
		padding:0 16px;
			>.logo{
				font-size: 24px;
				color:#000;
			}
	}
}
button{
	width:72px;
	height:32px;
	font-size:18px;
	color:#222;
	text-align:center;
	background:#ddd;
	cursor:point;
	border:none;
	&:hover{
		box-shadow:1px 1px 1px hsla(0,0,0,0.50);
	}
	&.primary{
		background:#02af5f;
		color:#fff;
	}
}
</style>