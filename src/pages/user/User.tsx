// import { useParams } from "react-router-dom"
import style from "./style.module.css"
import mainstyle from "../style.module.css"
import { Hheader } from "../../components/header/Header"
import { Iconify } from "../../components/iconify/Iconify" 

export const User=()=>{
    // const params = useParams()

    return <>
    <Hheader hiddenUser="user" hiddenCadastro="cadastro" hiddenLogin="login"/>
    
    <main className={mainstyle.main}>
        <section className={style.user}>
             <Iconify icon="mi:user"/>

        </section>

    </main>
    </>
}
