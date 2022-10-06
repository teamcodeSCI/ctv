import { getComponent } from "../util/getComponent.js";
import Search from "./Search.js";

class Home {
    $container;
    $logoutBtn;
    $search;
    constructor() {
        this.$container = document.createElement('div')
        this.$container.classList.add('container')

        this.$logoutBtn = document.createElement('button')
        this.$logoutBtn.className = 'btn btn-link px-0'
        this.$logoutBtn.innerHTML = 'Đăng xuất'
        this.$logoutBtn.addEventListener('click', () => {
            this.logout()
        })
        this.$search = new Search()
    }
    logout() {
        localStorage.removeItem('isLogin')
        getComponent()
    }
    render() {

        this.$container.appendChild(this.$logoutBtn)
        this.$container.appendChild(this.$search.render())
        return this.$container
    }
}
export default Home