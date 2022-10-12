import { getPage } from "../util/getPage.js";

class Logout {
    $container;
    $icon;
    $span;
    constructor() {
        this.$container = document.createElement('a')
        this.$container.className = 'd-flex gap-3 align-items-center text-cus text-decoration-none'
        this.$container.style.cursor = 'pointer'
        this.$container.addEventListener('click', () => {
            this.logout()
        })

        this.$icon = document.createElement('i')
        this.$icon.className = 'bi bi-box-arrow-right'

        this.$span = document.createElement('span')
        this.$span.innerHTML = 'Đăng xuất'
    }
    logout() {
        localStorage.removeItem('isLogin')
        getPage()
    }
    render() {
        this.$container.appendChild(this.$icon)
        this.$container.appendChild(this.$span)
        return this.$container
    }
}
export default Logout