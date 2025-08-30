<script>
	import favicon from '$lib/assets/favicon.svg';
	import Navigator from './navigator.svelte';

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="container">
	{@render children()}
</div>
<Navigator />