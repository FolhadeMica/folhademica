// Conteúdo completo para: components/instagram-section.tsx
import { Instagram } from "lucide-react"
import { InstagramFeed } from "@/components/instagram-feed"

export function InstagramSection() {
  return (
    <section className="py-16 px-4 bg-[#8b6f47]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Nosso Instagram</h2>

        <InstagramFeed />

        <div className="mt-8">
          <a
            href="https://instagram.com/folhademica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-[#8b6f47] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>Seguir @folhademica</span>
          </a>
        </div>
      </div>
    </section>
  )
}