// Dentro do arquivo sanity.config.ts

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import post from './src/schemas/post' // A importação que você já tinha feito (correto)

// Pega as variáveis de ambiente que já configuramos
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio', // Define a URL do studio
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    // AQUI ESTÁ A CORREÇÃO:
    types: [post], 
  },
})