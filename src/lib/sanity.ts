// Este é o código para o arquivo src/lib/sanity.ts

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = '2023-05-03' // Use uma data recente

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` se você quiser sempre os dados mais recentes
})

// Helper para gerar URLs de imagens do Sanity
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => {
  return builder.image(source)
}