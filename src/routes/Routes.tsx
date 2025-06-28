import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Login } from "../pages/login/Login"
import { Cadastro } from "../pages/cadastro/Cadastro"
import { User } from "../pages/user/User"
import { Configs } from "../pages/configs/Configs"
import { Mensage } from "../pages/mensage/Mensage"
import { AddPost } from "../pages/addpost/AddPost"


export function MainRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/user" element={<User/>} />
        <Route path="/config" element={<Configs/>} />
        <Route path="/mensage" element={<Mensage/>} />
        <Route path="/add" element={<AddPost/>}/>

    </Routes>
}