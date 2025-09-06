<script>
	import { beforeNavigate, onNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import Navigator from './navigator.svelte';
	import { page } from '$app/state';

	import "$lib/assets/app.css";

	let { data, children } = $props();

	let touchX = $state(-1);
	let screenX = $state();
	let isSwiping = $state(false);

	let useDebug = $state(false);

	let mainElement = $state();

	let route = $derived(page.url.pathname.replace(/\/$/,'').split("/"));

	let isBack = $state(false);

	let title = $derived(page.data.title??data.title);

	let parentTitle = $derived(page.data.parent?.title);

	let pageDirection = $state('forward');

	onMount(()=>{
		screenX = window.innerWidth;
	});

	beforeNavigate((navigation)=>{

		pageDirection = 'forward';

		/** @type {string[]}*/
		const navigationTo = navigation.to?.url.pathname.replace(/\/$/,'').split("/")??[];
		const cond1 = (navigationTo.length < route.length && route[navigationTo.length - 1] == navigationTo[navigationTo.length - 1]) || navigationTo[1] == '';
		isBack = (cond1)?true:false;
	});

	onNavigate(async (navigation)=>{
		/** @type {string[]}*/
		const navigationTo = navigation.to?.url.pathname.replace(/\/$/,'').split("/")??[];

		if (route.length == navigationTo.length && route[route.length - 1] == navigationTo[navigationTo.length - 1]) return;
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
	<title>{title}{parentTitle?' < '+parentTitle:''}</title>
</svelte:head>
<svelte:window onpointerdown={(e)=>{touchX = Math.floor(e.clientX); isSwiping = false}} onpointermove={(e)=>{if (e.buttons === 1) {isSwiping = true} else { isSwiping = false }}}/>
<Navigator bind:direction={pageDirection} />
<div class="main" bind:this={mainElement}>
	<div class="container" class:back={isBack||(pageDirection == 'backward'?true:false)}>
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

	:global(:root) {
		--animation-duration: .2s;
	}

	::view-transition-old(container) {
		animation-name: old-desktop-toleft;
		animation-duration: var(--animation-duration);
		z-index: 0;
		position: fixed;
		top: 0;
	}
	::view-transition-new(container) {
		animation-name: new-desktop-toleft;
		animation-duration: var(--animation-duration);
		z-index: 1;
		position: fixed;
		top: 0;
	}
	::view-transition-old(container-back) {
		animation-name: old-desktop-toright;
		animation-duration: var(--animation-duration);
		z-index: 1;
		position: fixed;
		top: 0;
	}
	::view-transition-new(container-back) {
		animation-name: new-desktop-toright;
		animation-duration: var(--animation-duration);
		z-index: 0;
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
	.container.back {
		view-transition-name: container-back;
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
