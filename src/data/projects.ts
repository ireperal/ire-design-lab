import type { Project } from '../types/project.ts'

import mapawCover from '../assets/images/projects/mapaw/cover.webp'
import colorbuddyCover from '../assets/images/projects/colorbuddy/cover.webp'
import bloompalCover from '../assets/images/projects/bloompal/cover.webp'

import mapawColors from '../assets/images/projects/mapaw/colors.png'
import mapawMockup1 from '../assets/images/projects/mapaw/mockups/mockup-1.webp'
import mapawMockup2 from '../assets/images/projects/mapaw/mockups/mockup-2.webp'
import mapawMockup3 from '../assets/images/projects/mapaw/mockups/mockup-3.webp'
import mapawMockup4 from '../assets/images/projects/mapaw/mockups/mockup-4.webp'

import colorbuddyColors from '../assets/images/projects/colorbuddy/colors.png'

import bloompalColors from '../assets/images/projects/bloompal/colors.png'

export const projects: Project[] = [
  {
    id: 'mapaw',
    title: 'Mapaw',
    image: mapawCover,
    colors: mapawColors,
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
    featured: true,
    tagline: 'Explora el mundo junto a tu mascota.',
    description:
      'Aplicación móvil que ayuda a las personas con mascotas a descubrir lugares pet-friendly, guardar favoritos y compartir experiencias con otros usuarios.',
    problem:
      'Las personas con mascotas suelen tener dificultades para encontrar lugares realmente pet-friendly y conocer experiencias fiables de otros usuarios antes de visitarlos.',
    solution:
      'Mapaw centraliza información sobre espacios pet-friendly, permitiendo descubrir nuevos lugares, guardar favoritos y compartir reseñas con la comunidad.',
    role: [
      'UX Research',
      'User Flows',
      'Wireframing',
      'UI Design',
      'Prototyping',
    ],
    figmaUrl: '',
    technologies: ['Figma'],
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