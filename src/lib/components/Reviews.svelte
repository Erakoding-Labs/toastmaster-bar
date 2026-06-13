<script lang="ts">
	import { reviews, business } from '$lib/business';
	import { reveal } from '$lib/reveal';
	import SectionHeading from './SectionHeading.svelte';
	import Icon from './Icon.svelte';
</script>

<section id="reviews" class="section bg-ink-soft/40">
	<div class="container-x">
		<SectionHeading
			eyebrow="The Regulars"
			title="What Locals Say"
			sub="Rated {business.rating}★ across {business.reviewCount}+ Google Reviews."
		/>

		<div class="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
			{#each reviews as r, i}
				<figure
					use:reveal={{ delay: (i % 3) * 90 }}
					class="glass break-inside-avoid rounded-2xl p-6 transition-transform hover:-translate-y-1"
				>
					<div class="mb-3 flex text-neon-pink">
						{#each Array(5) as _, s}
							<Icon name="star" class="h-4 w-4 {s < r.stars ? '' : 'opacity-20'}" />
						{/each}
					</div>
					<blockquote class="text-sm leading-relaxed text-white/80">“{r.text}”</blockquote>
					<figcaption class="mt-4 flex items-center gap-3">
						<span
							class="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-neon-purple to-neon-red text-sm font-bold text-white"
						>
							{r.name.charAt(0)}
						</span>
						<div>
							<div class="text-sm font-semibold text-white">{r.name}</div>
							<div class="text-xs text-white/45">Google Review</div>
						</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>
