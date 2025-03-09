<script setup>

</script>

<template>
	<div class="wrapper">
		<div class="center">
			<div class="title">KIRANO</div>
			<div class="template">#nuxt</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.wrapper {
	background: #181818;
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Inter, sans-serif;
}

.title {
	color: white;
	font-size: 128px;
	margin-bottom: 5px;
}

.template {
	font-size: 20px;
	color: #42B883;
	text-align: end;
}

@media screen and (max-width: 700px) {
	.title {
		font-size: 64px;
	}
}
</style>