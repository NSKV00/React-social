import { useParams } from "react-router-dom"
// // import style from "../style.module.css"
// import style from "../feed/style.module.css"
import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import { useNavigate } from "react-router-dom"

export const Usuario=()=>{
    const params = useParams()

    return <>
    
        <section className={style.profile}>
            <p>{params.id}</p>
        </section>
    </>
}
