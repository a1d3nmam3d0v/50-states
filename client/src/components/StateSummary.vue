<template>
<div>
	<p>Out of {{ states.length }},</p>
	<p>You have visited <b>{{ totalVisited }}</b> {{ units }}</p>
	<p id="all-visited-message" v-if="areAllVisited">You have visited all the states!</p>
	</div>
</template>

<script>
export default {
	name: 'StateSummary',
	props: {
		states: Array,
	},
	computed: {
		totalVisited() {
			let visitedCount = 0
			this.states.forEach((state) => {
				if (state.visited) {
					visitedCount++
				}
			})
			return visitedCount
		},
		units(){
			if (this.totalVisited==1){
				return 'state'
			} else {
				return 'states'
			}
		},
		areAllVisited(){
			return this.totalVisited===this.states.length
		}
	},
}
</script>

<style scoped>
#all-visited-message {
	color: rgb(255, 49, 255);
	font-weight:600;
	text-decoration: underline;
}

</style>
