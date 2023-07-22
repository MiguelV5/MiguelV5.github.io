<script>
	import BioCard from '$lib/BioCard.svelte';
	import BioText from '$lib/BioText.svelte';
	import ProjectCards from '$lib/ProjectCards.svelte';
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

<div class="page-content-container h-full mx-auto">
	<div class="flexible-pseudo-row-container">
		<BioText {titleFontSize} />
		<BioCard />
	</div>

	<ProjectCards />
</div>

<style>
	.page-content-container {
		max-width: 1200px;
		max-height: max-content;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.flexible-pseudo-row-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 60px;
	}

	@media screen and (max-width: 1200px) {
		.flexible-pseudo-row-container {
			flex-direction: column;
			margin-bottom: 0px;
		}
	}
</style>
