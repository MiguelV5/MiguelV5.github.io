<script>
	export let avatar_button_class = 'hidden';

	const GH_URL = 'https://github.com/MiguelV5';
	const LINKEDIN_URL = 'https://www.linkedin.com/in/miguel-v5/';
	const SPOTIFY_URL = 'https://open.spotify.com/user/vasquezjimenezmiguelangel';
	const MAILTO_URL = 'mailto:miguel.v5th@gmail.com';
</script>

<a href={GH_URL} class="btn variant-glass-surface {avatar_button_class}">g</a>
<a href={LINKEDIN_URL} class="btn variant-glass-surface {avatar_button_class}">l</a>
<a href={SPOTIFY_URL} class="btn variant-glass-surface {avatar_button_class}">s</a>
<a href={MAILTO_URL} class="btn variant-glass-surface {avatar_button_class}">m</a>

<style>
	.avatar-buttons-enter-active {
		opacity: 1;
		transform: translateX(0%);
		transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
	}

	.avatar-buttons-exit {
		opacity: 1;
		transform: translateX(0%);
	}

	.avatar-buttons-exit-active {
		opacity: 0;
		transform: translateX(-100%);
		transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
	}
</style>
