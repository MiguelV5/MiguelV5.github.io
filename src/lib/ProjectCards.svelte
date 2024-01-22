<script>
	export let triggerProjectButtonReductions = false;

	import { PROJECTS_LIST } from './projects.js';
</script>

<div class="external-project-cards-container space-y-6">
	<hr />
	<h2 class="h2 font-semibold text-4xl flex justify-center items-center">Projects</h2>

	<div class="inner-project-cards-container w-full text-token">
		{#each PROJECTS_LIST as project, i}
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
					<hr />
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
								Repo &nbsp; <i class="fa-solid fa-code" />
							{:else}
								View repository &nbsp; <i class="fa-solid fa-code" />
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
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
		--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
		--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
			0 8px 10px -6px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
</style>
