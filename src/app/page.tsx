import { Header } from "@/components/header/Header";

import Consumidores from "../../public/assets/images/verde-icon.png";
import Balanca from "../../public/assets/images/verde-icon.png";
import Energia from "../../public/assets/images/sustainable-energy.png";
import { Inter, Roboto } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { CardServico } from "@/components/CardServico/CardServico";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function PageHome() {
  return (
    <div className="bg-gradient-to-br from-green-100 via-green-300 to-green-700 min-h-screen text-white">
      <Header />
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-6">
        {/* Texto principal */}
        <div className="self-center order-2 md:order-1">
          <h1 className={`${inter.className} text-5xl sm:text-6xl font-bold mb-8 leading-tight`}>
            Uma nova maneira de economizar{" "}
            <span className="text-green-900">energia</span>
          </h1>
          <p className={`${roboto.className} text-lg text-gray-800 mb-6`}>
            Descubra como gerenciar suas fontes de energia de maneira eficiente e sustentável com a tecnologia Via Verde.
          </p>
          <Link
            href="/login"
            className="botao bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            FAZER LOGIN
          </Link>
        </div>

        {/* Imagem principal */}
        <div className="order-1 md:order-2">
          <div
            className="imagem_main w-full h-[350px] sm:h-[477px] md:h-[554px] bg-center bg-cover rounded-tl-[140px] rounded-tr-[20px] rounded-br-[140px] rounded-bl-[20px] shadow-lg"
            style={{ backgroundImage: `url("../../assets/images/imagem-main.png")` }}
          />
        </div>
      </main>

      {/* Seção de serviços */}
      <section
        className="bg-gradient-to-br from-green-200 to-green-800 py-20 text-center"
        id="sobre-serviço"
        aria-label="Sobre o Serviço"
      >
        <div className="container mx-auto flex flex-col gap-16 px-6">
          <div>
            <h2
              className={`${inter.className} text-4xl sm:text-5xl font-bold mb-5`}
            >
              Por que escolher o <span className="text-green-400">Via Verde</span>?
            </h2>
            <p
              className={`${roboto.className} text-lg text-gray-200 w-full md:w-2/3 mx-auto`}
            >
              Nossa plataforma transforma a maneira como você gerencia energia, trazendo simplicidade, eficiência e sustentabilidade para sua empresa.
            </p>
          </div>

          {/* Cards de serviços */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CardServico
              imageSrc={Balanca}
              imageAlt="Realocação"
              title="Realocação Inteligente"
              description="Distribua energia de forma eficiente, minimizando desperdícios e maximizando o desempenho."
            />
            <CardServico
              imageSrc={Energia}
              imageAlt="energia"
              title="Adição de Novas Fontes"
              description="Adicione novas fontes de energia em segundos e adapte sua infraestrutura facilmente."
            />
            <CardServico
              imageSrc={Consumidores}
              imageAlt="consumidores"
              title="Gerenciamento de Consumidores"
              description="Organize consumidores com base em regiões e fontes de energia, com total controle."
            />
          </div>

          {/* Botão de ação */}
          <Link
            href="/login"
            className="botao bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition mx-auto"
          >
            COMEÇAR AGORA
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
