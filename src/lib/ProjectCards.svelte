<script>
	export let triggerProjectButtonReductions = false;

	const BASE_PREVIEW_IMG_URL = 'posts/';

	const BASE_GH_URL = 'https://github.com/MiguelV5/';
	const BASE_PAGES_URL = 'https://miguelv5.github.io/';

	const projectsList = [
		{
			title: 'Polyrythmic Circles',
			description:
				'A relaxing static page featuring the polyrythmic effect, done simply with vanilla JS, HTML and CSS.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
			repoUrl: BASE_GH_URL + 'polyrythmic_circles',
			hasWebPage: true,
			pageUrl: BASE_PAGES_URL + 'polyrythmic_circles'
		},
		{
			title: 'Ferris Torrent',
			description:
				'A BitTorrent client supporting multiple concurrent peers, and a custom tracker server with a simple static web interface for basic stats of its peers. Both done in Rust while keeping external crate usage to a minimum (TLS, GTK, logging, json) for my Programming Workshop college subject.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'ferris_torrent.png',
			repoUrl: BASE_GH_URL + 'Ferris-Torrent_taller1-fiuba',
			hasWebpage: false
		},
		{
			title: 'FileTransfer + RDT',
			description:
				'A CLI File Transfer app using a custom RDT protocol on top of UDP, handling packet loss within a simulated network via mininet. Written in python for my Computer Networking college subject. A custom wireshark dissector made in Lua is also provided.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'file_transfer.png',
			repoUrl: BASE_GH_URL + '7543_IntroSistDistribuidos/tree/main/tp1',
			hasWebpage: false
		},
		{
			title: 'Low level OS Utilities',
			description:
				'Implementation of multiple low level system utilities in C for my Operating Systems college subject. Includes a shell, a memory allocation library, a process scheduler for the JOS kernel, and a FUSE filesystem.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'shell.png',
			repoUrl: BASE_GH_URL + '7508_Sistemas_Operativos',
			hasWebpage: false
		},
		{
			title: "Properties' pricing analysis",
			description:
				"A data science project done with jupyter for my Data Science college subject. It consists of the data analysis and model training from a dataset with 2021's properties for sale in Buenos Aires, Argentina. It includes full data preprocessing, clustering, classification and regression; training multiple ML models.",
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'ds.png',
			repoUrl: BASE_GH_URL + '7506-Organizacion_de_datos',
			hasWebpage: false
		}
	];
</script>

<div class="external-project-cards-container space-y-6">
	<hr class="opacity-100" />
	<h2 class="h2 font-semibold text-4xl flex justify-center items-center">Projects</h2>

	<div class="inner-project-cards-container w-full text-token">
		{#each projectsList as project, i}
			<div class="project-card card variant-glass-primary custom-card-hover overflow-hidden">
				<div class="main-card-content">
					<header>
						<img src={project.previewImgUrl} class="bg-black/50" alt="Post" />
					</header>
					<div class="p-4 space-y-4">
						<h3 class="h3 text-2xl" data-toc-ignore>{project.title}</h3>
						<article>
							<p>
								<!-- cspell:disable -->
								{project.description}
								<!-- cspell:enable -->
							</p>
						</article>
					</div>
				</div>
				<footer class="inner-card-footer p-4 space-x-4">
					<hr class="opacity-100" />
					<br />
					<div class="inner-card-buttons-container">
						{#if project.hasWebPage}
							<a
								href={project.pageUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inner-button btn variant-glass-primary"
							>
								{#if triggerProjectButtonReductions}
									Website &nbsp; <i class="fa-solid fa-external-link" />
								{:else}
									View website &nbsp; <i class="fa-solid fa-external-link" />
								{/if}
							</a>
						{/if}
						<a
							href={project.repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="inner-button btn variant-glass-primary"
						>
							{#if triggerProjectButtonReductions}
								Repo &nbsp; <i class="fa-brands fa-github" />
							{:else}
								View repository &nbsp; <i class="fa-brands fa-github" />
							{/if}
						</a>
					</div>
				</footer>
			</div>
		{/each}
	</div>
</div>

<style>
	.inner-project-cards-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1.6rem;
		align-items: center;
		justify-items: center;
		width: 100%;
	}

	.project-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		max-width: 400px;
		min-height: 600px;
		max-height: 700px;
	}

	.inner-card-footer {
		display: flex;
		flex-direction: column;
		justify-self: flex-end;
		gap: 0.6rem;
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

	@media screen and (min-width: 900px) {
		.inner-project-cards-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (min-width: 1400px) {
		.inner-project-cards-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media screen and (max-width: 500px) {
		.project-card {
			max-width: 300px;
			min-width: 300px;
			min-height: 700px;
			max-height: 800px;
		}

		.card {
			min-height: 350px;
		}
	}

	.custom-card-hover {
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}
	.custom-card-hover:hover {
		--tw-scale-x: 104%;
		--tw-scale-y: 104%;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
		--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
		--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
			0 8px 10px -6px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
</style>
