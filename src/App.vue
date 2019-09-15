<template>
	<div id="app">

		<!-- 全局导航条 -->
		<Navbar/>

		<!-- 一级路由 -->
		<div class="container">
			<router-view/>
		</div>


		<!--<div class="container" style="margin-bottom: 200px;">-->
			<!--<div class="row">-->
				<!--<div class="col-12 col-sm-6 col-lg-3">-->
					<!--<router-view name="contact"></router-view>-->
				<!--</div>-->
				<!--<div class="col-12 col-sm-6 col-lg-3">-->
					<!--<router-view name="delivery"></router-view>-->
				<!--</div>-->
				<!--<div class="col-12 col-sm-6 col-lg-3">-->
					<!--<router-view name="history"></router-view>-->
				<!--</div>-->
				<!--<div class="col-12 col-sm-6 col-lg-3">-->
					<!--<router-view name="guide"></router-view>-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->
	</div>
</template>

<script lang="ts">

	import { Component, Vue } from 'vue-property-decorator';
	import Navbar from './views/Layout/Navbar.vue';

	@Component({
		components: {
		    Navbar,
		}
	})
	export default class App extends Vue{

	}

</script>

<style lang="scss" scoped>
	#app {
		width: 100%;
		height: 100%;
	}
</style>
