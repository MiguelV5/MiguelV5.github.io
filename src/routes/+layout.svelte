<script>
	// selected Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// global stylesheet
	import '../app.postcss';

	// ====================================================

	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import AppBarActions from '$lib/AppBarActions.svelte';

	import Footer from '$lib/Footer.svelte';

	let isAvatarHovered = false;
	let isAvatarClicked = false;

	function handleAvatarHover() {
		isAvatarHovered = !isAvatarHovered;
	}

	function handleAvatarClick() {
		isAvatarClicked = !isAvatarClicked;
	}
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar background="bg">
			<svelte:fragment slot="lead">
				<Avatar
					src="../../avatar.png"
					width="w-14"
					rounded="rounded-full"
					class="avatar-hover={isAvatarHovered} avatar-click={isAvatarClicked}"
					on:mouseover={handleAvatarHover}
					on:mouseout={handleAvatarHover}
					on:click={handleAvatarClick}
				/>
				{#if isAvatarClicked}
					<AppBarActions avatar_button_class="avatar-buttons" />
				{/if}
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

<style>
	.avatar-hover {
		transform: scale(1.1);
		transition: transform 0.2s ease-in-out;
	}
	.avatar-click {
		transform: scale(0.9) rotate(360deg);
		transition: transform 0.5s ease-in-out;
	}
	.avatar-buttons-enter {
		opacity: 0;
		transform: translateX(-100%);
	}

	.avatar-buttons-enter-active {
		opacity: 1;
		transform: translateX(0%);
		transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
	}

	.avatar-buttons-exit {
		opacity: 1;
		transform: translateX(0%);
	}

	.avatar-buttons-exit-active {
		opacity: 0;
		transform: translateX(-100%);
		transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
	}
</style>
