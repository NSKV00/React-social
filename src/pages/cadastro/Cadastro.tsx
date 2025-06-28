import { useState } from "react"
import { toast } from "react-toastify"
// import { Header } from "../../components/header/Header"
import { apiController } from "../../controller/api.controller"
import Lstyle from "../login/Lstyle.module.css"
import Cstyle from "../cadastro/Cstyle.module.css"
import {Link, useNavigate } from "react-router-dom"

export const Cadastro=()=>{
    const navigates = useNavigate()
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [name,setName] = useState("")
    const fazerCadastro = async (e:React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        const body = {
            password:pass,
            email:email,
            name
        }
       const res = await apiController.post("/usuarios",body)
       console.log(res,"res do axios")
       if(res.status===201){
            toast.success("Cadastro realizado")
            setTimeout(()=>{
                navigates("/login")
            },2500);
       }
        console.log("fazer login", email)
        console.log("fazer login",pass)
    }
    return <>
    {/* <Header/> */}
    <main className={Lstyle.main}>
        <form className={Lstyle.form} onSubmit={(event)=>fazerCadastro(event)}>
            <fieldset>
                <label htmlFor="name">Nome</label>
                <input  id="name" type="text" placeholder="escreva seu nome"
                 onChange={(e)=>setName(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input  id="email" type="text" placeholder="escreva seu e-mail"
                 onChange={(e)=>setEmail(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" placeholder="*****"
                 onChange={(e)=>setPass(e.target.value)}
                />

            </fieldset>
            <button type="submit">Cadastrar-se</button>
            <Link className={Cstyle.login} to={"/login"}>Login</Link>
        </form>
    </main>
    </>
}