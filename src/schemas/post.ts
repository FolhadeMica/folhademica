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
    }, // <-- Vírgula separando os objetos
    {
      name: 'subtitle',
      title: 'Subtítulo / Descrição Curta',
      type: 'text',
    }, // <-- Vírgula separando os objetos
    {
      name: 'slug',
      title: 'Slug (Link)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }, // <-- Vírgula separando os objetos
    {
      name: 'mainImage',
      title: 'Imagem de Capa (GRANDE, para a página do artigo)',
      type: 'image',
      options: { hotspot: true },
    }, // <-- Vírgula separando os objetos
    {
      name: 'cardImage',
      title: 'Imagem do Card (PEQUENA, para a lista de artigos)',
      type: 'image',
      options: { hotspot: true },
    }, // <-- Vírgula separando os objetos
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
    }, // <-- Vírgula separando os objetos
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
    }, // <-- Vírgula separando os objetos
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'date',
    }, // <-- Vírgula separando os objetos
    {
      name: 'readingTime',
      title: 'Tempo de Leitura (em min)',
      type: 'number',
    }, // <-- Vírgula separando os objetos
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ], // A lista de campos termina aqui
}