<script>
	const BASE_PREVIEW_IMG_URL = 'posts/';

	const previewImgsList = [
		BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
		BASE_PREVIEW_IMG_URL + 'ferris_torrent.png'
	];
</script>

<div class="bio-card-container space-y-6">
	<img src="art-card2-nobg.png" alt="" />
</div>

<style>
	.bio-card-container {
		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		align-items: center;
		width: 100%;
		border-radius: 0.5rem;
		max-width: 280px;
		min-height: 280px;
		max-height: 280px;
		margin-left: 120px;
		margin-right: auto;
		overflow: hidden;
	}

	@media screen and (max-width: 1200px) {
		.bio-card-container {
			margin-right: auto;
			margin-left: auto;
			margin-bottom: 40px;
		}
	}
</style>
