import Input from "./Input.js";

const data = {
    phoneNumber: '0985834484',
    password: '123456aA'
}
class Login {
    $container;
    $phoneNumber
    $password;
    $btn;
    constructor() {
        this.$container = document.createElement('div')

        this.$phoneNumber = new Input('bi bi-phone', 'text', 'Số điện thoại')
        this.$password = new Input('bi bi-lock', 'password', 'Mật khẩu')

        this.$btn = document.createElement('button')
        this.$btn.classList.add('btn', 'btn-primary')
        this.$btn.innerHTML = 'Đăng nhập'
        this.$btn.addEventListener('click', () => {
            this.login()
        })
    }
    login() {
        if (this.$phoneNumber.getInput().value !== data.phoneNumber || this.$password.getInput().value !== data.password) {
            this.$phoneNumber.fail()
            this.$password.fail()
            return;
        }
        this.$phoneNumber.success()
        this.$password.success()
        return;
    }
    render() {
        this.$container.appendChild(this.$phoneNumber.render())
        this.$container.appendChild(this.$password.render())
        this.$container.appendChild(this.$btn)
        return this.$container
    }
}
export default Login