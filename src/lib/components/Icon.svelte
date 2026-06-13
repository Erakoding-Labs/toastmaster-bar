<script lang="ts">
	let { name, class: cls = 'h-7 w-7' }: { name: string; class?: string } = $props();
</script>

{#if name === 'pool'}
	<svg class={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
		<circle cx="12" cy="12" r="9" />
		<circle cx="12" cy="12" r="3.5" />
	</svg>
{:else if name === 'darts'}
	<svg class={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
		<circle cx="12" cy="12" r="9" />
		<circle cx="12" cy="12" r="5" />
		<circle cx="12" cy="12" r="1.2" fill="currentColor" />
		<path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
	</svg>
{:else if name === 'mic'}
	<svg class={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
		<rect x="9" y="2" width="6" height="12" rx="3" />
		<path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8" />
	</svg>
{:else if name === 'drink'}
	<svg class={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
		<path d="M4 4h16l-7 8v7M4 4l8 8M16 19h-6" />
	</svg>
{:else if name === 'vibe'}
	<svg class={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
		<path d="M9 18V5l12-2v13" />
		<circle cx="6" cy="18" r="3" />
		<circle cx="18" cy="16" r="3" />
	</svg>
{:else if name === 'star'}
	<svg class={cls} viewBox="0 0 24 24" fill="currentColor">
		<path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9z" />
	</svg>
{:else if name === 'phone'}
	<svg class={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
		<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
	</svg>
{:else if name === 'pin'}
	<svg class={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
		<path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
		<circle cx="12" cy="10" r="3" />
	</svg>
{:else if name === 'clock'}
	<svg class={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
		<circle cx="12" cy="12" r="9" />
		<path d="M12 7v5l3 2" />
	</svg>
{:else if name === 'directions'}
	<svg class={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
		<path d="M3 11l18-8-8 18-2-8-8-2z" />
	</svg>
{/if}
