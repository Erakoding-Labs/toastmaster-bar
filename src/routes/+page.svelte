<script lang="ts">
	import { business, hours } from '$lib/business';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Trust from '$lib/components/Trust.svelte';
	import About from '$lib/components/About.svelte';
	import Features from '$lib/components/Features.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Location from '$lib/components/Location.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const title = `${business.name} | Rock Springs Bar, Pool, Karaoke & Liquor Store`;
	const description =
		"Rock Springs' late-night local favorite. Pool tables, darts, karaoke nights, full bar & liquor store. Open until 2 AM. 4.2★ on Google. Call +1 307-382-9692.";

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BarOrPub',
		name: business.name,
		image: 'https://toastmasterbar.example/og.jpg',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '453 N Front St',
			addressLocality: 'Rock Springs',
			addressRegion: 'WY',
			postalCode: '82901',
			addressCountry: 'US'
		},
		telephone: business.phone,
		servesCuisine: 'Bar',
		priceRange: '$',
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: business.rating,
			reviewCount: business.reviewCount
		},
		openingHoursSpecification: hours.map((h) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: h.day,
			opens: '12:00',
			closes: '02:00'
		}))
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://toastmasterbar.example/" />

	<!-- Open Graph -->
	<meta property="og:type" content="business.business" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content={business.name} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />

	<meta name="keywords" content="bar Rock Springs, dive bar Wyoming, karaoke Rock Springs, pool tables, liquor store, late night bar, The Toastmaster" />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</` + `script>`}
</svelte:head>

<Navbar />

<main>
	<Hero />
	<Trust />
	<About />
	<Features />
	<Menu />
	<Reviews />
	<Gallery />
	<Location />
	<CTA />
</main>

<Footer />
