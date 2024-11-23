import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

import Image from "next/image";

import GuGithub from "../../../public/assets/images/Gustavo-Github.png";
import githubIcon from "../../../public/assets/svg/github-icon-footer.svg";

import { Inter } from "next/font/google";
import { CardIntegrante } from "../../components/cardIntegrante/CardIntegrante";

const inter = Inter({ subsets: ["latin"] });

export default function Integrantes() {
    return (
        <>
            <Header />
            <section
                className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-green-600"
            >
                <h1
                    className={`${inter.className} text-5xl sm:text-6xl font-semibold mb-8 text-center`}
                >
                    Equipe <span className="text-green-800">Via Verde</span>
                </h1>
                <ul className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
                    <li>
                        <CardIntegrante
                            foto={GuGithub}
                            nome="Gustavo Gomes"
                            rm="RM555999"
                            turma="Turma TDSPY"
                            linkGithub="https://github.com/gugomesx10"
                            linkLinkedin="https://www.linkedin.com/in/gustavo-gomes-martins-3a7571257/"
                        />
                    </li>
                </ul>
                <a
                    href="https://github.com/Verde-na-veia/Verde-na-veia-Front"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 text-white uppercase py-4 px-8 rounded-lg text-base font-semibold cursor-pointer hover:bg-green-800 hover:text-white transition-colors flex items-center mx-auto gap-2 max-w-fit"
                >
                    Repositório Git{" "}
                    <Image
                        src={githubIcon}
                        alt="Ícone do GitHub"
                        width={20}
                        height={20}
                    />
                </a>
            </section>
            <Footer />
        </>
    );
}
