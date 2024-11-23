"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import logo from "../../../public/assets/images/verde-icon.png";

export default function DeleteFonte() {
    const [login, setLogin] = useState("");
    const [energia, setEnergia] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Recupera o login armazenado na sessão
    useEffect(() => {
        const storedLogin = sessionStorage.getItem("clienteLogin");
        if (storedLogin) {
            setLogin(storedLogin);
        } else {
            setError("Login não encontrado. Por favor, faça login novamente.");
        }
    }, []);

    // Função para lidar com a exclusão
    const handleDelete = async () => {
        if (!energia.trim()) {
            alert("Por favor, insira o tipo de energia que deseja deletar.");
            return;
        }

        try {
            const response = await axios.delete(
                `http://localhost:8080/empresa?login=${login}&energia=${energia}`
            );

            if (response.status === 200 || response.status === 204) {
                setMessage(`A fonte de energia "${energia}" foi deletada com sucesso.`);
                setEnergia(""); // Limpa o campo após sucesso
                setError(""); // Limpa mensagens de erro
            } else {
                setError("Não foi possível deletar a fonte de energia. Tente novamente.");
                setMessage(""); // Limpa mensagens de sucesso
            }
        } catch (error) {
            console.error("Erro ao deletar a fonte de energia:", error);
            setError("Ocorreu um erro ao tentar deletar a fonte de energia.");
            setMessage(""); // Limpa mensagens de sucesso
        }
    };

    return (
        <section className="container formContainer">
            <Link href="/dashboard">
                <Image src={logo} alt="Logo" className="logoForm" />
            </Link>
            <h3>Excluir Fonte de Energia</h3>
            <p>
                Usuário logado: <strong>{login || "Não identificado"}</strong>
            </p>

            {error && (
                <p className="text-red-500 mt-4">
                    {error}
                </p>
            )}

            <div>
                <label htmlFor="energia">Tipo de Energia:</label>
                <input
                    type="text"
                    id="energia"
                    value={energia}
                    onChange={(e) => setEnergia(e.target.value)}
                    placeholder="Ex.: Eólica, Solar, etc."
                    className="inputsForm"
                />
            </div>

            <button onClick={handleDelete} className="botao mt-4">
                Excluir Fonte
            </button>

            {message && (
                <p className="text-green-500 mt-4">
                    {message}
                </p>
            )}
        </section>
    );
}
