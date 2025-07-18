// Dentro do arquivo app/studio/[[...index]]/page.tsx

'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  // Este componente renderiza o painel do Sanity
  return <NextStudio config={config} />
}