"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Inter } from "next/font/google";

import logoHeader from "../../../public/assets/images/verde-icon.png";

const inter = Inter({ subsets: ["latin"] });

export default function Cadastro() {
  const router = useRouter();

  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    nome: "",
    login: "",
    cnpj: "",
    dataAbertura: "",
    email: "",
    telefone: "",
    senha: "",
    confSenha: "",
  });

  // Função para atualizar os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Formata o campo de CNPJ
  const formatCnpj = (value) => {
    let formattedCnpj = value.replace(/\D/g, "");
    formattedCnpj = formattedCnpj.replace(/(\d{2})(\d)/, "$1.$2");
    formattedCnpj = formattedCnpj.replace(/(\d{3})(\d)/, "$1.$2");
    formattedCnpj = formattedCnpj.replace(/(\d{3})(\d{4})/, "$1/$2");
    formattedCnpj = formattedCnpj.replace(/(\d{4})(\d{2})$/, "$1-$2");
    return formattedCnpj;
  };

  // Função de envio do formulário
  const handleCadastro = async (e) => {
    e.preventDefault();

    const { nome, login, cnpj, dataAbertura, email, telefone, senha, confSenha } = formData;

    if (senha !== confSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const data = { nome, cnpj, dataAbertura, email, telefone, login, senha };

    try {
      const response = await axios.post("http://localhost:8080/empresa", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status === 201) {
        sessionStorage.setItem("clienteLogin", login);
        alert("Cadastro realizado com sucesso!");
        router.push(`/dashboard?clienteLogin=${login}`);
      } else if (response.status === 400) {
        alert("Erro ao buscar login do cliente");
      }
    } catch (error) {
      console.error("Erro ao criar cadastro:", error);
      alert("Ocorreu um erro ao tentar cadastrar.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-green-600 min-h-screen flex items-center justify-center">
      <section className="container formContainer bg-white p-8 rounded-lg shadow-lg max-w-md">
        <Link href="/">
          <Image src={logoHeader} alt="Logo Via Verde" className="logoForm mb-5" />
        </Link>
        <h3 className={`${inter.className} titleForm`}>Cadastro</h3>
        <p className={`${inter.className} subtitleForm`}>
          Complete com seus dados para criar sua conta
        </p>

        <form onSubmit={handleCadastro}>
          <div className="mb-5">
            <label className={`${inter.className} labelForm`}>Nome Empresa</label>
            <input
              type="text"
              name="nome"
              placeholder="Eletropaulo"
              className="inputsForm"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className={`${inter.className} labelForm`}>CNPJ</label>
            <input
              type="text"
              name="cnpj"
              placeholder="XX.XXX.XXX/0001-XX"
              className="inputsForm"
              value={formData.cnpj}
              onChange={(e) =>
                handleChange({ target: { name: "cnpj", value: formatCnpj(e.target.value) } })
              }
            />
          </div>

          <div className="mb-5">
            <label className={`${inter.className} labelForm`}>Data de Abertura</label>
            <input
              type="text"
              name="dataAbertura"
              placeholder="00/00/2003"
              className="inputsForm"
              value={formData.dataAbertura}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className={`${inter.className} labelForm`}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              className="inputsForm"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className={`${inter.className} labelForm`}>Telefone</label>
            <input
              type="text"
              name="telefone"
              placeholder="(11) 99999-9999"
              className="inputsForm"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className={`${inter.className} labelForm`}>Nome de Usuário</label>
            <input
              type="text"
              name="login"
              placeholder="eletro.paulo"
              className="inputsForm"
              value={formData.login}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label className={`${inter.className} labelForm`}>Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="************"
              className="inputsForm"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className={`${inter.className} labelForm`}>Confirmar Senha</label>
            <input
              type="password"
              name="confSenha"
              placeholder="************"
              className="inputsForm"
              value={formData.confSenha}
              onChange={handleChange}
            />
          </div>

          <button className="botao w-full">CRIAR CONTA</button>
        </form>
      </section>
    </div>
  );
}
