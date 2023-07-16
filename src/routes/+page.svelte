<script>
	import { onMount, afterUpdate } from 'svelte';

	let titleFontSize = 'text-6xl';

	const MIN_WINDOW_WIDTH = 768;

	const handleResize = () => {
		if (window.innerWidth <= MIN_WINDOW_WIDTH) {
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

<div class="container h-full mx-auto flex items-center">
	<div class="bio-container flex justify-left">
		<div class="bio-subcontainer space-y-6">
			<h1 class="h1 font-bold {titleFontSize}">
				Hi, I'm
				<span
					class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
					>Miguel Vasquez</span
				>.
			</h1>
			<h3 class="h3">
				I <i class="fa-solid fa-heart" /> Computer Science in its entirety
			</h3>
		</div>
	</div>
</div>
