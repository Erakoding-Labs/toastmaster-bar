<script lang="ts">
	import { business } from '$lib/business';
	import Icon from './Icon.svelte';

	let scrolled = $state(false);
	let open = $state(false);

	const links = [
		{ href: '#about', label: 'About' },
		{ href: '#features', label: 'Bar' },
		{ href: '#menu', label: 'Menu' },
		{ href: '#reviews', label: 'Reviews' },
		{ href: '#gallery', label: 'Gallery' },
		{ href: '#location', label: 'Find Us' }
	];

	function onScroll() {
		scrolled = window.scrollY > 30;
	}

	function close() {
		open = false;
	}
</script>

<svelte:window on:scroll={onScroll} />

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled
		? 'glass-strong shadow-lg shadow-black/40'
		: 'bg-transparent'}"
>
	<nav class="container-x flex items-center justify-between py-3.5">
		<a href="#top" class="group flex items-center gap-2.5" onclick={close}>
			<span
				class="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-neon-red to-neon-purple text-lg font-bold shadow-glow-red"
				>T</span
			>
			<span class="font-display text-xl leading-none tracking-wide">
				<span class="text-white">TOAST</span><span class="text-gradient">MASTER</span>
			</span>
		</a>

		<div class="hidden items-center gap-7 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm font-medium text-white/70 transition-colors hover:text-white"
				>
					{link.label}
				</a>
			{/each}
			<a href={business.phoneHref} class="btn btn-primary py-2.5 text-sm">
				<Icon name="phone" class="h-4 w-4" /> Call Now
			</a>
		</div>

		<button
			class="grid h-10 w-10 place-items-center rounded-lg border border-white/15 md:hidden"
			aria-label="Toggle menu"
			onclick={() => (open = !open)}
		>
			<div class="space-y-1.5">
				<span
					class="block h-0.5 w-5 bg-white transition-transform {open
						? 'translate-y-2 rotate-45'
						: ''}"
				></span>
				<span class="block h-0.5 w-5 bg-white transition-opacity {open ? 'opacity-0' : ''}"></span>
				<span
					class="block h-0.5 w-5 bg-white transition-transform {open
						? '-translate-y-2 -rotate-45'
						: ''}"
				></span>
			</div>
		</button>
	</nav>

	{#if open}
		<div class="glass-strong border-t border-white/10 md:hidden">
			<div class="container-x flex flex-col gap-1 py-4">
				{#each links as link}
					<a
						href={link.href}
						onclick={close}
						class="rounded-lg px-3 py-2.5 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
					>
						{link.label}
					</a>
				{/each}
				<a href={business.phoneHref} onclick={close} class="btn btn-primary mt-2">
					<Icon name="phone" class="h-4 w-4" /> Call Now
				</a>
			</div>
		</div>
	{/if}
</header>
