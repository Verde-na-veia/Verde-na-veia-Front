"use client";

import { LateralNav } from "@/components/lateralNav/LateralNav";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [login, setLogin] = useState<string | null>(null);
  const [energiaConsumo, setEnergiaConsumo] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Recupera o login armazenado na sessão
    const storedLogin = sessionStorage.getItem("clienteLogin");
    setLogin(storedLogin);
  }, []);

  useEffect(() => {
    if (login) {
      const fetchConsumoEnergia = async () => {
        try {
          setLoading(true);

          const response = await axios.post(
            `http://localhost:8080/fonte/Sudeste/${login}/redistribuir`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 204) {
            const updatedConsumo = await axios.get(`http://localhost:8080/fonte/Sudeste/${login}`);

            if (updatedConsumo.status === 200 && Array.isArray(updatedConsumo.data)) {
              const somaConsumo: Record<string, number> = {};

              updatedConsumo.data.forEach((item) => {
                const { energia, nivelConsumo } = item;
                somaConsumo[energia] = (somaConsumo[energia] || 0) + nivelConsumo;
              });

              setEnergiaConsumo(somaConsumo);
            }
          } else {
            setError("Erro ao tentar realocar consumidores.");
          }
        } catch (err) {
          console.error("Erro ao tentar realocar consumidores:", err);
          setError("Ocorreu um erro ao tentar realocar consumidores.");
        } finally {
          setLoading(false);
        }
      };

      // Chama a função a cada 10 segundos para atualizar os dados
      const intervalId = setInterval(fetchConsumoEnergia, 10000);

      // Cleanup do intervalo ao desmontar o componente
      return () => clearInterval(intervalId);
    }
  }, [login]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  const maxConsumo = Math.max(...Object.values(energiaConsumo), 1); // Evita divisão por 0

  return (
    <div className="flex">
      <LateralNav />

      <div className="w-full flex flex-col items-center">
        <div className="w-full pt-10">
          <h3 className="text-center">
            Bem-vindo de volta <span className="text-corP1">{login}</span>
          </h3>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[400px]">
            <div className="animate-spin border-4 border-t-4 border-green-500 rounded-full w-16 h-16"></div>
          </div>
        ) : (
          <div className="grafico-container w-full flex flex-col items-center mt-10">
            <div className="flex justify-around items-end h-[400px] w-full max-w-4xl">
              {Object.entries(energiaConsumo).map(([energia, consumo]) => (
                <div
                  key={energia}
                  className="flex justify-center items-end bg-green-500 text-white font-bold rounded-t-lg"
                  style={{
                    width: "150px",
                    height: `${(consumo / maxConsumo) * 100}%`,
                  }}
                >
                  <span>{energia}</span>
                </div>
              ))}
            </div>
            <ul className="mt-5 text-green-700">
              {Object.entries(energiaConsumo).map(([energia, consumo]) => (
                <li key={energia}>
                  {energia}: {consumo} kWh
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
