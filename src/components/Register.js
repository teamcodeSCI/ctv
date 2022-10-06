import { getComponent } from "../util/getComponent.js";

class Register {
    $bg;
    $container;
    $row;
    $col;
    $card;
    $cardBody;
    $title;
    $text;
    $btnGroup;
    $btnRegister;
    $backBtn;

    constructor() {
        this.$bg = document.createElement('div')
        this.$bg.className = 'bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent'

        this.$container = document.createElement('div')
        this.$container.classList.add('container')

        this.$row = document.createElement('div')
        this.$row.className = 'row justify-content-center'

        this.$col = document.createElement('div')
        this.$col.className = 'col-md-6'

        this.$card = document.createElement('div')
        this.$card.className = 'card mb-4 mx-4'

        this.$cardBody = document.createElement('div')
        this.$cardBody.className = 'card-body p-4'

        this.$title = document.createElement('h1')
        this.$title.innerHTML = 'Register'

        this.$text = document.createElement('p')
        this.$text.className = 'text-medium-emphasis'
        this.$text.innerHTML = 'Create your account'

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
        this.$bg.appendChild(this.$container)
        this.$container.appendChild(this.$row)
        this.$row.appendChild(this.$col)
        this.$col.appendChild(this.$card)
        this.$card.appendChild(this.$cardBody)
        this.$cardBody.appendChild(this.$title)
        this.$cardBody.appendChild(this.$text)
        this.$cardBody.appendChild(this.$backBtn)
        return this.$bg
    }
}
export default Register