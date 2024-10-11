import React, { useContext } from "react";
import logomarca from "../../assets/logomarca_dark.png"
import context from "../../Context/userContext";
import { Navigate, useNavigate } from "react-router-dom";

import { FaPowerOff } from "react-icons/fa"
import { ButtonTransparent } from "../Button/button";

const Header = () => {
    const { user } = useContext(context) // importando dentro do contexto a função de alimentar os dados do usuário

    const logoutUser = () => {

        try {
            const data = {
                ...user,
                ultimoAcesso: new Date().toLocaleDateString()
            }

            fetch("http://localhost:3000/usuarios/" + user.id)({
                method: "PUT",
                body: JSON.stringify(data)
            })

            Navigate("/")

        } catch {
            alert("Não foi possível registrar o seu acesso")
        }

    }

    return (
        <header className="w-full flex justify-between items-center py-6">
            <img src={logomarca} alt="" />

            <div className="flex justify-center items-center gap-5">
                <a target='_blank' href={`https://github.com/${user.login}`} title={`Acessar o perfil do ${user.login}`}>
                    <img className="w-16 rounded" src={user.imagem} alt="Foto de perfil do usuário logado" />
                </a>

                <ButtonTransparent onCLick={logoutUser} styles="border-primary-red"> <FaPowerOff fill='#bf0000' /> </ButtonTransparent>
            </div>
        </header>
    )

}

export default Header; 