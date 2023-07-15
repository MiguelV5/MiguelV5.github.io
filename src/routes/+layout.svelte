<script>
	// selected Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// global stylesheet
	import '../app.postcss';

	// ====================================================

	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<h1 class="h1">Header</h1>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		<p>Footer</p>
	</svelte:fragment>
</AppShell>
