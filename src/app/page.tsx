import Image from "next/image";

import logoFooter from "../../../public/assets/images/verde-icon.png";
import githubIcon from "../../../public/assets/svg/github-icon-footer.svg";

import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-green-800 to-green-900 text-white">
            <div className="pt-10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen-2xl mx-auto px-6">
                <div>
                    <Image src={logoFooter} alt="Logo Via Verde" className="mb-5" />
                    <p className={`${roboto.className} text-sm text-gray-300`}>
                        Construindo um futuro mais sustentável com soluções inteligentes para gestão de energia.
                    </p>
                </div>
                <div>
                    <h3
                        className={`${inter.className} text-lg font-semibold mb-4`}
                    >
                        Contato
                    </h3>
                    <ul>
                        <li className={`${roboto.className} text-sm mb-2`}>
                            Telefone: <span className="text-gray-300">+55 11 99999-99999</span>
                        </li>
                        <li className={`${roboto.className} text-sm mb-2`}>
                            Email: <span className="text-gray-300">contato@viaverde.com</span>
                        </li>
                        <li className={`${roboto.className} text-sm`}>
                            Endereço: <br />
                            <span className="text-gray-300">
                                Av. Paulista, 1106 - Bela Vista <br />
                                São Paulo - SP
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3
                        className={`${inter.className} text-lg font-semibold mb-4`}
                    >
                        Sobre Nós
                    </h3>
                    <p
                        className={`${roboto.className} text-sm text-gray-300`}
                    >
                        A Via Verde é dedicada a fornecer ferramentas para otimizar e gerenciar energia de forma sustentável.
                    </p>
                </div>
                <div className="col-span-full text-center mt-6">
                    <p className={`${roboto.className} text-sm text-gray-400`}>
                        VIA VERDE ® Todos os direitos reservados. 2024
                    </p>
                </div>
            </div>
        </footer>
    );
};
