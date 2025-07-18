import { NextResponse } from "next/server"

// Esta é uma implementação básica - você precisará configurar as credenciais do Instagram
export async function GET() {
  try {
    // Substitua por seu token de acesso do Instagram
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

    // Helper: returns mock posts (used when we can't reach Instagram).
    function mockPosts() {
      return [
        {
          id: "1",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+1",
          caption: "Descobrindo os segredos das rochas metamórficas! 🪨",
          permalink: "https://instagram.com/folhademica",
        },
        {
          id: "2",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+2",
          caption: "Análise de minerais em laboratório 🔬",
          permalink: "https://instagram.com/folhademica",
        },
        {
          id: "3",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+3",
          caption: "Trabalho de campo na Serra da Mantiqueira ⛰️",
          permalink: "https://instagram.com/folhademica",
        },
        {
          id: "4",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+4",
          caption: "Estudando a geologia do Pré-Cambriano 📚",
          permalink: "https://instagram.com/folhademica",
        },
        {
          id: "5",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+5",
          caption: "Coleta de amostras para pesquisa 🧪",
          permalink: "https://instagram.com/folhademica",
        },
        {
          id: "6",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+6",
          caption: "Microscopia de lâminas petrográficas 🔍",
          permalink: "https://instagram.com/folhademica",
        },
        {
          id: "7",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+7",
          caption: "Seminário sobre sustentabilidade mineral 🌱",
          permalink: "https://instagram.com/folhademica",
        },
        {
          id: "8",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+8",
          caption: "Nova edição da Folha de Mica disponível! 📰",
          permalink: "https://instagram.com/folhademica",
        },
      ]
    }

    // --------------------------------------------------------------------
    // 1) Se não houver token, retornamos os MOCKS (status 200).
    if (!accessToken) {
      return NextResponse.json({ posts: mockPosts() }, { status: 200 })
    }

    // 2) Tenta buscar no Instagram. Se falhar, caí no catch e devolve mock.

    // Busca as postagens do Instagram usando a Graph API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`,
    )

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram posts")
    }

    const data = await response.json()

    // Retorna apenas as primeiras 8 postagens
    return NextResponse.json({
      posts: data.data?.slice(0, 8) || [],
    })
  } catch (error) {
    console.error("Instagram API error:", error)

    // Retorna dados mock para demonstração
    return NextResponse.json({
      posts: [
        {
          id: "1",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+1",
          caption: "Descobrindo os segredos das rochas metamórficas! 🪨",
          permalink: "https://instagram.com/p/example1",
        },
        {
          id: "2",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+2",
          caption: "Análise de minerais em laboratório 🔬",
          permalink: "https://instagram.com/p/example2",
        },
        {
          id: "3",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+3",
          caption: "Trabalho de campo na Serra da Mantiqueira ⛰️",
          permalink: "https://instagram.com/p/example3",
        },
        {
          id: "4",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+4",
          caption: "Estudando a geologia do Pré-Cambriano 📚",
          permalink: "https://instagram.com/p/example4",
        },
        {
          id: "5",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+5",
          caption: "Coleta de amostras para pesquisa 🧪",
          permalink: "https://instagram.com/p/example5",
        },
        {
          id: "6",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+6",
          caption: "Microscopia de lâminas petrográficas 🔍",
          permalink: "https://instagram.com/p/example6",
        },
        {
          id: "7",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+7",
          caption: "Seminário sobre sustentabilidade mineral 🌱",
          permalink: "https://instagram.com/p/example7",
        },
        {
          id: "8",
          media_url: "/placeholder.svg?height=300&width=300&text=Post+8",
          caption: "Nova edição da Folha de Mica disponível! 📰",
          permalink: "https://instagram.com/p/example8",
        },
      ],
    })
  }
}
