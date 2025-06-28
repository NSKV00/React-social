import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { apiController } from "../../controller/api.controller"
import { Feed } from "../../components/feed/Feed"
// import { Usuario } from "../usuario/usuario"
// import { useParams } from "react-router-dom"
import style from "./style.module.css"
import { Hheader } from "../../components/header/Header"

export const Home=()=>{
    const navigate = useNavigate()

    const validateUser=async(token:string)=>{
        try {
            const res = await apiController.get("usuarios/retrieve",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            if(res.data){
                localStorage.setItem("user",JSON.stringify(res.data))
            }
        } catch (error) {
            console.log(error,"eror")
            localStorage.removeItem("token")
            localStorage.removeItem("user")
             navigate("/login")
        }
        
    }
    useEffect(()=>{
        console.log("use effect")
        const token = localStorage.getItem("token")
        if(!token){
            navigate("/login")
        }else{
            validateUser(token)
        }
    },[])

    return <>
    <Hheader hiddenHome="home" hiddenCadastro="cadastro" hiddenLogin="login"/>
    
    <main className={style.main}>
        {/* <Usuario/> */}
        <Feed/>
    </main>
    </>
}