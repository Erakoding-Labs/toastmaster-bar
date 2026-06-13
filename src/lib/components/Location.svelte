<script lang="ts">
	import { business, hours } from '$lib/business';
	import { reveal } from '$lib/reveal';
	import SectionHeading from './SectionHeading.svelte';
	import Icon from './Icon.svelte';

	// Highlight "today" — date provided statically; component stays SSR-safe.
	const todayIdx = new Date().getDay(); // 0 = Sunday
	// hours array is Mon..Sun, map JS day -> index
	const order = [6, 0, 1, 2, 3, 4, 5]; // Sun->6, Mon->0 ...
	const activeIdx = order[todayIdx];
</script>

<section id="location" class="section bg-ink-soft/40">
	<div class="container-x">
		<SectionHeading
			eyebrow="Find Us"
			title="Pull Up Tonight"
			sub="Right on N Front St in downtown Rock Springs."
		/>

		<div class="mt-12 grid gap-6 lg:grid-cols-5">
			<!-- Map -->
			<div use:reveal class="lg:col-span-3">
				<div class="glass-strong overflow-hidden rounded-3xl p-1.5 shadow-glow-purple">
					<iframe
						title="Map to The Toastmaster Bar & Liquor Store"
						src={business.mapsEmbed}
						class="h-[360px] w-full rounded-[1.3rem] grayscale-[0.3] contrast-110 sm:h-[440px]"
						style="border:0; filter: invert(0.9) hue-rotate(180deg) brightness(0.9) contrast(0.95);"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>

			<!-- Info + hours -->
			<div use:reveal={{ delay: 120 }} class="flex flex-col gap-5 lg:col-span-2">
				<div class="glass rounded-2xl p-6">
					<div class="flex items-start gap-3">
						<Icon name="pin" class="mt-0.5 h-5 w-5 shrink-0 text-neon-red" />
						<div>
							<div class="text-xs uppercase tracking-widest text-white/45">Address</div>
							<div class="mt-0.5 text-white">{business.address}</div>
						</div>
					</div>
					<div class="mt-5 flex items-start gap-3">
						<Icon name="phone" class="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" />
						<div>
							<div class="text-xs uppercase tracking-widest text-white/45">Phone</div>
							<a href={business.phoneHref} class="mt-0.5 block text-white hover:text-neon-cyan"
								>{business.phone}</a
							>
						</div>
					</div>
					<div class="mt-6 grid grid-cols-2 gap-3">
						<a href={business.mapsDirections} target="_blank" rel="noopener" class="btn btn-primary">
							<Icon name="directions" class="h-4 w-4" /> Directions
						</a>
						<a href={business.phoneHref} class="btn btn-ghost">
							<Icon name="phone" class="h-4 w-4" /> Call
						</a>
					</div>
				</div>

				<!-- Hours -->
				<div class="glass rounded-2xl p-6">
					<div class="mb-4 flex items-center gap-2">
						<Icon name="clock" class="h-5 w-5 text-neon-purple" />
						<h3 class="font-display text-xl tracking-wide text-white">Opening Hours</h3>
						<span
							class="ml-auto rounded-full bg-neon-red/15 px-2.5 py-1 text-xs font-semibold text-neon-red"
							>Open till 2 AM</span
						>
					</div>
					<ul class="space-y-1.5 text-sm">
						{#each hours as h, i}
							<li
								class="flex items-center justify-between rounded-lg px-3 py-2 {i === activeIdx
									? 'bg-gradient-to-r from-neon-purple/20 to-transparent text-white ring-1 ring-neon-purple/40'
									: 'text-white/65'}"
							>
								<span class="font-medium {i === activeIdx ? 'text-white' : ''}">
									{h.day}
									{#if i === activeIdx}<span class="ml-2 text-xs text-neon-cyan">Today</span>{/if}
								</span>
								<span>{h.open} – {h.close}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
