<script lang="ts">
	import { business } from '$lib/business';
	import Icon from './Icon.svelte';
</script>

<section id="top" class="relative flex min-h-[100svh] items-center overflow-hidden">
	<!-- Ambient neon backdrop -->
	<div class="pointer-events-none absolute inset-0 -z-10">
		<div
			class="absolute -left-32 top-10 h-96 w-96 rounded-full bg-neon-red/25 blur-[120px] animate-pulse-glow"
		></div>
		<div
			class="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-neon-purple/25 blur-[130px] animate-pulse-glow"
			style="animation-delay: 1s"
		></div>
		<div
			class="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-neon-blue/20 blur-[120px] animate-pulse-glow"
			style="animation-delay: 2s"
		></div>
		<!-- grid floor -->
		<div
			class="absolute inset-x-0 bottom-0 h-1/2 opacity-30"
			style="background-image: linear-gradient(rgba(168,85,247,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,85,0.18) 1px, transparent 1px); background-size: 48px 48px; mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent);"
		></div>
	</div>

	<div class="container-x relative pt-28 pb-20">
		<div class="max-w-3xl">
			<div
				class="reveal mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm"
			>
				<span class="relative flex h-2.5 w-2.5">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-red opacity-75"
					></span>
					<span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon-red"></span>
				</span>
				<span class="text-white/80">Open Late — Until {business.closingTime}</span>
			</div>

			<h1 class="font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
				<span class="block text-white">Rock Springs'</span>
				<span class="block text-gradient neon-text">Late-Night</span>
				<span class="block text-white">Local Favorite</span>
			</h1>

			<p class="mt-6 text-lg font-medium tracking-wide text-white/70 sm:text-xl">
				Pool <span class="text-neon-red">•</span> Darts
				<span class="text-neon-purple">•</span> Karaoke
				<span class="text-neon-blue">•</span> Drinks
				<span class="text-neon-pink">•</span> Good Vibes
			</p>

			<div class="mt-9 flex flex-col gap-3 sm:flex-row">
				<a href={business.mapsDirections} target="_blank" rel="noopener" class="btn btn-primary text-base">
					<Icon name="directions" class="h-5 w-5" /> Get Directions
				</a>
				<a href={business.phoneHref} class="btn btn-ghost text-base">
					<Icon name="phone" class="h-5 w-5" /> Call Now
				</a>
			</div>

			<div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
				<div class="flex items-center gap-2">
					<div class="flex text-neon-pink">
						{#each Array(5) as _, i}
							<Icon name="star" class="h-4 w-4 {i < Math.round(business.rating) ? '' : 'opacity-25'}" />
						{/each}
					</div>
					<span class="font-semibold text-white">{business.rating}</span>
					<span>· {business.reviewCount} Google Reviews</span>
				</div>
				<span class="hidden h-4 w-px bg-white/20 sm:block"></span>
				<div class="flex items-center gap-2">
					<Icon name="pin" class="h-4 w-4 text-neon-cyan" />
					<span>{business.addressShort}</span>
				</div>
			</div>
		</div>
	</div>

	<!-- scroll cue -->
	<div class="absolute inset-x-0 bottom-6 flex justify-center">
		<div class="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1.5">
			<div class="h-2 w-1 animate-float-slow rounded-full bg-white/60"></div>
		</div>
	</div>
</section>
