import type { ImageMetadata } from 'astro';

import sopaParaguayaImg from '../assets/img/recetas/sopa-paraguaya.png';
import chipaGuazuImg from '../assets/img/recetas/chipa-guazu.png';
import milanesasImg from '../assets/img/recetas/milanesas.png';
import mbejuImg from '../assets/img/recetas/mbeju.png';

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  category: 'Salados' | 'Dulces' | 'Fritos' | 'Tradicional';
  prepTime: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  servings: string;
  image: ImageMetadata;
  ingredients: {
    section?: string;
    items: string[];
  }[];
  instructions: string[];
}

export const recipes: Recipe[] = [
  {
    slug: 'sopa-paraguaya-tradicional',
    title: 'Sopa Paraguaya Tradicional',
    description: 'El único pastel salado del mundo con consistencia de sopa sólida. Suave, esponjosa y con el inconfundible sabor del queso Paraguay y la cebolla rehogada.',
    category: 'Tradicional',
    prepTime: '60 min',
    difficulty: 'Medio',
    servings: '8-10 porciones',
    image: sopaParaguayaImg,
    ingredients: [
      {
        section: 'Para la preparación',
        items: [
          '500g de harina de maíz (tipo paraguaya)',
          '4 cebollas medianas cortadas en juliana fina',
          '150ml de Aceite de Soja Muccino',
          '400g de queso Paraguay (o queso fresco de campo)',
          '6 huevos enteros',
          '500ml de leche entera o leche agria',
          '1 cucharada de sal gruesa'
        ]
      }
    ],
    instructions: [
      'Pelar y cortar las cebollas en juliana muy fina. Rehogar en una sartén con el Aceite de Soja Muccino y una pizca de sal a fuego bajo hasta que estén tiernas y transparentes. Dejar enfriar.',
      'En un recipiente grande, batir los huevos uno a uno hasta que queden espumosos. Incorporar la cebolla rehogada templada junto con el aceite de cocción.',
      'Desmenuzar el queso Paraguay con las manos e incorporarlo a la mezcla de huevos and cebolla.',
      'Disolver la sal en la leche entera tibia.',
      'Ir agregando de forma alternada la harina de maíz y la leche salada a la preparación anterior, revolviendo suavemente con una espátula de madera hasta obtener una pasta homogénea semilíquida (no debe quedar seca).',
      'Precalentar el horno a 200°C (fuerte). Aceitar una fuente para horno alta (preferentemente de hierro o barro) con un chorrito de Aceite Muccino.',
      'Verter la preparación en la fuente y hornear por aproximadamente 35 a 45 minutos, hasta que la superficie esté bien dorada y al introducir un palillo, este salga limpio.',
      'Dejar entibiar un poco antes de cortar en cuadrados y servir caliente.'
    ]
  },
  {
    slug: 'chipa-guazu-esponjoso',
    title: 'Chipa Guasú Esponjoso',
    description: 'Una delicia tradicional paraguaya a base de choclo fresco. Húmedo, cremoso y gratinado con abundante queso paraguayo.',
    category: 'Tradicional',
    prepTime: '50 min',
    difficulty: 'Fácil',
    servings: '8 porciones',
    image: chipaGuazuImg,
    ingredients: [
      {
        section: 'Ingredientes principales',
        items: [
          '1 kg de choclo desgranado fresco',
          '3 cebollas medianas picadas finas',
          '100ml de Aceite de Soja Muccino',
          '350g de queso Paraguay (o mozzarella)',
          '5 huevos enteros',
          '150ml de leche entera',
          '1 cucharadita de sal fina'
        ]
      }
    ],
    instructions: [
      'Picar las cebollas bien finas y rehogar en una sartén grande con el Aceite de Soja Muccino hasta que estén tiernas. Retirar del fuego y dejar enfriar un poco.',
      'Licuar o procesar el choclo desgranado junto con la leche y los huevos enteros. Si preferís sentir la textura del choclo, procesalo menos tiempo.',
      'En un bol grande, mezclar el choclo procesado con las cebollas rehogadas (incluyendo el aceite de la sartén).',
      'Desmenuzar el queso Paraguay con los dedos e integrarlo a la preparación. Condimentar con sal a gusto.',
      'Engrasar una fuente rectangular para horno con una fina capa de Aceite Muccino.',
      'Verter la mezcla en la fuente y llevar a horno precalentado a 180°C durante 40 minutos o hasta que se dore la superficie y la textura esté firme al tacto.',
      'Cortar en porciones y disfrutar templado o frío.'
    ]
  },
  {
    slug: 'milanesas-crujientes-de-carne',
    title: 'Milanesas de Carne Súper Crujientes',
    description: 'El clásico de todos los hogares paraguayos. Te enseñamos el secreto para lograr un rebozado perfecto, seco y crujiente usando Aceite Muccino.',
    category: 'Fritos',
    prepTime: '35 min',
    difficulty: 'Fácil',
    servings: '4 personas',
    image: milanesasImg,
    ingredients: [
      {
        section: 'Para la carne',
        items: [
          '800g de carne vacuna tierna (bola de lomo, nalga o peceto)',
          '3 dientes de ajo picados bien finos',
          '2 cucharadas de perejil fresco picado',
          'Sal y pimienta negra a gusto'
        ]
      },
      {
        section: 'Para el rebozado',
        items: [
          '3 huevos enteros batidos',
          '1 cucharada de mostaza clásica',
          'Cantidad necesaria de pan rallado',
          'Aceite de Soja Muccino para freír (abundante)'
        ]
      }
    ],
    instructions: [
      'Limpiar los filetes de carne retirando excesos de grasa. Golpear ligeramente con una maza de cocina para emparejar el espesor de la carne.',
      'Condimentar la carne con sal, pimienta, el ajo picado y el perejil. Dejar macerar en la heladera al menos 20 minutos para concentrar sabores.',
      'En un bol, batir los huevos junto con la mostaza y una pizca de sal.',
      'Pasar cada filete primero por el pan rallado (una capa fina), luego sumergirlo en el huevo batido asegurando que se moje por completo, y finalmente pasarlo otra vez por pan rallado presionando bien con los dedos para que se adhiera.',
      'Calentar abundante Aceite de Soja Muccino en una sartén profunda a fuego medio-alto (175°C aproximadamente). La milanesa debe flotar levemente en el aceite.',
      'Freír las milanesas de a tandas de a dos para evitar que baje la temperatura del aceite. Cocinar de 2 a 3 minutos por lado, hasta obtener un color dorado parejo.',
      'Retirar con espumadera y escurrir sobre papel absorbente para asegurar que queden crujientes y secas.',
      'Servir calientes acompañadas con limón, puré o ensalada fresca.'
    ]
  },
  {
    slug: 'mbeju-tradicional-con-queso',
    title: 'Mbeju Tradicional Mestizo',
    description: 'Torta delgada de almidón y queso, súper crujiente por fuera y tierna por dentro. Una opción rápida e increíble para acompañar el cocido de la tarde.',
    category: 'Salados',
    prepTime: '25 min',
    difficulty: 'Medio',
    servings: '4 porciones',
    image: mbejuImg,
    ingredients: [
      {
        section: 'Masa de almidón',
        items: [
          '500g de almidón de mandioca fino',
          '100g de harina de maíz',
          '100ml de Aceite de Soja Muccino (o grasa de cerdo)',
          '300g de queso Paraguay curado desmenuzado',
          '1 cucharadita de sal fina',
          'Cantidad necesaria de leche tibia (aproximadamente 50-80ml)'
        ]
      }
    ],
    instructions: [
      'En un bol amplio colocar el almidón de mandioca, la harina de maíz y la sal. Mezclar bien.',
      'Agregar el Aceite de Soja Muccino (o grasa) e integrar con la punta de los dedos frotando hasta lograr una textura arenosa.',
      'Incorporar el queso Paraguay desmenuzado y continuar mezclando con las manos.',
      'Agregar la leche tibia en chorritos muy pequeños, frotando constantemente la preparación. El objetivo es conseguir un "arenado húmedo", suelto y sin grumos grandes. No se debe amasar ni formar un bollo sólido.',
      'Calentar una sartén mediana antiadherente a fuego medio y untar apenas con unas gotas de Aceite Muccino.',
      'Verter una porción del arenado cubriendo el fondo de la sartén con un espesor de aproximadamente 1 cm. Emparejar suavemente los bordes con una cuchara, presionando muy levemente para que se unan, pero sin aplastar el centro.',
      'Cocinar unos 2-3 minutos de un lado a fuego bajo-medio hasta que notes que la base está dorada y se despega. Dar la vuelta con la ayuda de un plato o tapa y dorar del otro lado por 2 minutos más.',
      'Servir bien caliente con cocido quemado.'
    ]
  }
];
