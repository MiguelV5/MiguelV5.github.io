<script>
	import AppBarSocials from './AppBarSocials.svelte';

	let isHovered = false;
	export let isClicked = false;

	let innerSocialsClass = 'socials-disabled';

	function handleAvatarHover() {
		isHovered = !isHovered;
	}

	function handleAvatarClick() {
		isClicked = !isClicked;
		innerSocialsClass = isClicked ? 'socials-enabled' : 'socials-disabled';
	}

	function ignoreAction() {
		return;
	}
</script>

<button
	class="avatar"
	on:mouseover={handleAvatarHover}
	on:focus={ignoreAction}
	on:mouseout={handleAvatarHover}
	on:blur={ignoreAction}
	on:click={handleAvatarClick}
	on:keydown={(e) => {
		if (e.key === 'A') {
			handleAvatarClick();
		}
	}}
>
	<img src="avatar.png" alt="M" />
</button>

<AppBarSocials socials_class={innerSocialsClass} />

<style>
	.avatar {
		width: 3.8rem;
		height: 3.8rem;
		border-radius: 100%;
		border: 1px solid #323c5c;
		overflow: hidden;
		transition: transform 0.3s ease-in-out;
	}
	.avatar > img {
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 100%;
		overflow: hidden;
	}

	.avatar:hover {
		transform: scale(1.3);
		transition: transform 0.2s ease-in-out;
	}

	.avatar::before,
	.avatar::after {
		transform: scale(1);
		transition: transform 0.3s ease-in-out;
	}
</style>
