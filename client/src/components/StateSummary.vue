<template>
<div>
	<p class="outOf">Out of {{ states.length }},</p>
	<p class="beenTo">You have visited {{ totalVisited }} {{ units }}</p>
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
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	color: rgb(255, 49, 255);
	font-weight:600;
	text-decoration: underline;
}

.outOf {
	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.beenTo {
	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
