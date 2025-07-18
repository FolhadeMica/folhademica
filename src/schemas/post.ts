// Conteúdo COMPLETO e CORRETO para: src/schemas/post.ts

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [ // A lista de campos começa aqui
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtítulo / Descrição Curta',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug (Link)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Imagem de Capa (GRANDE, para a página do artigo)',
      type: 'image',
      options: { hotspot: true },
      fields: [ // Adiciona campos de descrição para a imagem de capa
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (para acessibilidade)',
          description: 'Descreve a imagem para pessoas com deficiência visual e para SEO.',
          options: {
            isHighlighted: true // Isso torna este campo mais visível no editor
          }
        }
      ]
    },
    {
      name: 'cardImage',
      title: 'Imagem do Card (PEQUENA, para a lista de artigos)',
      type: 'image',
      options: { hotspot: true },
      fields: [ // Adiciona campos de descrição para a imagem do card
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (para acessibilidade)',
          description: 'Descreve a imagem para pessoas com deficiência visual e para SEO.',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      // Você pode adicionar um `options` aqui para um dropdown de categorias predefinidas
      // options: {
      //   list: [
      //     { title: 'Tecnologia', value: 'tecnologia' },
      //     { title: 'Notícias', value: 'noticias' },
      //     { title: 'Tutorial', value: 'tutorial' }
      //   ]
      // }
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
      // Ou um 'reference' para um documento de 'author' se você tiver um
      // type: 'reference',
      // to: [{ type: 'author' }]
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Hoje'
      },
    },
    {
      name: 'readingTime',
      title: 'Tempo de Leitura (em min)',
      type: 'number',
      description: 'Tempo estimado para a leitura do artigo em minutos.',
      validation: (Rule: any) => Rule.min(1).max(60).integer(), // Exemplo de validação
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [ // *** DEFINIÇÕES PARA ESTILOS DE PARÁGRAFOS E TÍTULOS ***
            { title: 'Normal', value: 'normal' }, // Para parágrafos
            { title: 'Título 1', value: 'h1' }, // H1
            { title: 'Título 2', value: 'h2' }, // H2
            { title: 'Título 3', value: 'h3' }, // H3
            { title: 'Título 4', value: 'h4' }, // H4
            { title: 'Citação', value: 'blockquote' } // Bloco de citação
          ],
          lists: [ // *** DEFINIÇÕES PARA LISTAS (BULLETED E NUMERADAS) ***
            { title: 'Marcadores', value: 'bullet' }, // Lista de pontos
            { title: 'Numérica', value: 'number' } // Lista numerada
          ],
          marks: { // *** DEFINIÇÕES PARA MARCAS (DECORADORES E ANOTAÇÕES) ***
            decorators: [ // Para negrito, itálico, sublinhado, código inline
              { title: 'Negrito', value: 'strong' },
              { title: 'Itálico', value: 'em' },
              { title: 'Sublinhado', value: 'underline' },
              { title: 'Código', value: 'code' } // Para código inline
            ],
            annotations: [ // Para links e outros dados complexos (ex: referências a outros documentos)
              {
                name: 'link',
                type: 'object',
                title: 'Link URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule: any) => Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] })
                  },
                  {
                    title: 'Abrir em nova aba?',
                    name: 'blank',
                    type: 'boolean',
                    initialValue: true // Sugere que links externos abram em nova aba
                  }
                ]
              }
              // Você pode adicionar anotações para referenciar outros documentos aqui, por exemplo:
              // {
              //   name: 'internalLink',
              //   type: 'object',
              //   title: 'Link Interno',
              //   fields: [
              //     {
              //       name: 'reference',
              //       type: 'reference',
              //       to: [{ type: 'post' }, { type: 'page' }]
              //     }
              //   ]
              // }
            ]
          }
        },
        // *** SE VOCÊ QUER PERMITIR IMAGENS INLINE DENTRO DO CONTEÚDO DE TEXTO ***
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo (para acessibilidade)',
              description: 'Descreve a imagem para pessoas com deficiência visual e para SEO.',
              options: {
                isHighlighted: true
              }
            }
          ]
        },
        // *** SE VOCÊ TIVER OUTROS TIPOS DE COMPONENTES CUSTOMIZADOS NO CONTEÚDO (EX: BLOCOS DE CÓDIGO) ***
        // Exemplo: Se você tem um esquema 'code.ts' definido
        // { type: 'code' }
      ],
    },
  ],
}