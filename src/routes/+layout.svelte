<script>
	// selected Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// global stylesheet
	import '../app.postcss';

	// ====================================================

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import InteractiveAvatar from '$lib/InteractiveAvatar.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	import Footer from '$lib/Footer.svelte';

	// ====================================================
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar background="bg">
			<svelte:fragment slot="lead">
				<InteractiveAvatar />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch
					bgLight="bg-surface-200"
					height="h-8"
					width="w-16"
					ring="ring-[2px] ring-surface-300/20"
				/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<main class="page-content">
		<slot />
	</main>

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>

<!-- <div class="app-shell">
	<header class="app-bar">
		<div class="app-bar-lead">
			<InteractiveAvatar />
		</div>
		<div class="app-bar-trail">
			<LightSwitch
				bgLight="bg-surface-200"
				height="h-8"
				width="w-16"
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
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.app-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100px;
		padding: 0 20px;
	}

	.app-bar-lead {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
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
		margin-top: 30px;
		margin-bottom: 10px;
		width: 100%;
		height: 100%;
	}

	.page-footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100px;
	}
</style> -->

<style>
	.page-content {
		margin-top: 80px;
		margin-bottom: 10px;
		width: 100%;
		height: 100%;
	}
</style>
