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
	<svelte:fragment slot="header">
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

	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
