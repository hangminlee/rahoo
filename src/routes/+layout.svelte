<script>
	import { onNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import Navigator from './navigator.svelte';

	let { children } = $props();

	let touchX = $state(-1);
	let screenX = $state();
	let isSwiping = $state(false);

	onMount(()=>{
		screenX = window.innerWidth;
	});

	onNavigate(async (navigation)=>{
		if (!document.startViewTransition) return;
		if (touchX != -1 && isSwiping) {
			if (touchX < 25) {
				touchX = -1;
				isSwiping = false;
				return;
			} else if (touchX > (screenX - 25)) {
				touchX = -1;
				isSwiping = false;
				return;
			}
		}

		return new Promise((resolve)=>{
			document.startViewTransition(async()=>{
				resolve();
				await navigation.complete;
				touchX = -1;
			})
		})
	})
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<svelte:window onpointerdown={(e)=>{touchX = e.screenX; isSwiping = false}} onpointermove={(e)=>{isSwiping = true}}/>
<Navigator />
<div class="main">
	<div class="container">
		{@render children()}
	</div>
</div>
<style>
	@view-transition {
		navigation: auto;
	}
	
	@keyframes old {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(-10px);
			opacity: 0;
		}
	}
	@keyframes new {
		from {
			transform: translateX(100px);
			opacity: 0;
		}
		to {
			transform: translateX(0%);
			opacity: 1;
		}
	}

	::view-transition-old(container) {
		animation-name: old;
		z-index: 0;
		position: fixed;
		top: 0;
	}
	::view-transition-new(container) {
		animation-name: new;
		z-index: 1;
		position: fixed;
		top: 0;
	}
	.main {
		background: var(--default-primary);
		height: calc(100svh - 1px);
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		overflow-y: auto;
		overflow-x: hidden;
		display: grid;
	}
	.container {
		position: relative;
		max-width: 900px;
		margin: 0 auto;
		view-transition-name: container;
		display: grid;
		grid-template-areas:
		"top"
		"sub";
		grid-template-rows: min-content 1fr;
		grid-template-columns: min(900px, 100vw);
	}
</style>