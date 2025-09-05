<script>
	import { onNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import Navigator from './navigator.svelte';

	let { children } = $props();

	let touchX = $state(-1);
	let screenX = $state();
	let isSwiping = $state(false);

	let useDebug = $state(false);

	let mainElement = $state();

	onMount(()=>{
		screenX = window.innerWidth;
	});

	onNavigate(async (navigation)=>{
		if (!document.startViewTransition) return;
		if (touchX != -1 && isSwiping) {
			console.log("!!!");
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
<svelte:window onpointerdown={(e)=>{touchX = Math.floor(e.clientX); isSwiping = false}} onpointermove={(e)=>{if (e.buttons === 1) {isSwiping = true} else { isSwiping = false }}}/>
<Navigator />
<div class="main" bind:this={mainElement}>
	<div class="container">
		{@render children()}
	</div>
</div>
{#if useDebug}
<div class="debug">
	<p>{touchX}</p>
	<p>{isSwiping}</p>
</div>
{/if}
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
		width: 100vw;
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
	.debug {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		pointer-events: none;
	}
</style>