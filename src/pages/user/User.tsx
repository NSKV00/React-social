// import { useParams } from "react-router-dom"
import style from "./style.module.css"
import mainstyle from "../style.module.css"
import { Hheader } from "../../components/header/Header"
import { Iconify } from "../../components/iconify/Iconify" 
import { Feed } from "../../components/feed/Feed"

export const User=()=>{
    // const params = useParams()

    return <>
    <Hheader hiddenUser="user" hiddenCadastro="cadastro" hiddenLogin="login"/>
    
    <main className={mainstyle.main}>

        <section className={style.user}>
            
            <Iconify icon="mi:user"/>
            <p className={style.description}>Lost life, Win game</p>
            <p className={style.g}>@nicky._silva</p>

            <section className={style.content}></section>

                <div className={style.God}>
                    <h2>Nícolas Giuliani</h2>

                    <div className={style.mestre}>

                        <div className={style.posts}>
                            <p>3</p>
                            <p>posts</p>
                        </div>

                        <div className={style.followers}>
                            <p>81</p>
                            <p>seguidores</p>
                        </div>

                        <div className={style.following}>
                            <p>183</p>
                            <p>seguindo</p>
                        </div>

                    </div>

                </div>

            <Feed/>

        </section>

    </main>
    </>
}
