import { login } from "../apis/user.js";
import { getComponent } from "../util/getComponent.js";
import { getPage } from "../util/getPage.js";
import { loading } from "../util/util.js";
import Input from "./Input.js";
class Login {
    $bg;
    $container;
    $row;
    $col;
    $card;

    $cardLeft;
    $cardLeftBody;
    $cardLeftTitle;
    $cardLeftRow;

    $btnGroupRight;

    $btnLogin;

    $cardRight;
    $cardRightBody;
    $cardRightTitle;

    $registBtn;

    $phoneNumber
    $password;

    constructor() {
        this.$bg = document.createElement('div')
        this.$bg.className = `bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent`

        this.$container = document.createElement('div')
        this.$container.className = `container`

        this.$row = document.createElement('div')
        this.$row.className = `row justify-content-center`

        this.$col = document.createElement('div')
        this.$col.className = `col-lg-8`

        this.$card = document.createElement('div')
        this.$card.className = `card-group d-block d-md-flex row`

        this.$cardLeft = document.createElement('div')
        this.$cardLeft.className = `card col-md-7 p-4 mb-0`

        this.$cardLeftBody = document.createElement('div')
        this.$cardLeftBody.className = `card-body p-0`

        this.$cardLeftTitle = document.createElement('h1')
        this.$cardLeftTitle.className = `mb-3`

        this.$cardLeftTitle.innerHTML = `Đăng nhập`

        this.$btnLogin = document.createElement('button')
        this.$btnLogin.className = `btn btn-primary px-4`
        this.$btnLogin.innerHTML = `Đăng nhập`
        this.$btnLogin.type = `button`

        this.$btnGroupRight = document.createElement('div')
        this.$btnGroupRight.className = `col-6 text-end`

        this.$cardRight = document.createElement('div')
        this.$cardRight.className = `card col-md-5 text-white bg-primary py-5`

        this.$cardRightBody = document.createElement('div')
        this.$cardRightBody.className = `card-body text-center`

        this.$cardRightTitle = document.createElement('h2')
        this.$cardRightTitle.innerHTML = `Sign up`

        this.$registBtn = document.createElement('button')
        this.$registBtn.className = `btn btn-lg btn-outline-light mt-3`
        this.$registBtn.type = 'button'
        this.$registBtn.innerHTML = `Register Now!`
        this.$registBtn.addEventListener('click', () => {
            this.register()
        })

        this.$phoneNumber = new Input({ icon: 'bi bi-phone', placeholder: 'Số điện thoại' })
        this.$password = new Input({ icon: 'bi bi-lock', type: 'password', placeholder: 'Mật khẩu' })

        this.$btnLogin = document.createElement('button')
        this.$btnLogin.classList.add('btn', 'btn-primary')
        this.$btnLogin.innerHTML = 'Đăng nhập'
        this.$btnLogin.addEventListener('click', () => {
            this.clickLogin()
        })
    }

    async clickLogin() {
        loading(this.$bg, true)
        const dataLogin = await login(this.$phoneNumber.getInput().value, this.$password.getInput().value)
        loading(this.$bg, false)
        if (!dataLogin) {
            this.$phoneNumber.fail()
            this.$password.fail()
            return
        }
        localStorage.setItem('isLogin', dataLogin.isLogin)
        getPage()
        return
    }
    register() {
        sessionStorage.setItem('isRegister', true)
        getPage()
        return
    }
    render() {
        this.$bg.appendChild(this.$container)
        this.$container.appendChild(this.$row)
        this.$row.appendChild(this.$col)
        this.$col.appendChild(this.$card)
        this.$card.appendChild(this.$cardLeft)
        this.$cardLeft.appendChild(this.$cardLeftBody)
        this.$cardLeftBody.appendChild(this.$cardLeftTitle)
        this.$cardLeftBody.appendChild(this.$phoneNumber.render())
        this.$cardLeftBody.appendChild(this.$password.render())
        this.$cardLeftBody.appendChild(this.$password.render())
        this.$cardLeftBody.appendChild(this.$btnLogin)
        this.$card.appendChild(this.$cardRight)
        this.$cardRight.appendChild(this.$cardRightBody)
        this.$cardRightBody.appendChild(this.$cardRightTitle)
        this.$cardRightBody.appendChild(this.$registBtn)
        return this.$bg
    }
}
export default Login