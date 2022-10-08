import Login from "../components/Login.js";
import Home from "../components/Home.js";
import Register from "../components/Register.js";
import { app } from "./util.js";

const home = new Home()
const login = new Login()
const register = new Register()

let currentPage = null;
export const setPage = (component) => {
    if (currentPage) {
        app.removeChild(currentPage);
    }
    currentPage = app.appendChild(component.render())
}
export const getPage = () => {
    if (sessionStorage.getItem('isRegister')) {
        setPage(register)
        return;
    }
    if (!localStorage.getItem('isLogin')) {
        setPage(login)
        return
    }
    setPage(home)
    return
}