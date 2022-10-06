import Login from "./components/Login.js";
import Search from "./components/Search.js";
import Pagination from "./components/Pagination.js"


const pagination = new Pagination()
const login = new Login()
const search = new Search()
console.log("window.location.hash: ", window.location.hash);
const main = () => {
    if (window.location.hash === '#register') {
        document.getElementById('root').appendChild(pagination.render())
        return
    }
    if (!localStorage.getItem('phoneNumber') && !localStorage.getItem('password')) {
        window.location.hash = '#login'
        document.getElementById('root').appendChild(login.render())
        return
    }
    window.location.hash = ''
    document.getElementById('root').appendChild(search.render())
    return

}
main()