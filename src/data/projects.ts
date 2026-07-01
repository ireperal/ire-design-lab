import type { Project } from '../types/project.ts'

// Mapaw project images
import mapawCover from '../assets/images/projects/mapaw/cover.webp'
import mapawColors from '../assets/images/projects/mapaw/colors.png'
import mapawDesktopImage from '../assets/images/projects/mapaw/desktop.webp'
import mapawMobileImage from '../assets/images/projects/mapaw/mobile.webp'
import mapawMockup1 from '../assets/images/projects/mapaw/mockups/mockup-1.webp'
import mapawMockup2 from '../assets/images/projects/mapaw/mockups/mockup-2.webp'
import mapawMockup3 from '../assets/images/projects/mapaw/mockups/mockup-3.webp'
import mapawMockup4 from '../assets/images/projects/mapaw/mockups/mockup-4.webp'


// ColorBuddy project images
import colorbuddyCover from '../assets/images/projects/colorbuddy/cover.webp'
import colorbuddyColors from '../assets/images/projects/colorbuddy/colors.png'


// BloomPal project images
import bloompalCover from '../assets/images/projects/bloompal/cover.webp'
import bloompalColors from '../assets/images/projects/bloompal/colors.png'

export const projects: Project[] = [
    {
    id: 'mapaw',
    title: 'Mapaw',
    image: mapawCover,
    colors: mapawColors,
    desktopImage: mapawDesktopImage,
    mobileImage: mapawMobileImage,

    featured: true,

    tagline: 'Explora el mundo junto a tu mascota.',

    description:
      'Aplicación diseñada para descubrir lugares pet-friendly, guardar favoritos y compartir experiencias con otros usuarios.',

    challenge:
      'Diseñar una experiencia intuitiva que ayudara a los dueños de mascotas a encontrar espacios adaptados a sus necesidades.',

    problem:
      'Hoy en día, el término "pet-friendly" se utiliza de forma muy ambigua. Muchas personas con mascotas planifican una salida confiando en información incompleta y terminan encontrándose con restricciones inesperadas, como locales que solo aceptan animales en terraza o limitaciones según el tamaño de la mascota. A esto se suma la falta de una fuente de información centralizada y la desconfianza que generan las reseñas desactualizadas. Como consecuencia, organizar un plan con una mascota puede convertirse en una experiencia frustrante, haciendo que muchos tutores descarten salir por miedo a llevarse una mala experiencia.',

    solution:
      'Mapaw nace para devolver la confianza y la espontaneidad a las salidas con nuestras mascotas. La aplicación reúne en un único lugar toda la información necesaria para descubrir espacios realmente pet-friendly, combinando geolocalización, filtros inteligentes y contenido generado por la comunidad. Gracias a ello, los usuarios pueden encontrar lugares adaptados a sus necesidades, consultar experiencias reales de otros tutores y guardar sus sitios favoritos para futuras visitas.',

    impact:
      'La solución facilita la exploración de nuevos lugares y fomenta una comunidad basada en experiencias reales.',

    platforms: [
      'Desktop',
      'Mobile',
    ],

    designProcess: [
      'UX Research',
      'User Flows',
      'Wireframing',
      'UI Design',
      'Prototyping',
    ],

    mockups: [
      {
        title: 'Mapa principal',
        image: mapawMockup1,
      },
      {
        title: 'Detalle de reseña',
        image: mapawMockup2,
      },
      {
        title: 'Lista de favoritos',
        image: mapawMockup3,
      },
      {
        title: 'Crear comentario',
        image: mapawMockup4,
      },
    ],

    features: [
  {
    icon: '🗺️',
    title: 'Mapa interactivo',
    description:
      'Descubre cafeterías, restaurantes, hoteles, parques y tiendas pet-friendly cerca de ti mediante un mapa interactivo con filtros avanzados.',
  },
  {
    icon: '⭐',
    title: 'Reseñas reales',
    description:
      'Consulta experiencias compartidas por otros usuarios, incluyendo fotografías, comentarios y valoraciones actualizadas.',
  },
  {
    icon: '❤️',
    title: 'Favoritos',
    description:
      'Guarda tus lugares preferidos para planificar futuras salidas y acceder rápidamente a ellos cuando los necesites.',
  },
],

    role: [
      'UX Research',
      'User Flows',
      'Wireframing',
      'UI Design',
      'Prototyping',
    ],

    technologies: [
      'Figma',
    ],

    tags: [
      'UX Research',
      'UI Design',
      'Mobile App',
      'Geolocation',
      'Community',
      'Pets',
    ],

    year: 2026,
  },
  {
    id: 'colorbuddy',
    title: 'ColorBuddy',
    image: colorbuddyCover,
    colors: colorbuddyColors,
    featured: false,
    tagline: 'Combina colores con confianza.',
    description:
      'Aplicación accesible diseñada para ayudar a personas con daltonismo a crear combinaciones de colores y prendas de forma sencilla y segura.',
    problem:
      'Las personas con daltonismo pueden experimentar dificultades para identificar colores y crear combinaciones de ropa con confianza en su día a día.',
    solution:
      'ColorBuddy proporciona recomendaciones visuales accesibles y herramientas de apoyo para facilitar la elección de colores y prendas.',
    role: [
      'UX Research',
      'Accessibility Research',
      'Wireframing',
      'UI Design',
      'Prototyping',
    ],
    technologies: ['Figma'],
    figmaUrl: '',
    tags: [
      'Accessibility',
      'UX Research',
      'UI Design',
      'Inclusive Design',
      'Fashion',
    ],
    year: 2026,
  },
  {
    id: 'bloompal',
    title: 'BloomPal',
    image: bloompalCover,
    colors: bloompalColors,
    featured: false,
    tagline: 'Cuida tus plantas sin olvidarte de ellas.',
    description:
      'Aplicación para gestionar el cuidado de plantas mediante recordatorios, seguimiento personalizado y consejos para mejorar su bienestar.',
    problem:
      'Muchas personas olvidan cuándo regar sus plantas o desconocen los cuidados específicos que necesita cada especie.',
    solution:
      'BloomPal ayuda a organizar el cuidado de las plantas mediante recordatorios personalizados, seguimiento y consejos adaptados a cada planta.',
    role: [
        'UX Research',
        'User Flows',
        'Wireframing',
        'UI Design',
        'Prototyping',
      ],
    technologies: ['Figma'],
    figmaUrl: '',
    tags: [
      'UX Design',
      'Mobile App',
      'Habit Tracking',
      'Productivity',
      'Plants',
    ],
    year: 2026,
  },
]