<script lang="ts">
	import { reveal } from '$lib/reveal';
	import SectionHeading from './SectionHeading.svelte';
	import Icon from './Icon.svelte';

	const points = [
		{ icon: 'vibe', text: 'A friendly neighborhood bar where everybody ends up a regular.' },
		{ icon: 'pool', text: 'Pool games and darts running every night of the week.' },
		{ icon: 'mic', text: 'Karaoke nights that turn strangers into the house band.' },
		{ icon: 'drink', text: 'Relaxed, no-pretense atmosphere with a full bar and liquor store.' }
	];
</script>

<section id="about" class="section">
	<div class="container-x grid items-center gap-12 lg:grid-cols-2">
		<div>
			<SectionHeading
				eyebrow="Our Story"
				title="A True Rock Springs Dive"
				center={false}
			/>
			<div use:reveal={{ delay: 100 }} class="mt-6 space-y-4 text-white/70">
				<p>
					The Toastmaster Bar & Liquor Store has been Rock Springs' go-to spot for a good
					night out — the kind of place where the bartender remembers your drink and the
					regulars save you a seat.
				</p>
				<p>
					Shoot a round of pool, throw some darts, grab the mic on karaoke night, or just
					post up at the bar with a cold one. We're open late until <span
						class="font-semibold text-neon-red">2 AM</span
					>, so we're here when everywhere else has called it.
				</p>
				<p>
					No frills, no attitude — just good drinks, good people, and the best dive-bar
					energy in town.
				</p>
			</div>

			<div use:reveal={{ delay: 200 }} class="mt-8 grid gap-3 sm:grid-cols-2">
				{#each points as p}
					<div class="glass flex items-start gap-3 rounded-xl p-3.5">
						<Icon name={p.icon} class="mt-0.5 h-5 w-5 shrink-0 text-neon-purple" />
						<span class="text-sm text-white/80">{p.text}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- decorative neon panel -->
		<div use:reveal={{ delay: 150 }} class="relative">
			<div
				class="glass-strong relative overflow-hidden rounded-3xl p-1 shadow-glow-purple"
			>
				<div
					class="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-panel via-ink-soft to-ink"
				>
					<!-- neon sign mock -->
					<div class="pointer-events-none absolute inset-0">
						<div class="absolute left-8 top-10 h-40 w-40 rounded-full bg-neon-red/30 blur-3xl"></div>
						<div class="absolute bottom-10 right-8 h-48 w-48 rounded-full bg-neon-purple/30 blur-3xl"></div>
					</div>
					<div class="relative px-8 text-center">
						<div class="animate-flicker font-display text-5xl text-gradient neon-text sm:text-6xl">
							OPEN
						</div>
						<div class="mt-2 font-display text-7xl leading-none text-white neon-text sm:text-8xl">
							LATE
						</div>
						<div class="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">
							Pool · Darts · Karaoke
						</div>
						<div class="mx-auto mt-5 h-px w-32 bg-white/15"></div>
						<div class="mt-4 text-xs uppercase tracking-widest text-neon-cyan">
							Est. Rock Springs, WY
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
