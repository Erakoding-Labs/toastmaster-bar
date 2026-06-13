<script lang="ts">
	import { business } from '$lib/business';
	import Icon from './Icon.svelte';

	const year = new Date().getFullYear();

	const socials = [
		{ label: 'Facebook', href: '#', d: 'M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h2.5l.5-3H14V9z' },
		{
			label: 'Instagram',
			href: '#',
			d: 'M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.3a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM17 7a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8z'
		}
	];
</script>

<footer class="border-t border-white/10 bg-ink py-12">
	<div class="container-x">
		<div class="grid gap-8 md:grid-cols-3">
			<div>
				<div class="flex items-center gap-2.5">
					<span
						class="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-neon-red to-neon-purple text-lg font-bold shadow-glow-red"
						>T</span
					>
					<span class="font-display text-xl tracking-wide">
						<span class="text-white">TOAST</span><span class="text-gradient">MASTER</span>
					</span>
				</div>
				<p class="mt-3 max-w-xs text-sm text-white/55">
					Rock Springs' late-night local favorite. Pool, darts, karaoke & drinks — open till 2 AM.
				</p>
				<div class="mt-4 flex gap-3">
					{#each socials as s}
						<a
							href={s.href}
							aria-label={s.label}
							class="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-neon-pink"
						>
							<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
						</a>
					{/each}
				</div>
			</div>

			<div>
				<h4 class="font-display text-lg tracking-wide text-white">Visit</h4>
				<ul class="mt-3 space-y-2 text-sm text-white/60">
					<li class="flex items-start gap-2">
						<Icon name="pin" class="mt-0.5 h-4 w-4 shrink-0 text-neon-red" />
						<span>{business.address}</span>
					</li>
					<li class="flex items-center gap-2">
						<Icon name="phone" class="h-4 w-4 shrink-0 text-neon-cyan" />
						<a href={business.phoneHref} class="hover:text-white">{business.phone}</a>
					</li>
					<li class="flex items-center gap-2">
						<Icon name="clock" class="h-4 w-4 shrink-0 text-neon-purple" />
						<span>Open daily until 2:00 AM</span>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="font-display text-lg tracking-wide text-white">Explore</h4>
				<ul class="mt-3 grid grid-cols-2 gap-2 text-sm text-white/60">
					{#each [['#about', 'About'], ['#features', 'The Bar'], ['#menu', 'Menu'], ['#reviews', 'Reviews'], ['#gallery', 'Gallery'], ['#location', 'Find Us']] as [href, label]}
						<li><a {href} class="hover:text-white">{label}</a></li>
					{/each}
				</ul>
				<a href={business.mapsDirections} target="_blank" rel="noopener" class="btn btn-primary mt-5 w-full">
					<Icon name="directions" class="h-4 w-4" /> Get Directions
				</a>
			</div>
		</div>

		<div class="neon-line mt-10"></div>
		<div class="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
			<span>© {year} {business.name}. All rights reserved.</span>
			<span>Must be 21+. Please drink responsibly.</span>
		</div>
	</div>
</footer>
