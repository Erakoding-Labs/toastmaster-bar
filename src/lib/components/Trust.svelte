<script lang="ts">
	import { business } from '$lib/business';
	import { reveal } from '$lib/reveal';
	import Icon from './Icon.svelte';

	const stats = [
		{ value: `${business.rating}★`, label: 'Google Rating', icon: 'star' },
		{ value: `${business.reviewCount}+`, label: 'Reviews', icon: 'star' },
		{ value: '2 AM', label: 'Open Late', icon: 'clock' },
		{ value: 'Pool & Karaoke', label: 'On Site', icon: 'pool' },
		{ value: 'Local', label: 'Favorite Dive Bar', icon: 'vibe' }
	];
</script>

<section class="relative border-y border-white/5 bg-ink-soft/60 py-10">
	<div class="container-x">
		<div class="grid grid-cols-2 gap-4 md:grid-cols-5">
			{#each stats as s, i}
				<div
					use:reveal={{ delay: i * 80 }}
					class="glass group flex flex-col items-center gap-2 rounded-2xl px-4 py-6 text-center transition-transform hover:-translate-y-1"
				>
					<Icon name={s.icon} class="h-6 w-6 text-neon-pink transition-colors group-hover:text-neon-red" />
					<div class="font-display text-2xl text-white">{s.value}</div>
					<div class="text-xs uppercase tracking-wider text-white/55">{s.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>
