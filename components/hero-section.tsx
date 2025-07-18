import { FormLoader } from './form-loader'

export function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/mountain-landscape.jpg')"
      }}
    >
      <div className="text-center max-w-4xl px-4">
        <h2 className="text-4xl md:text-5xl mb-6 font-extrabold text-amber-50">Folha de Mica</h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Ei, você, que ama a ciência! Quer descobrir as clivagens mais profundas do nosso planeta?
          Então, é só clicar no botão de assinar abaixo, que a Folha de Mica chega quinzenalmente,
          às sextas-feiras, no seu e-mail!
        </p>

        {/* Div que contém o seu formulário original restaurado */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <FormLoader />
        </div>
        
      </div>
    </section>
  )
}