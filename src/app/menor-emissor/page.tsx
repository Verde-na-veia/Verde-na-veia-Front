"use client";

import { LateralNav } from "@/components/lateralNav/LateralNav";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MenorEmissor() {
    const [consumidor, setConsumidor] = useState<{
        nomeConsumidor: string;
        nivelConsumo: number;
        prioridade: number;
        regiao: string;
        status: string;
        emissaoCarbono: number;
        energia: string;
    } | null>(null);

    const [login, setLogin] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const regiao = "Sudeste"; // Alterar a região aqui. Exemplo: "Norte", "Sul", etc.

    useEffect(() => {
        const storedLogin = sessionStorage.getItem("clienteLogin");
        if (storedLogin) {
            setLogin(storedLogin);
        } else {
            alert("Login não encontrado. Faça login novamente.");
        }
    }, []);

    useEffect(() => {
        if (login) {
            const fetchMenorEmissor = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get(
                        `http://localhost:8080/fonte/menor-emissor/${regiao}/${login}`
                    );

                    if (response.data) {
                        setConsumidor(response.data);
                        setError(null);
                    } else {
                        setConsumidor(null);
                        setError("Nenhum dado encontrado para o menor emissor.");
                    }
                } catch (error) {
                    console.error("Erro ao buscar o menor emissor:", error);
                    setError("Ocorreu um erro ao buscar o menor emissor.");
                } finally {
                    setLoading(false);
                }
            };

            fetchMenorEmissor();
        }
    }, [login]);

    return (
        <div className="flex">
            <LateralNav />
            <div className="w-full flex justify-center">
                <section className="container p-8">
                    <h3 className="text-corP5 text-4xl font-bold mb-6">
                        Menor Emissor da Região {regiao}:
                    </h3>
                    {loading ? (
                        <p className="text-lg">Carregando dados...</p>
                    ) : error ? (
                        <p className="text-red-500 text-lg">{error}</p>
                    ) : consumidor ? (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-xl mb-2">
                                <strong>Nome:</strong> {consumidor.nomeConsumidor}
                            </p>
                            <p className="text-xl mb-2">
                                <strong>Nível de Consumo:</strong> {consumidor.nivelConsumo} kWh
                            </p>
                            <p className="text-xl mb-2">
                                <strong>Prioridade:</strong> {consumidor.prioridade}
                            </p>
                            <p className="text-xl mb-2">
                                <strong>Região:</strong> {consumidor.regiao}
                            </p>
                            <p className="text-xl mb-2">
                                <strong>Status:</strong> {consumidor.status}
                            </p>
                            <p className="text-xl mb-2">
                                <strong>Emissão de Carbono:</strong> {consumidor.emissaoCarbono} kg
                            </p>
                            <p className="text-xl mb-2">
                                <strong>Fonte de Energia:</strong> {consumidor.energia}
                            </p>
                        </div>
                    ) : (
                        <p className="text-lg">Nenhum dado disponível para o menor emissor.</p>
                    )}
                </section>
            </div>
        </div>
    );
}
