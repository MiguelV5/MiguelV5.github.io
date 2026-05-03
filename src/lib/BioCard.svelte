<script>
	import { onMount } from 'svelte';

	let backgroundPos = '0% 0%';
	let animationInterval;
	let isPlaying = false;

	const TOTAL_FRAMES = 56; // 8 cols x 7 rows
	const TOTAL_COLS = 8;
	const TOTAL_ROWS = 7;
	const ANIMATION_SPEED = 3; // secs

	let currentFrame = 0;

	function updateBackgroundPosition() {
		const row = Math.floor(currentFrame / TOTAL_COLS);
		const col = currentFrame % TOTAL_COLS;
		const xStep = 100 / (TOTAL_COLS - 1);
		const yStep = 100 / (TOTAL_ROWS - 1);
		backgroundPos = `${col * xStep}% ${row * yStep}%`;
		currentFrame = (currentFrame + 1) % TOTAL_FRAMES;

		if (currentFrame === 0) {
			stopAnimation();
			isPlaying = false;
		}
	}

	function startAnimation() {
		if (isPlaying) {
			return;
		}

		isPlaying = true;
		currentFrame = 0;
		backgroundPos = '0% 0%';

		stopAnimation();
		animationInterval = setInterval(updateBackgroundPosition, (ANIMATION_SPEED * 1000) / TOTAL_FRAMES);
	}

	function stopAnimation() {
		clearInterval(animationInterval);
		animationInterval = undefined;
	}

	function toggleAnimation() {
		if (isPlaying) {
			return;
		}

		startAnimation();
	}

	onMount(() => {
		startAnimation();
		return () => stopAnimation();
	});
</script>

<div class="bio-card-container space-y-6">
	<button
		class="skeleton-spritesheet"
		on:click={toggleAnimation}
		title="💀📖"
		style="background-position: {backgroundPos};"
	/>
	<!-- <div class="inner-credit-msg">
		<p class="text-sm text-gray-700 dark:text-gray-300">
			▲ Art by <a
				href="https://www.pixiv.net/en/users/35653933"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 hover:text-black dark:text-blue-300 dark:hover:text-white"
				>wandu_mook</a
			>
		</p>
	</div> -->
</div>

<style>
	.bio-card-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		border-radius: 0.5rem;
		max-width: 240px;
		/* max-height: 340px; */
		margin-left: 120px;
		margin-right: auto;
		margin-top: -20px;
		overflow: hidden;
	}

	.skeleton-spritesheet {
		width: 213px;
		height: 393px;
		background-image: url('/skeleton-spritesheet.png');
		background-size: 800% 700%;
		background-position: 0% 0%;
		border: none;
		cursor: pointer;
		padding: 0;
		image-rendering: pixelated;
		image-rendering: crisp-edges;
		background-repeat: no-repeat;
		background-origin: content-box;
		background-clip: content-box;
		outline: none;
	}

	.skeleton-spritesheet:hover {
		transform: scale(1.03);
	}

	/* .inner-credit-msg {
		padding: 0.5rem;
		border-radius: 0.5rem;
		opacity: 0;
		transform: translateY(-50px);
		transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
		font-size: 0.75rem;
	} */

	/* .bio-card-container:hover .inner-credit-msg {
		opacity: 1;
		transform: translateY(-40px);
		transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
	} */

	@media screen and (max-width: 1400px) {
		.bio-card-container {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
