<script>
	import { onMount, afterUpdate } from 'svelte';

	let titleFontSize = 'text-6xl';

	const MIN_WINDOW_WIDTH_FOR_TITLE_CHANGE = 768;

	const BASE_PREVIEW_IMG_URL = '../../posts/';
	const previewImgsList = [
		BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
		BASE_PREVIEW_IMG_URL + 'ferris_torrent.png'
	];

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
	<div class="bio-container">
		<div class="bio-text-container space-y-6">
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

	<div class="bio-card-container space-y-6">
		<div class="w-full text-token grid grid-cols-1 md:grid-cols-1 gap-4">
			<a class="card variant-ghost-success card-hover overflow-hidden" href="#/">
				<header>
					<img src={previewImgsList[0]} class="bg-black/50" alt="Post" />
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>
					<article>
						<p>
							<!-- cspell:disable -->
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet
							eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias
							cum expedita architecto itaque quae rem.
							<!-- cspell:enable -->
						</p>
					</article>
				</div>
				<hr class="opacity-50" />
			</a>
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

	.container {
		max-width: 1150px;
		align-items: center;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		transition: transform 2s ease-in-out;
	}

	.bio-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 60%;
		transition: transform 2s ease-in-out;
	}

	.bio-text-container {
		width: 100%;
		max-width: 800px;
		margin-bottom: 30px;
		transition: transform 2s ease-in-out;
	}
	.bio-card-container {
		width: 100%;
		max-width: 400px;
		margin-left: 40px;
		transition: transform 2s ease-in-out;
	}

	@media screen and (max-width: 1180px) {
		.container {
			flex-direction: column;
		}

		.bio-container {
			width: 100%;
			align-items: center;
		}

		.bio-card-container {
			width: 100%;
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
