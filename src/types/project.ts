export interface Project {
  id: string
  title: string

  // Hero
  image: string
  colors?: string

  // General info
  featured: boolean
  tagline: string
  description: string

  // Case of study
  challenge?: string
  problem: string
  solution: string
  impact?: string

  // Design
  platforms?: string[]
  designProcess?: string[]
  userFlow?: string
  wireframes?: string[]
  mockups?: {
    title: string
    image: string
  }[]

  // Project information
  role: string[]
  technologies: string[]
  tags: string[]
  year: number

  // Resources
  figmaUrl?: string
}