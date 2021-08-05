import granEspressoImg from './assets/home/desktop/image-gran-espresso.png';
import planaltoImg from './assets/home/desktop/image-planalto.png';
import piccolloImg from './assets/home/desktop/image-piccollo.png';
import dancheImg from './assets/home/desktop/image-danche.png';
import beanIcon from './assets/home/desktop/icon-coffee-bean.svg';
import giftIcon from './assets/home/desktop/icon-gift.svg';
import truckIcon from './assets/home/desktop/icon-truck.svg';
import ukIcon from './assets/about/desktop/illustration-uk.svg';
import canadaIcon from './assets/about/desktop/illustration-canada.svg';
import australiaIcon from './assets/about/desktop/illustration-australia.svg';

export const navLinks = [
	{
		text: 'Home',
		path: '/'
	},
	{
		text: 'About us',
		path: '/about'
	},
	{
		text: 'Create your plan',
		path: '/plan'
	},
]

export const collection = [
	{
		image: granEspressoImg,
		heading: 'Gran Espresso',
		description:
			'Light and flavorful blend with cocoa and black pepper for an intense experience',
	},
	{
		image: planaltoImg,
		heading: 'Planalto',
		description:
			'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
	},
	{
		image: piccolloImg,
		heading: 'Piccollo',
		description:
			'Mild and smooth blend featuring notes of toasted almond and dried cherry',
	},
	{
		image: dancheImg,
		heading: 'Danche',
		description:
			'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
	},
];

export const whyChoose = [
	{
		image: beanIcon,
		alt: 'coffee bean',
		heading: 'Best quality',
		description:
			'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
	},
	{
		image: giftIcon,
		alt: 'gift',
		heading: 'Exclusive benefits',
		description:
			'Special offers and swag when you subscribe, including 30% off your first shipment.',
	},
	{
		image: truckIcon,
		alt: 'truck',
		heading: 'Free shipping',
		description:
			'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
	},
];

export const headquarters = [
	{
		icon: ukIcon,
		location: 'United Kingdom',
		information: {
			street: '68 Ashfordby Rd',
			city: 'Alcaston',
			state: 'SY6 1YA',
			phone: '+44 1241 918425',
		},
	},
	{
		icon: canadaIcon,
		location: 'Canada',
		information: {
			street: '1529 Eglington Avenue',
			city: 'Toronto',
			state: 'Ontario M4P 1A6',
			phone: '+1 416 485 2997',
		},
	},
	{
		icon: australiaIcon,
		location: 'Australia',
		information: {
			street: '36 Swanston Street',
			city: 'Kewell',
			state: 'Victoria',
			phone: '+61 4 9928 3629',
		},
	},
];

