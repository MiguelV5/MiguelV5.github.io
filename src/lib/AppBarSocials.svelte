<script>
	export let socials_class = 'hidden';

	const GH_URL = 'https://github.com/MiguelV5';
	const LINKEDIN_URL = 'https://www.linkedin.com/in/miguel-v5/';
	const SPOTIFY_URL = 'https://open.spotify.com/user/vasquezjimenezmiguelangel';
	const MAILTO_URL = 'mailto:miguel.v5th@gmail.com';
</script>

<a
	href={GH_URL}
	target="_blank"
	rel="noopener noreferrer"
	class="btn-icon flexible-button-icon variant-glass-surface socials {socials_class}"
>
	<i class="fa-brands fa-github" />
</a>
<a
	href={LINKEDIN_URL}
	target="_blank"
	rel="noopener noreferrer"
	class="btn-icon flexible-button-icon variant-glass-surface socials {socials_class}"
>
	<i class="fa-brands fa-linkedin" />
</a>
<a
	href={SPOTIFY_URL}
	target="_blank"
	rel="noopener noreferrer"
	class="btn-icon flexible-button-icon variant-glass-surface socials {socials_class}"
>
	<i class="fa-brands fa-spotify" />
</a>
<a
	href={MAILTO_URL}
	target="_blank"
	rel="noopener noreferrer"
	class="btn-icon flexible-button-icon variant-glass-surface socials {socials_class}"
>
	<i class="fa-solid fa-envelope" />
</a>

<style>
	.socials {
		display: flex;
		flex-direction: row;
		margin-left: 4px;
		margin-right: 2px;
		min-width: max-content;
	}
	.flexible-button-icon {
		/* grabbed from btn-icon-lg */
		aspect-ratio: 1 / 1;
		width: 53px;
		font-size: 1.125rem /* 18px */;
		line-height: 1.75rem /* 28px */;
	}

	.socials-enabled {
		opacity: 1;
		transform: translateX(10px);
		transition: transform 0.3s ease-in-out;
	}

	.socials-disabled {
		opacity: 0;
		transform: translateX(-10px);
		transition: transform 0.3s ease-in-out;
		pointer-events: none;
	}

	@keyframes socials-enabling {
		from {
			opacity: 0;
			transform: translateX(-10px);
			visibility: hidden;
		}
		to {
			opacity: 1;
			transform: translateX(10px);
			visibility: visible;
		}
	}

	@keyframes socials-disabling {
		from {
			opacity: 1;
			transform: translateX(10px);
			visibility: visible;
		}
		to {
			opacity: 0;
			transform: translateX(-10px);
			visibility: hidden;
		}
	}

	.socials-enabled {
		animation: socials-enabling 0.3s ease-in-out;
	}

	.socials-disabled {
		animation: socials-disabling 0.3s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		.socials {
			margin-left: 2px;
			margin-right: 1px;
		}

		.flexible-button-icon {
			/* grabbed from btn-icon-base */
			aspect-ratio: 1 / 1;
			width: 43px;
			font-size: 1rem /* 16px */;
			line-height: 1.5rem /* 24px */;
		}
	}
</style>
