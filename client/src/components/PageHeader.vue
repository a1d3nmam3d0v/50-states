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
	background-image: url('~@/assets/map-header11.jpeg');
	background-position: center;
	background-size: cover;
}

#title {
	/* font-family:impact;
	font-style:italic; */
	/* font-size: 40px; */
	/* font-weight: 10; */
	color: white;
	-webkit-text-stroke: 1px black;
}
</style>
