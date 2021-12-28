<template>
	<div>
		<div id="navigation-links">
			<span class="nav-link">
				<!-- <router-link to="/">Home</router-link> -->

				<router-link v-bind:to="{ name: 'StateList' }">Home</router-link>
			</span>

			<span class="nav-link">
				<!-- <router-link to="/about">About</router-link> -->

				<router-link v-bind:to="{ name: 'AboutSite' }">About</router-link>
			</span>
		</div>

		<p class="headerCredit">
			header by
			<a href="https://unsplash.com/@neonbrand">NeONBRAND</a>
		</p>

		<p class="iconCredit">
			<a target="_blank" href="https://icons8.com/icon/RpspyEyOEJOU/world-map"
				>World Map</a
			>
			icon by <a target="_blank" href="https://icons8.com">Icons8</a>
		</p>
	</div>
</template>

<script>
export default {
	name: 'PageFooter',
}
</script>

<style scoped>
.nav-link {
	margin: 1rem;
	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.navigation-links {
	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.headerCredit {
	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.iconCredit {
	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
