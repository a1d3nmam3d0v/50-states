<template>
	<div id="block-header">
		<h1 id="title">Which states have you visited?</h1>
	</div>
</template>

<script>
export default {
	name: 'PageHeader',
}
</script>

<style scoped>
#block-header {
	padding: 3rem 1rem;
	margin-bottom: 2rem;
	border-radius: 0.3rem;
	background-color: gray;
	background-image: url('~@/assets/map-header9.jpeg');
	background-position: center;
	background-size: cover;
}

#title {
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-style:italic;
	font-weight: 1000;
	color: rgb(255, 158, 255);
	-webkit-text-stroke: 1px black;
}
</style>
