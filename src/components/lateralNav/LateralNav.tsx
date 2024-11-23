"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const LateralNav = () => {
    const router = useRouter();

    const handleLogout = () => {
        sessionStorage.removeItem("clienteLogin");
        router.push("/login");
    };

    return (
        <>
            <div className="max-w-max">
                <nav className="flex flex-col items-center h-screen justify-between py-[50px] border-r-1 border-solid border-[#E9E9E9]">
                    <h1 className="text-2xl font-bold text-green-700">STABLE</h1>
                    <ul className="flex flex-col items-center gap-8">
                        <li>
                            <Link
                                href="/inserir-fonte"
                                className="p-3 text-green-600 hover:underline"
                            >
                                Inserir Fonte
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/inserir-consumidor"
                                className="p-3 text-green-600 hover:underline"
                            >
                                Inserir Consumidor
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/consumo-energia-total"
                                className="p-3 text-green-600 hover:underline"
                            >
                                Consumo Total
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/menor-emissor"
                                className="p-3 text-green-600 hover:underline"
                            >
                                Menor Emissor
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/deletar-fonte"
                                className="p-3 text-green-600 hover:underline"
                            >
                                Deletar Fonte
                            </Link>
                        </li>
                    </ul>
                    <button
                        onClick={handleLogout}
                        className="p-3 text-red-600 hover:underline"
                    >
                        Sair
                    </button>
                </nav>
            </div>
        </>
    );
};
