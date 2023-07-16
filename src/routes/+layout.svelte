<script>
	// selected Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// global stylesheet
	import '../app.postcss';

	// ====================================================

	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import AppBarActions from '$lib/AppBarActions.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg">
			<svelte:fragment slot="lead">
				<Avatar src="" width="w-14" rounded="rounded-full" />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<AppBarActions />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		<p>Footer</p>
	</svelte:fragment>
</AppShell>
