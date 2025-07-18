// Conteúdo FINAL e ORIGINAL para: components/footer.tsx
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[rgba(224,226,224,1)] py-6 px-11 rounded">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex mb-4 md:mb-0 w-6/12 h-20 items-end">
          <Image
            src="/images/folha-de-mica-3.png"
            alt="Folha de Mica"
            width={200}
            height={60}
            className="h-[90%] w-auto"
          />
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-black text-justify">
            © 2025 Folha de Mica. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Instituto de Geociências - Universidade de São Paulo
          </p>
        </div>
      </div>
    </footer>
  )
}