import Image, { StaticImageData } from "next/image";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

interface CardServicoProps {
    imageSrc: string | StaticImageData;
    imageAlt: string;
    title: string;
    description: string;
}

export const CardServico = ({
    imageSrc,
    imageAlt,
    title,
    description,
}: CardServicoProps) => {
    return (
        <article className="flex flex-col items-center md:items-start bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={80}
                height={80}
                className="mb-6"
                priority
            />
            <h3
                className={`${inter.className} text-2xl font-bold text-gray-900 text-center md:text-left mb-4`}
            >
                {title}
            </h3>
            <p
                className={`${roboto.className} text-gray-700 text-base text-center md:text-left leading-relaxed`}
            >
                {description}
            </p>
        </article>
    );
};
