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
				<span class="magic-text">Miguel Vasquez</span>.
			</h1>
			<h3 class="h3">
				I am currently a studing at my <a
					class="magic-text"
					href="https://fi.uba.ar"
					target="_blank"
					rel="noopener noreferrer">alma mater 🖤</a
				>, actively pursuing my passion for Computer Science. <!-- Self-portray for the near future (almost there :p) ----- I am a proud graduate from my <a
					class="magic-text"
					href="https://fi.uba.ar"
					target="_blank"
                    rel="noopener noreferrer">alma mater 🖤</a
				>, where I completed my studies in Computer Science. -->
				I possess a deep affection for this fascinating field in its entirety. I derive inmense satisfaction
				from continuous learning and find great joy in imparting my knowledge to others.
			</h3>
		</div>
	</div>
</div>

<style>
	:root {
		--magic-purple: #694fc5;
		--magic-violet: #8666df;
		--magic-blue: #6993ee;
		--magic-cyan: #3cc1d8;
		--magic-dark-grey: #303030;
	}
	@keyframes background-pan {
		from {
			background-position: 0 center;
		}
		to {
			background-position: -200% center;
		}
	}

	h1 > .magic-text {
		animation: background-pan 3s linear infinite;
		background: linear-gradient(
			120deg,
			var(--magic-violet),
			var(--magic-purple),
			var(--magic-blue),
			var(--magic-blue),
			var(--magic-purple),
			var(--magic-violet)
		);
		background-size: 200%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}

	h3 > .magic-text {
		animation: background-pan 3s linear infinite;
		background: linear-gradient(
			120deg,
			var(--magic-dark-grey),
			var(--magic-blue),
			var(--magic-cyan),
			var(--magic-dark-grey)
		);
		background-size: 200%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}
</style>
