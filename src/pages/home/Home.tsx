import { useContext, useEffect } from "react"
import { Hheader } from "../../components/header/Header"
import { useNavigate } from "react-router-dom"
import { apiController } from "../../controller/api.controller"
import { Feed } from "../../components/feed/Feed"
import style from "../style.module.css"
import { MainContext } from "../../context/MainContext"
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { apiController } from "../../controller/api.controller"
// import { Feed } from "../../components/feed/Feed"
// // import { Usuario } from "../../components/usuario/usuario"
// // import { useParams } from "react-router-dom"
// import style from "./style.module.css"
// import { Hheader } from "../../components/header/Header"

// export const Home=()=>{
//     const navigate = useNavigate()

//     const validateUser=async(token:string)=>{
//         try {
//             const res = await apiController.get("usuarios/retrieve",{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         })
//             if(res.data){
//                 localStorage.setItem("user",JSON.stringify(res.data))
//             }
//         } catch (error) {
//             console.log(error,"eror")
//             localStorage.removeItem("token")
//             localStorage.removeItem("user")
//              navigate("/login")
//         }
        
//     }
//     useEffect(()=>{
//         console.log("use effect")
//         const token = localStorage.getItem("token")
//         if(!token){
//             navigate("/login")
//         }else{
//             validateUser(token)
//         }
//     },[])

//     return <>
//     <Hheader hiddenHome="home" hiddenCadastro="cadastro" hiddenLogin="login"/>
    
//     <main className={style.main}>
//         {/* <Usuario/> */}
//         <Feed/>
//     </main>
//     </>
// }
export const Home=()=>{
    const navigate = useNavigate()
    const {  user, posts}= useContext(MainContext)
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
    const update=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("update",e.target.files)
        const reader = new FileReader()
        const file = e.target.files![0]
        reader.readAsText(file)
        reader.onload=(even)=>{
            console.log("reader",even.target!.result)
        }
        
    }
    useEffect(()=>{
        console.log("use effect")
        const token = localStorage.getItem("token")
        if(!token){
            //navigate("/login")
        }else{
            //validateUser(token)
        }
        console.log(posts,user,"posts do contexto")
    },[])
    
    return <>
    <Hheader hiddenHome="home" hiddenCadastro="cadastro" hiddenLogin="login"/>
    
    <main className={style.main}>
        {/* <Usuario/> */}
        <Feed/>
    </main>    
    </>
}