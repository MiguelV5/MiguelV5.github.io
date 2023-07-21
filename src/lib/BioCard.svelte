<script>
	const BASE_PREVIEW_IMG_URL = 'posts/';

	const previewImgsList = [
		BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
		BASE_PREVIEW_IMG_URL + 'ferris_torrent.png'
	];
</script>

<div class="bio-card-container space-y-6">
	<img src="art-card-nobg.png" alt="avatar-card" />
</div>

<style>
	.bio-card-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		border-radius: 0.5rem;
		max-width: 240px;
		min-height: 240px;
		max-height: 240px;
		margin-left: 120px;
		margin-right: auto;
		overflow: hidden;
	}

	@media screen and (max-width: 1200px) {
		.bio-card-container {
			max-width: 192px;
			min-height: 192px;
			max-height: 192px;
			margin-right: auto;
			margin-left: auto;
			margin-bottom: 50px;
		}
	}
</style>
