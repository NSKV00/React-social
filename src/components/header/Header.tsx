import { Link } from "react-router-dom"
import { Iconify } from "../iconify/Iconify"
import Hstyle from "./Hstyle.module.css"

interface HeaderProps{
    hiddenAdd?:"add"
    hiddenCadastro?:"cadastro"
    hiddenConfig?:"config"
    hiddenHome?:"home"
    hiddenLogin?:"login"
    hiddenMensage?:"mensage"
    hiddenUser?:"user"
}

export const Hheader =({hiddenAdd,hiddenCadastro,hiddenConfig,hiddenHome,hiddenLogin,hiddenMensage,hiddenUser}:HeaderProps)=>{
    let userId="2"
    if(localStorage.getItem("user")){
        const user = JSON.parse(localStorage.getItem("user")!)
    
        if(user){

            userId = user.id
        }
    }
    
    return <header className={Hstyle.Hheader}>
        <h1 className={Hstyle.h1}>The Script</h1>
        {!hiddenConfig&&<fieldset className={Hstyle.pesquisa}>
            <Iconify icon="mi:search" className={Hstyle.lupa} />
            <input className={Hstyle.I} type="text" placeholder="Pesquise aqui"/>
        </fieldset>}

        <nav className={Hstyle.nav}>
            {hiddenHome != "home" && <Link className={Hstyle.Link} to={"/"}>
                <Iconify icon="ci:house-01"/>
            </Link>}
            {hiddenAdd != "add" && <Link className={Hstyle.Link} to={"/add"}>
                <Iconify icon="mi:add"/>
            </Link>}
            {hiddenUser != "user" && <Link className={Hstyle.Link} to={"/user"}>
                <Iconify icon="mi:user"/>
            </Link>}
            {hiddenMensage != "mensage" && <Link className={Hstyle.Link} to={"/mensage"}>
                <Iconify icon="mi:email"/>
            </Link>}
            {hiddenConfig != "config" && <Link className={Hstyle.Link} to={"/config"}>
                <Iconify icon="mi:settings"/>
            </Link>}
            {hiddenLogin != "login" && <Link className={Hstyle.Link} to={"/login"}>
                <Iconify icon="mi:settings"/>
            </Link>}
            {hiddenCadastro != "cadastro" && <Link className={Hstyle.Link} to={"/cadastro"}>
                <Iconify icon="mi:settings"/>
            </Link>}
        </nav>
    </header>
}