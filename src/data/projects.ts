import type { Project } from '../types/project.ts'

import mapawCover from '../assets/images/projects/mapaw/cover.webp'
import colorbuddyCover from '../assets/images/projects/colorbuddy/cover.webp'
import bloompalCover from '../assets/images/projects/bloompal/cover.webp'

export const projects: Project[] = [
  {
    id: 'mapaw',
    title: 'Mapaw',
    image: mapawCover,
    featured: true,
    tagline: 'Explora el mundo junto a tu mascota.',
    description:
      'Aplicación móvil que ayuda a las personas con mascotas a descubrir lugares pet-friendly, guardar favoritos y compartir experiencias con otros usuarios.',
    technologies: ['Figma'],
    figmaUrl: '',
    tags: [
      'UX Research',
      'UI Design',
      'Mobile App',
      'Geolocation',
      'Community',
      'Pets',
    ],
    year: 2026
  },
  {
    id: 'colorbuddy',
    title: 'ColorBuddy',
    image: colorbuddyCover,
    featured: false,
    tagline: 'Combina colores con confianza.',
    description:
      'Aplicación accesible diseñada para ayudar a personas con daltonismo a crear combinaciones de colores y prendas de forma sencilla y segura.',
    technologies: ['Figma'],
    figmaUrl: '',
    tags: [
      'Accessibility',
      'UX Research',
      'UI Design',
      'Inclusive Design',
      'Fashion',
    ],
    year: 2026
  },
  {
    id: 'bloompal',
    title: 'BloomPal',
    image: bloompalCover,
    featured: false,
    tagline: 'Cuida tus plantas sin olvidarte de ellas.',
    description:
      'Aplicación para gestionar el cuidado de plantas mediante recordatorios, seguimiento personalizado y consejos para mejorar su bienestar.',
    technologies: ['Figma'],
    figmaUrl: '',
    tags: [
      'UX Design',
      'Mobile App',
      'Habit Tracking',
      'Productivity',
      'Plants',
    ],
    year: 2026
  },
]