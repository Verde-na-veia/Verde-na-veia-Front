import Image, { StaticImageData } from "next/image";

import githubIcon from "../../../public/assets/svg/github-icon-integrantes.svg";
import linkedinIcon from "../../../public/assets/svg/linkedin-icon-integrantes.svg";

import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

interface CardIntegranteProps {
    foto: StaticImageData | string;
    nome: string;
    rm: string;
    turma: string;
    linkGithub: string;
    linkLinkedin: string;
}

export const CardIntegrante = ({
    foto,
    nome,
    rm,
    turma,
    linkGithub,
    linkLinkedin,
}: CardIntegranteProps) => {
    return (
        <article className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <Image
                src={foto}
                alt={`Foto de ${nome}`}
                className="w-[120px] h-[120px] rounded-full object-cover"
            />
            <h3
                className={`${inter.className} text-2xl font-semibold mt-4`}
            >
                {nome}
            </h3>
            <p
                className={`${roboto.className} text-gray-600 text-lg mt-2`}
            >
                {rm} - {turma}
            </p>
            <div className="flex gap-4 mt-4">
                <a
                    href={linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Acesse o GitHub de ${nome}`}
                    className="hover:opacity-80 transition-opacity duration-200"
                >
                    <Image
                        src={githubIcon}
                        alt="Ícone do GitHub"
                        width={24}
                        height={24}
                    />
                </a>
                <a
                    href={linkLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Acesse o LinkedIn de ${nome}`}
                    className="hover:opacity-80 transition-opacity duration-200"
                >
                    <Image
                        src={linkedinIcon}
                        alt="Ícone do LinkedIn"
                        width={24}
                        height={24}
                    />
                </a>
            </div>
        </article>
    );
};
