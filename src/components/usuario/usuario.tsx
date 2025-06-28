import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import { useNavigate } from "react-router-dom"

interface usuarioProps {
    idUsuario?: string
}

export const usuario=({idUsuario}:usuarioProps)=>{
    const navigate = useNavigate()




return <section className={style.usuario}>
        {
            loading && <p>Carregando</p>
        }

  </section>
}
