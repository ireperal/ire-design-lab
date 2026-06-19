export interface Project {
  id: string
  title: string
  image: string
  featured: boolean
  tagline: string
  description: string
  problem: string
  solution: string
  role: string[]
  technologies: string[]
  figmaUrl?: string
  tags: string[]
  year: number
}