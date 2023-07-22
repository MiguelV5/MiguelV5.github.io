<script>
	const BASE_PREVIEW_IMG_URL = 'posts/';

	const BASE_GH_URL = 'https://github.com/MiguelV5/';
	const BASE_PAGES_URL = 'https://miguelv5.github.io/';

	const projectsList = [
		{
			title: 'Polyrythmic Circles',
			description:
				'A relaxing static page with a polyrythmic effect, done simply with vanilla js, html and css.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
			repoUrl: BASE_GH_URL + 'polyrythmic_circles',
			hasWebPage: true,
			pageUrl: BASE_PAGES_URL + 'polyrythmic_circles'
		},
		{
			title: 'Ferris Torrent',
			description: 'A torrent client written in Rust for a college subject.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'ferris_torrent.png',
			repoUrl: BASE_GH_URL + 'ferris_torrent',
			hasWebpage: false
		},
		{
			title: 'Test',
			description:
				'A relaxing static page with a polyrythmic effect, done simply with vanilla js, html and css.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
			repoUrl: BASE_GH_URL + 'polyrythmic_circles',
			hasWebPage: true,
			pageUrl: BASE_PAGES_URL + 'polyrythmic_circles'
		},
		{
			title: 'Test',
			description:
				'A relaxing static page with a polyrythmic effect, done simply with vanilla js, html and css.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
			repoUrl: BASE_GH_URL + 'polyrythmic_circles',
			hasWebPage: true,
			pageUrl: BASE_PAGES_URL + 'polyrythmic_circles'
		}
	];

	let gridRows = `${projectsList.length}`;
</script>

<div class="external-project-cards-container space-y-6">
	<hr class="opacity-100" />
	<h2 class="h2 font-semibold flex justify-center items-center">Projects</h2>

	<div
		class="inner-project-cards-container w-full text-token grid grid-rows-{gridRows} grid-cols-1 gap-4"
	>
		{#each projectsList as project, i}
			<div
				class="project-card card variant-glass-primary card-hover overflow-hidden"
				style={`grid-column: 1; grid-row: ${i + 1};`}
			>
				<header>
					<img src={project.previewImgUrl} class="bg-black/50" alt="Post" />
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3" data-toc-ignore>{project.title}</h3>
					<article>
						<p>
							<!-- cspell:disable -->
							{project.description}
							<!-- cspell:enable -->
						</p>
					</article>
				</div>
				<footer class="p-4 space-x-4">
					<hr class="opacity-100" />
					<br />
					<div class="inner-card-buttons-container">
						{#if project.hasWebPage}
							<a
								href={project.pageUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inner-button btn variant-glass-primary"
								>View webpage &nbsp; <i class="fa-solid fa-external-link" /></a
							>
						{/if}
						<a
							href={project.repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="inner-button btn variant-glass-primary"
							>View repository &nbsp; <i class="fa-brands fa-github" /></a
						>
					</div>
				</footer>
			</div>
		{/each}
	</div>
</div>

<style>
	.inner-project-cards-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		width: 100%;
	}
	.project-card {
		width: 100%;
		height: 100%;
		max-width: 400px;
		min-height: 600px;
		max-height: 700px;
	}
	.inner-card-buttons-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.inner-button {
		margin-left: 2px;
		margin-right: 2px;
	}
	.card {
		min-height: 300px;
	}
</style>
