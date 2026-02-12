export const presentaciones = [
	{
		slug: '250-ml',
		size: '250 ml',
		litros: 0.25,
		use: 'Uso diario',
		highlight: 'FORMATO PRÁCTICO',
		image: '250.jpeg',
		title: 'Aceite de soja Muccino 250 ml',
		description:
			'Presentación práctica para uso diario. Ideal para hogares pequeños o para tener siempre a mano en la cocina.',
		bullets: [
			'Práctico y fácil de manipular',
			'Ideal para consumo diario',
			'Excelente para compras rápidas',
		],
		idealFor: ['Hogar', 'Uso cotidiano', 'Cocina diaria'],
	},
	{
		slug: '500-ml',
		size: '500 ml',
		litros: 0.5,
		use: 'Uso diario',
		highlight: 'RENDIMIENTO EQUILIBRADO',
		image: '500.jpeg',
		title: 'Aceite de soja Muccino 500 ml',
		description:
			'Un formato equilibrado para consumo frecuente. Cómodo, rendidor y fácil de almacenar.',
		bullets: [
			'Buena relación volumen/consumo',
			'Formato cómodo',
			'Ideal para compras semanales',
		],
		idealFor: ['Hogar', 'Despensas', 'Cocina diaria'],
	},
	{
		slug: '900-ml',
		size: '900 ml',
		litros: 0.9,
		use: 'Familia',
		highlight: '≈ 10–12 FRITURAS',
		image: '900.jpeg',
		title: 'Aceite de soja Muccino 900 ml',
		description:
			'Formato familiar para quienes cocinan seguido. Gran equilibrio entre rendimiento y practicidad.',
		bullets: [
			'Formato familiar',
			'Muy buena rotación',
			'Ideal para consumo frecuente',
		],
		idealFor: ['Hogar', 'Familia', 'Minimarkets'],
	},
	{
		slug: '1-5-l',
		size: '1.5 L',
		litros: 1.5,
		use: 'Familia',
		highlight: 'FORMATO AHORRO',
		image: null,
		title: 'Aceite de soja Muccino 1.5 L',
		description:
			'Pensado para familias que buscan mayor rendimiento. Formato ahorro para consumo constante.',
		bullets: [
			'Más rendimiento por compra',
			'Ideal para cocinar seguido',
			'Práctico para la alacena',
		],
		idealFor: ['Hogar', 'Familia', 'Consumo frecuente'],
	},
	{
		slug: '2-l',
		size: '2 L',
		litros: 2,
		use: 'Familia',
		highlight: '≈ 22 FRITURAS',
		image: '2L.jpeg',
		title: 'Aceite de soja Muccino 2 L',
		description:
			'El tamaño ideal para familias y consumo frecuente. Rendidor y muy elegido por su equilibrio entre volumen y uso.',
		bullets: [
			'Excelente equilibrio volumen/rendimiento',
			'Ideal para consumo frecuente',
			'Formato muy pedido',
		],
		idealFor: ['Hogar', 'Familia', 'Consumo frecuente'],
		featured: true,
	},
	{
		slug: '3-l',
		size: '3 L',
		litros: 3,
		use: 'Mayor volumen',
		highlight: 'USO FRECUENTE',
		image: '3L.jpeg',
		title: 'Aceite de soja Muccino 3 L',
		description:
			'Formato de mayor volumen para quienes cocinan a menudo o necesitan stock. Buena opción para negocios con rotación.',
		bullets: [
			'Mayor volumen',
			'Ideal para stock',
			'Excelente para rotación en comercio',
		],
		idealFor: ['Despensas', 'Minimarkets', 'Cocinas activas'],
	},
	{
		slug: '4-5-l',
		size: '4.5 L',
		litros: 4.5,
		use: 'Gastronomía',
		highlight: 'USO INTENSIVO',
		image: '4.5L.jpeg',
		title: 'Aceite de soja Muccino 4.5 L',
		description:
			'Pensado para uso intensivo y alto consumo. Ideal para gastronomía y compras por volumen.',
		bullets: [
			'Alto rendimiento',
			'Ideal para uso intensivo',
			'Muy buena opción por volumen',
		],
		idealFor: ['Gastronomía', 'Cocinas comerciales', 'Compra por volumen'],
	},
	{
		slug: '5-l',
		size: '5 L',
		litros: 5,
		use: 'Gastronomía',
		highlight: 'ALTO RENDIMIENTO',
		image: null,
		title: 'Aceite de soja Muccino 5 L',
		description:
			'Máximo rendimiento para quienes compran por volumen. Ideal para gastronomía y consumo intensivo.',
		bullets: [
			'Máximo volumen',
			'Excelente para compras por volumen',
			'Ideal para uso intensivo',
		],
		idealFor: ['Gastronomía', 'Mayoristas', 'Cocinas comerciales'],
	},
] as const;

export type Presentacion = (typeof presentaciones)[number];
