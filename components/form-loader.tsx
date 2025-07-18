// Conteúdo para: components/form-loader.tsx
'use client' // <-- A linha mais importante! Marca como Componente de Cliente.

import dynamic from 'next/dynamic'

// A lógica que dava erro agora vive aqui, no lugar certo.
const BrevoFormComponent = dynamic(
  () => import('@/components/brevo-form').then(mod => mod.BrevoForm),
  { ssr: false }
)

export function FormLoader() {
  return <BrevoFormComponent />
}