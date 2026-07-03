<script>
	export let titleFontSize = 'text-6xl';
</script>

<div class="bio-container">
	<div class="bio-text-container space-y-6">
		<h1 class="h1 font-bold {titleFontSize}">
			Hi, I'm
			<span class="magic-text">Miguel Vasquez</span>.
		</h1>
		<h3 class="h3">
			I am a graduate of my <a
                class="magic-text"
                href="https://fi.uba.ar"
                target="_blank"
                rel="noopener noreferrer">alma mater 🖤</a
            >, where I completed my studies in Computer Science and Engineering.
			<br />
			I possess a deep affection for this fascinating field in its entirety; hence, I find great joy in constantly learning and sharing its knowledge. This page showcases some of my most significant projects, all developed throughout my studies and personal endeavors. May you find them interesting! I wish you a great day wherever you are.
		</h3>
	</div>
</div>

<style>
	.bio-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 70%;
	}

	.bio-text-container {
		width: 100%;
		max-width: 800px;
		margin-bottom: 30px;
	}

	@media screen and (max-width: 1400px) {
		.bio-container {
			width: 85%;
			align-items: center;
		}
	}

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
