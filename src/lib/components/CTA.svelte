<script lang="ts">
	import { business } from '$lib/business';
	import { reveal } from '$lib/reveal';
	import Icon from './Icon.svelte';
</script>

<section class="section">
	<div class="container-x">
		<div
			use:reveal
			class="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-glow-red sm:px-12 sm:py-20"
		>
			<div class="pointer-events-none absolute inset-0">
				<div class="absolute -left-20 top-0 h-72 w-72 rounded-full bg-neon-red/25 blur-[90px]"></div>
				<div class="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-neon-purple/25 blur-[90px]"></div>
			</div>

			<div class="relative">
				<span class="text-sm font-semibold uppercase tracking-[0.3em] text-neon-cyan"
					>Last Call Is At 2 AM</span
				>
				<h2 class="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-white sm:text-6xl">
					Ready For A Night Out In <span class="text-gradient neon-text">Rock Springs?</span>
				</h2>
				<p class="mx-auto mt-4 max-w-xl text-white/65">
					Grab the crew, rack the table, warm up the mic. We'll keep the lights neon and the
					drinks cold.
				</p>
				<div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
					<a href={business.mapsDirections} target="_blank" rel="noopener" class="btn btn-primary text-base">
						<Icon name="directions" class="h-5 w-5" /> Get Directions
					</a>
					<a href={business.phoneHref} class="btn btn-ghost text-base">
						<Icon name="phone" class="h-5 w-5" /> Call Now
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
