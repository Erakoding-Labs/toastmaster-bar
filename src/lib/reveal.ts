/** Svelte action: fade/slide element in when it scrolls into view. */
export function reveal(node: HTMLElement, params: { delay?: number } = {}) {
	node.classList.add('reveal');
	if (params.delay) node.style.transitionDelay = `${params.delay}ms`;

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('in-view');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('in-view');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
