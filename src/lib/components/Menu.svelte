<script lang="ts">
	import { menu } from '$lib/business';
	import { reveal } from '$lib/reveal';
	import SectionHeading from './SectionHeading.svelte';
	import Icon from './Icon.svelte';

	const categories = Object.entries(menu);
</script>

<section id="menu" class="section">
	<div class="container-x">
		<SectionHeading
			eyebrow="The Pour"
			title="Drinks Worth The Trip"
			sub="Cold beer, honest cocktails, and a liquor store next door. Here's a taste."
		/>

		<div class="mt-12 grid gap-5 lg:grid-cols-3">
			{#each categories as [cat, items], i}
				<div
					use:reveal={{ delay: i * 100 }}
					class="glass flex flex-col rounded-2xl p-6"
				>
					<div class="mb-5 flex items-center gap-2">
						<Icon name="drink" class="h-5 w-5 text-neon-pink" />
						<h3 class="font-display text-2xl tracking-wide text-white">{cat}</h3>
					</div>
					<ul class="flex flex-1 flex-col gap-4">
						{#each items as item}
							<li>
								<div class="flex items-baseline justify-between gap-3">
									<span class="font-medium text-white">{item.name}</span>
									<span class="h-px flex-1 translate-y-[-2px] bg-white/10"></span>
									<span class="font-display text-xl text-neon-red">{item.price}</span>
								</div>
								<p class="mt-0.5 text-xs text-white/50">{item.note}</p>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div use:reveal class="mt-10 flex flex-col items-center gap-3 text-center">
			<p class="text-sm text-white/50">Full menu, daily specials & happy hour in-house.</p>
			<a href="#location" class="btn btn-ghost">View Full Menu</a>
		</div>
	</div>
</section>
