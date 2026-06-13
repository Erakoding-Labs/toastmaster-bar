<script lang="ts">
	import { reveal } from '$lib/reveal';
	let {
		eyebrow,
		title,
		sub = '',
		center = true
	}: { eyebrow: string; title: string; sub?: string; center?: boolean } = $props();
</script>

<div use:reveal class={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
	<span class="text-sm font-semibold uppercase tracking-[0.25em] text-neon-red">{eyebrow}</span>
	<h2 class="mt-3 font-display text-4xl text-white sm:text-5xl md:text-6xl">{title}</h2>
	{#if sub}
		<p class="mt-4 text-base text-white/65 sm:text-lg">{sub}</p>
	{/if}
	<div class="neon-line {center ? 'mx-auto' : ''} mt-6 w-24"></div>
</div>
