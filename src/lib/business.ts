export const business = {
	name: 'The Toastmaster Bar & Liquor Store',
	shortName: 'The Toastmaster',
	tagline: "Rock Springs' Late-Night Local Favorite",
	subtagline: 'Pool • Darts • Karaoke • Drinks • Good Vibes',
	rating: 4.2,
	reviewCount: 116,
	category: 'Bar / Liquor Store',
	phone: '+1 307-382-9692',
	phoneHref: 'tel:+13073829692',
	address: '453 N Front St, Rock Springs, WY 82901, USA',
	addressShort: '453 N Front St, Rock Springs, WY',
	closingTime: '2:00 AM',
	mapsDirections:
		'https://www.google.com/maps/dir/?api=1&destination=The+Toastmaster+Bar+%26+Liquor+Store+453+N+Front+St+Rock+Springs+WY+82901',
	mapsEmbed:
		'https://www.google.com/maps?q=453+N+Front+St,+Rock+Springs,+WY+82901&output=embed'
};

export const hours = [
	{ day: 'Monday', open: '12:00 PM', close: '2:00 AM' },
	{ day: 'Tuesday', open: '12:00 PM', close: '2:00 AM' },
	{ day: 'Wednesday', open: '12:00 PM', close: '2:00 AM' },
	{ day: 'Thursday', open: '12:00 PM', close: '2:00 AM' },
	{ day: 'Friday', open: '12:00 PM', close: '2:00 AM' },
	{ day: 'Saturday', open: '12:00 PM', close: '2:00 AM' },
	{ day: 'Sunday', open: '12:00 PM', close: '2:00 AM' }
];

export const features = [
	{
		title: 'Pool Tables',
		desc: 'Rack them up on our well-kept tables. Casual games or late-night tournaments — always a cue free.',
		icon: 'pool',
		glow: 'red'
	},
	{
		title: 'Darts Area',
		desc: 'Steel-tip boards and bragging rights. Grab a team, throw a round, settle the score.',
		icon: 'darts',
		glow: 'purple'
	},
	{
		title: 'Karaoke Nights',
		desc: 'Take the mic and own the room. Locals, anthems, and zero judgment under the neon.',
		icon: 'mic',
		glow: 'blue'
	},
	{
		title: 'Full Bar Service',
		desc: 'Cold beer, stiff pours, and a full liquor store next door. We keep the glasses full till close.',
		icon: 'drink',
		glow: 'pink'
	},
	{
		title: 'Relaxed Atmosphere',
		desc: 'A true Rock Springs dive — friendly regulars, no pretense, good vibes every single night.',
		icon: 'vibe',
		glow: 'cyan'
	}
];

export const menu = {
	Beer: [
		{ name: 'Domestic Draft', price: '$4', note: 'Cold, classic, always pouring' },
		{ name: 'Craft & Import', price: '$6', note: 'Rotating local + national taps' },
		{ name: 'Bucket of 5', price: '$18', note: 'Best deal for the table' }
	],
	Cocktails: [
		{ name: 'House Old Fashioned', price: '$9', note: 'Bourbon, bitters, orange' },
		{ name: 'Neon Margarita', price: '$8', note: 'Tequila, lime, salt rim' },
		{ name: 'Whiskey Sour', price: '$8', note: 'Smooth, tart, dangerous' }
	],
	'Liquor & Shots': [
		{ name: 'Well Shots', price: '$4', note: 'Your night, your call' },
		{ name: 'Top-Shelf Pour', price: '$9', note: 'Premium whiskey & tequila' },
		{ name: 'Bottle Service', price: 'Ask', note: 'Liquor store next door' }
	]
};

export const reviews = [
	{
		name: 'Jesse M.',
		text: 'Best dive bar in Rock Springs, hands down. Bartenders actually know your name and the pool tables are always in great shape.',
		stars: 5
	},
	{
		name: 'Dana R.',
		text: 'Karaoke nights here are unreal. Such a fun, welcoming crowd — we stayed till close and didn’t want to leave.',
		stars: 5
	},
	{
		name: 'Marcus T.',
		text: 'Cheap drinks, friendly regulars, and darts. Exactly what a neighborhood bar should be. My go-to spot.',
		stars: 4
	},
	{
		name: 'Kayla S.',
		text: 'Love the late hours and the vibe. Open till 2 AM means it’s the spot when everything else in town closes.',
		stars: 5
	},
	{
		name: 'Brett W.',
		text: 'Great local atmosphere. Shot some pool, sang some karaoke, made some friends. Can’t ask for more.',
		stars: 4
	},
	{
		name: 'Tina L.',
		text: 'Friendly staff and a real community feel. The liquor store next door is super convenient too.',
		stars: 5
	}
];

export const gallery = [
	{ label: 'Neon Bar Interior', tone: 'from-neon-red/30 to-neon-purple/20', icon: 'drink' },
	{ label: 'Pool Tables', tone: 'from-neon-blue/30 to-neon-cyan/20', icon: 'pool' },
	{ label: 'Karaoke Stage', tone: 'from-neon-purple/30 to-neon-pink/20', icon: 'mic' },
	{ label: 'Drinks Close-Up', tone: 'from-neon-pink/30 to-neon-red/20', icon: 'drink' },
	{ label: 'Dart Boards', tone: 'from-neon-cyan/30 to-neon-blue/20', icon: 'darts' },
	{ label: 'Late-Night Vibes', tone: 'from-neon-red/30 to-neon-blue/20', icon: 'vibe' }
];
