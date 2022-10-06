import { setComponent } from "./util.js"
import Login from "../components/Login.js";

import Home from "../components/Home.js";
import Register from "../components/Register.js";

const home = new Home()
const login = new Login()
const register = new Register()

export const getComponent = () => {
    if (sessionStorage.getItem('isRegister')) {
        setComponent(register)
        return;
    }
    if (!localStorage.getItem('isLogin')) {
        setComponent(login)
        return
    }
    setComponent(home)
    return
}