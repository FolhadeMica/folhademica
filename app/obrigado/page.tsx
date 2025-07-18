'use client'
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function PaginaDeAgradecimento() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20 bg-gray-50">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Inscrição Confirmada! 🎉
        </h1>

        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          Muito obrigado por se juntar à comunidade Folha de Mica. Seu primeiro e-mail está a caminho!
        </p>

        <div className="mb-10">
          <p className="text-md text-gray-600">
            Nos acompanhe no Instagram para novas informações:
          </p>
          <a 
            href="https://www.instagram.com/folhademica" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 inline-block text-lg font-semibold text-pink-600 hover:text-pink-700 transition-colors"
          >
            @folhademica
          </a>
        </div>

        <div>
          <p className="text-md text-gray-600">
            Enquanto isso, que tal explorar alguns dos nossos artigos mais recentes?
          </p>
          <Link 
            href="/artigos" 
            className="mt-4 inline-block bg-green-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-900 transition-colors"
          >
            Ver Artigos
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}