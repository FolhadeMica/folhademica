'use client'; 
// components/footer.tsx



import Link from 'next/link'; // Importe Link se usar no Footer
import Image from 'next/image'; // Importe Image para otimizar logos

export function Footer() {
  return (
    <footer className="bg-[#7A8471] text-white py-8 px-4 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Seu logo do footer */}
          {/* Ajuste o src da imagem para o caminho correto dentro de /public */}
          <Image src="/images/folha-de-mica-3.png" alt="Folha De Mica Logo" width={200} height={60} className="h-[60px] w-auto mb-4" /> {/* Ajuste o src e o tamanho conforme necessário */}
          <p>&copy; {new Date().getFullYear()} Folha de Mica. Todos os direitos reservados.</p>
          <p>Instituto de Geociências - Universidade de São Paulo</p>
        </div>
      </div>
    </footer>
  );
}