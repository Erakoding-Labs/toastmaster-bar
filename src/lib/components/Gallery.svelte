<script lang="ts">
	import { gallery } from '$lib/business';
	import { reveal } from '$lib/reveal';
	import SectionHeading from './SectionHeading.svelte';
	import Icon from './Icon.svelte';

	// Varied tile spans for a dynamic mosaic.
	const spans = [
		'sm:col-span-2 sm:row-span-2',
		'',
		'',
		'sm:row-span-2',
		'',
		'sm:col-span-2'
	];
</script>

<section id="gallery" class="section">
	<div class="container-x">
		<SectionHeading
			eyebrow="The Scene"
			title="Inside The Toastmaster"
			sub="Neon, felt tables, and late-night energy."
		/>

		<div class="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4">
			{#each gallery as g, i}
				<div
					use:reveal={{ delay: (i % 4) * 80 }}
					class="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 {spans[i] ?? ''}"
				>
					<div class="absolute inset-0 bg-gradient-to-br {g.tone}"></div>
					<div class="absolute inset-0 bg-ink/40 transition-colors group-hover:bg-ink/10"></div>
					<!-- grain/grid texture -->
					<div
						class="absolute inset-0 opacity-20"
						style="background-image: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 60%);"
					></div>
					<div
						class="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center"
					>
						<Icon
							name={g.icon}
							class="h-9 w-9 text-white/80 transition-transform duration-300 group-hover:scale-110"
						/>
						<span
							class="px-3 text-xs font-semibold uppercase tracking-widest text-white/85"
							>{g.label}</span
						>
					</div>
					<div
						class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue opacity-0 transition-opacity group-hover:opacity-100"
					></div>
				</div>
			{/each}
		</div>
		<p use:reveal class="mt-6 text-center text-xs text-white/40">
			Representative atmosphere visuals — come experience the real thing.
		</p>
	</div>
</section>
