<script>
	// selected Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// global stylesheet
	import '../app.postcss';

	// ====================================================

	import InteractiveAvatar from '$lib/InteractiveAvatar.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Footer from '$lib/Footer.svelte';

	// ====================================================
</script>

<div class="app-shell">
	<header class="app-bar variant-glass">
		<div class="app-bar-lead">
			<InteractiveAvatar />
		</div>
		<div class="app-bar-trail">
			<LightSwitch
				bgLight="bg-surface-200"
				height="h-7"
				width="w-14"
				ring="ring-[2px] ring-surface-300/20"
			/>
		</div>
	</header>

	<main class="page-content">
		<slot />
	</main>

	<footer class="page-footer">
		<Footer />
	</footer>
</div>

<style>
	.app-shell {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.app-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		width: 100%;
		height: 80px;
		padding: 0 10px;
		z-index: 100;
	}

	.app-bar-lead {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-left: 10px;
		width: 100%;
		height: 100%;
	}

	.app-bar-trail {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.page-content {
		margin-top: 50px;
		padding-top: 80px;
		padding-bottom: 10px;
		margin-bottom: 10px;
		width: 100%;
		height: 100%;
		padding-left: 10px;
		padding-right: 10px;
	}

	@media screen and (max-width: 1200px) {
		.page-content {
			margin-top: 20px;
			padding-top: 120px;
		}
		.app-bar-lead {
			margin-left: 2px;
		}
	}

	.page-footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100px;
	}
</style>
