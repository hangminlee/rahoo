<script>
  import { onNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import Navigator from './navigator.svelte';

	let { data, children } = $props();

	onNavigate(async (navigation)=>{
		if (!document.startViewTransition) return;

		return new Promise((resolve)=>{
			document.startViewTransition(async()=>{
				resolve();
				await navigation.complete;
			})
		})
	})
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="main">
	<div class="container">
		{@render children()}
	</div>
</div>
<Navigator />
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
		max-height: 100svh;
	}
	.container {
		position: relative;
		max-width: 900px;
		margin: 0 auto;
		view-transition-name: container;
	}
</style>