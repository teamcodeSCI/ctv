import { getComponent } from "../util/getComponent.js";

class Register {
    $container;
    $backBtn;

    constructor() {
        this.$container = document.createElement('div')
        this.$container.classList.add('container')

        this.$backBtn = document.createElement('button')
        this.$backBtn.className = 'btn btn-link px-0'
        this.$backBtn.innerHTML = 'Quay lại'
        this.$backBtn.addEventListener('click', () => {
            this.back()
        })

    }
    back() {
        sessionStorage.removeItem('isRegister')
        getComponent()
    }
    render() {
        this.$container.appendChild(this.$backBtn)
        return this.$container
    }
}
export default Register