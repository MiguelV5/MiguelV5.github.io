<script>
	import BioCard from '$lib/BioCard.svelte';
	import BioText from '$lib/BioText.svelte';
	import { onMount, afterUpdate } from 'svelte';

	let titleFontSize = 'text-6xl';

	const MIN_WINDOW_WIDTH_FOR_TITLE_CHANGE = 768;

	const handleResize = () => {
		if (window.innerWidth <= MIN_WINDOW_WIDTH_FOR_TITLE_CHANGE) {
			titleFontSize = 'text-4xl';
		} else {
			titleFontSize = 'text-6xl';
		}
	};

	onMount(() => {
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	afterUpdate(handleResize);
</script>

<div class="container h-full mx-auto">
	<BioText {titleFontSize} />

	<BioCard />
</div>

<style>
	.container {
		max-width: 1150px;
		align-items: center;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	@media screen and (max-width: 1180px) {
		.container {
			flex-direction: column;
		}
	}
</style>
