<script>
	export let triggerProjectButtonReductions = false;

	const BASE_PREVIEW_IMG_URL = 'posts/';

	const BASE_GH_URL = 'https://github.com/MiguelV5/';
	const BASE_PAGES_URL = 'https://miguelv5.github.io/';

	const projectsList = [
		{
			title: 'Polyrythmic Circles',
			description:
				'A relaxing static page featuring the polyrythmic effect, done simply with vanilla js, html and css.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
			repoUrl: BASE_GH_URL + 'polyrythmic_circles',
			hasWebPage: true,
			pageUrl: BASE_PAGES_URL + 'polyrythmic_circles'
		},
		{
			title: 'Ferris Torrent',
			description:
				'A two-part project consisting of a bitTorrent client with a GTK-4 GUI supporting multiple concurrent peers for both leeching and seeding, and a custom tracker server with a simple static web interface for basic stats of its peers. Both done in Rust while keeping external crate usage to a minimum (TLS, GTK, logging, json).',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'ferris_torrent.png',
			repoUrl: BASE_GH_URL + 'Ferris-Torrent_taller1-fiuba',
			hasWebpage: false
		},
		{
			title: 'FileTransfer + RDT',
			description:
				'A CLI File Transfer application using a custom Reliable Data Transfer protocol on top of UDP, handling errors and packet loss within a simulated network via mininet with a custom topology, written in python for my Computer Networking college subject. We also provide a simple custom wireshark dissector for our RDT protocol made in Lua.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'file_transfer.png',
			repoUrl: BASE_GH_URL + '7543_IntroSistDistribuidos/tree/main/tp1',
			hasWebpage: false
		},
		{
			title: 'Minimal Shell',
			description:
				'A minimal shell written in C for my Operating Systems college subject. It supports general commands (using exec), pipes, redirections, and background processes.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'shell.png',
			repoUrl: BASE_GH_URL + '7508_SisOp_labs/tree/master/lab-shell/shell',
			hasWebpage: false
		},
		{
			title: 'Properties pricing + Machine Learning',
			description:
				'A data science project done with jupyter for my Data Science college subject. It consists of the data analysis and model training from a dataset with 2021`s properties for sale in Buenos Aires, Argentina; given by the Properati company. It includes full data preprocessing, clustering, classification and regression, training different machine learning models like Decision Trees, KNN, XGBoost, Neural Networks and Ensemble models.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'ds.png',
			repoUrl: BASE_GH_URL + '7506-Organizacion_de_datos',
			hasWebpage: false
		},
		{
			title: 'Human Resources REST API',
			description:
				'A simple REST API for a Human Resources Module for my Software Engineering college subject. It was done using Python, FastAPI, and SQLAlchemy. It includes a simple web interface for the API documentation, and Gherkin tests using Behave for a BDD approach. It uses Render for deployment.',
			previewImgUrl: BASE_PREVIEW_IMG_URL + 'fastapi.png',
			repoUrl: BASE_GH_URL + '7509-ModuloRecursos-squad_6',

			hasWebPage: true,
			pageUrl: 'https://rrhh-squad6-1c2023.onrender.com/docs'
		}
	];

	let gridRows = `${projectsList.length}`;
</script>

<div class="external-project-cards-container space-y-6">
	<hr class="opacity-100" />
	<h2 class="h2 font-semibold text-4xl flex justify-center items-center">Projects</h2>

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
					<h3 class="h3 text-2xl" data-toc-ignore>{project.title}</h3>
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

	@media screen and (max-width: 500px) {
		/* .inner-project-cards-container {
            grid-template-columns: 1fr; Posible changes instead of using direct logic over the classes
            grid-template-columns: repeat(1, minmax(0, 1fr));

        } */
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
</style>
