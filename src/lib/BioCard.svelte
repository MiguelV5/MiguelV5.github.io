<script>
	const BASE_PREVIEW_IMG_URL = 'posts/';

	const previewImgsList = [
		BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
		BASE_PREVIEW_IMG_URL + 'ferris_torrent.png'
	];
</script>

<div class="bio-card-container space-y-6">
	<img src="art-card-nobg.png" alt="avatar-card" />
	<div class="inner-credit-msg">
		<p class="text-sm text-gray-700 dark:text-gray-300">
			▲ Art by <a
				href="https://www.pixiv.net/en/users/35653933"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 hover:text-black dark:text-blue-300 dark:hover:text-white"
				>wandu_mook</a
			>
		</p>
	</div>
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
		min-height: 300px;
		max-height: 300px;
		margin-left: 120px;
		margin-right: auto;
		overflow: hidden;
	}
	.bio-card-container > img {
		max-width: 240px;
		min-height: 240px;
		max-height: 240px;
	}

	.inner-credit-msg {
		padding: 0.5rem;
		border-radius: 0.5rem;
		opacity: 0;
		transform: translateY(-50px);
		transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
	}

	.bio-card-container:hover .inner-credit-msg {
		opacity: 1;
		transform: translateY(-40px);
		transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
	}

	@media screen and (max-width: 1200px) {
		.bio-card-container {
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50px;
		}

		.bio-card-container > img {
			max-width: 192px;
			min-height: 192px;
			max-height: 192px;
		}
	}
</style>
