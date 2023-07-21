<script>
	const BASE_PREVIEW_IMG_URL = '../../posts/';

	const previewImgsList = [
		BASE_PREVIEW_IMG_URL + 'polyrythmic_circles.png',
		BASE_PREVIEW_IMG_URL + 'ferris_torrent.png'
	];
</script>

<div class="bio-card-container space-y-6">
	<div class="w-full">
		<div class="overflow-hidden rounded-lg">
			<img src="../../avatar.png" alt="" />
		</div>
	</div>
</div>

<style>
	.bio-card-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
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
