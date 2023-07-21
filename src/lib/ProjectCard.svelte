<script>
	const BASE_PREVIEW_IMG_URL = '../../posts/';

	const BASE_GH_URL = 'https://github.com/MiguelV5/';
	const BASE_PAGES_URL = 'https://miguelv5.github.io/';

	const previewImgsList = [
		BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
		BASE_PREVIEW_IMG_URL + 'ferris_torrent.png'
	];
</script>

<div class="bio-card-container space-y-6">
	<div class="w-full text-token grid grid-cols-1 md:grid-cols-1 gap-4">
		<a
			class="card variant-ghost-success card-hover overflow-hidden"
			href={BASE_PAGES_URL + 'polyrythmic_circles'}
			target="_blank"
			rel="noopener noreferrer"
		>
			<header>
				<img src={previewImgsList[0]} class="bg-black/50" alt="Post" />
			</header>
			<div class="p-4 space-y-4">
				<h3 class="h3" data-toc-ignore>Title</h3>
				<article>
					<p>
						<!-- cspell:disable -->
						Text
						<!-- cspell:enable -->
					</p>
				</article>
			</div>
			<footer class="p-4 mt-28 space-x-4">
				<hr class="opacity-100" />
				<br />
				<div class="flex-auto flex justify-end items-center">
					<a
						href={BASE_GH_URL + 'polyrythmic_circles'}
						target="_blank"
						rel="noopener noreferrer"
						class="btn variant-ghost-success"
						>View repository &nbsp; <i class="fa-brands fa-github" /></a
					>
				</div>
			</footer>
		</a>
	</div>
</div>

<style>
	.bio-card-container {
		width: 100%;
		max-width: 400px;
		min-height: 600px;
		max-height: 600px;
		/* margin-left: 40px; */
	}
	.card {
		min-height: 500px;
	}
</style>
