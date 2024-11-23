"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

import logo from "../../../public/assets/images/verde-icon.png";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Login() {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/empresa/logar", {
                login,
                senha,
            });

            if (response.data) {
                sessionStorage.setItem("clienteLogin", login);
                router.push(`/dashboard?clienteLogin=${login}`);
            } else {
                alert("Login ou senha incorretos!");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Ocorreu um erro ao tentar fazer login. Tente novamente.");
        }
    };

    return (
        <div className="bg-gradient-to-br from-green-100 to-green-600 min-h-screen flex items-center justify-center">
            <section className="container formContainer bg-white p-8 rounded-lg shadow-lg max-w-md">
                <Link href="/">
                    <Image src={logo} alt="Logo Via Verde" className="logoForm mb-5" />
                </Link>
                <h3 className={`${inter.className} text-2xl font-bold text-gray-800`}>
                    Bem-vindo de volta!
                </h3>
                <p className={`${inter.className} text-gray-600 mb-6`}>
                    Por favor, insira seus dados de login
                </p>

                <form onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label htmlFor="login" className={`${inter.className} text-gray-700`}>
                            Login
                        </label>
                        <input
                            type="text"
                            id="login"
                            className="inputsForm border border-gray-300 rounded-md p-2 w-full"
                            placeholder="Insira seu login"
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="senha"
                            className={`${inter.className} text-gray-700`}
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            className="inputsForm border border-gray-300 rounded-md p-2 w-full"
                            placeholder="Insira sua senha"
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember"
                                className={`${inter.className} text-sm text-gray-600`}
                            >
                                Lembrar minha senha
                            </label>
                        </div>
                        <a
                            href="#"
                            className={`${inter.className} text-sm text-green-600 hover:underline`}
                        >
                            Esqueci minha senha
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                    >
                        LOGIN
                    </button>
                    <p className={`${inter.className} mt-5 text-center text-gray-700`}>
                        Não tem uma conta?{" "}
                        <Link
                            href="/cadastro"
                            className="text-green-600 hover:underline"
                        >
                            Criar conta
                        </Link>
                    </p>
                </form>
            </section>
        </div>
    );
}
