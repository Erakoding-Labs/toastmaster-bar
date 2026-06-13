<script lang="ts">
	import { features } from '$lib/business';
	import { reveal } from '$lib/reveal';
	import SectionHeading from './SectionHeading.svelte';
	import Icon from './Icon.svelte';

	// Static class strings so Tailwind generates them.
	const glow: Record<string, { text: string; hover: string }> = {
		red: { text: 'text-neon-red', hover: 'hover:shadow-glow-red' },
		purple: { text: 'text-neon-purple', hover: 'hover:shadow-glow-purple' },
		blue: { text: 'text-neon-blue', hover: 'hover:shadow-glow-blue' },
		pink: { text: 'text-neon-pink', hover: 'hover:shadow-glow-red' },
		cyan: { text: 'text-neon-cyan', hover: 'hover:shadow-glow-blue' }
	};
</script>

<section id="features" class="section bg-ink-soft/40">
	<div class="container-x">
		<SectionHeading
			eyebrow="What's Inside"
			title="Everything For The Night"
			sub="Five reasons the locals keep coming back."
		/>

		<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as f, i}
				<div
					use:reveal={{ delay: (i % 3) * 90 }}
					class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 {glow[
						f.glow
					].hover}"
				>
					<div
						class="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-white/10 {glow[
							f.glow
						].text}"
					>
						<Icon name={f.icon} class="h-7 w-7" />
					</div>
					<h3 class="font-display text-2xl text-white">{f.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-white/65">{f.desc}</p>
					<div
						class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-current opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20 {glow[
							f.glow
						].text}"
					></div>
				</div>
			{/each}

			<!-- CTA card -->
			<div
				use:reveal={{ delay: 180 }}
				class="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-neon-red/90 to-neon-purple/90 p-6 text-white shadow-glow-red"
			>
				<h3 class="font-display text-3xl leading-tight">Come See For Yourself</h3>
				<p class="mt-2 text-sm text-white/90">The vibe doesn't translate through a screen. Pull up.</p>
				<a
					href="#location"
					class="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-white/15 px-4 py-2.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/25"
				>
					<Icon name="pin" class="h-4 w-4" /> Find Us
				</a>
			</div>
		</div>
	</div>
</section>
