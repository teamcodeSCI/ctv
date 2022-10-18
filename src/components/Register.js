import { getPage } from "../util/getPage.js";
import Input from "./Input.js";
import Select from "./Select.js";
import { brandList, companyList, sourceList, status } from "../util/util.js"
import Modal from "./Modal.js";
class Register {
    $bg;
    $container;
    $row

    $colInfo
    $cardBodyInfo
    $titleInfo

    $username
    $phonenumber1
    $phonenumber2
    $nationalId
    $nationalIdImg
    $email

    $colSource
    $cardBodySource
    $titleSource

    $company
    $brand
    $sourceGroup
    $source
    $status

    $cardBank
    $cardBodyBank
    $titleBank

    $bankName
    $bankNumber

    $term
    $termInput
    $termLink
    $termModal

    $btnGroup
    $btnBack
    $btnRegister

    data
    constructor() {
        this.$bg = document.createElement('div')
        this.$bg.className = 'bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent'

        this.$container = document.createElement('div')
        this.$container.classList.add('container')

        this.$row = document.createElement('div')
        this.$row.className = 'row align-items-center'

        this.$header = document.createElement('h1')
        this.$header.className = 'text-center mb-3'
        this.$header.innerHTML = 'Đăng ký'

        this.$colInfo = document.createElement('div')
        this.$colInfo.className = 'col-md-6 p-2'

        this.$cardInfo = document.createElement('div')
        this.$cardInfo.className = 'card'

        this.$cardBodyInfo = document.createElement('div')
        this.$cardBodyInfo.className = 'card-body'

        this.$titleInfo = document.createElement('h5')
        this.$titleInfo.className = 'text-medium-emphasis fw-bold mb-3'
        this.$titleInfo.innerHTML = 'Thông tin khách hàng'

        this.$phonenumber1 = new Input({ icon: 'bi bi-telephone-plus-fill', placeholder: 'Số điện thoại 1' })
        this.$username = new Input({ icon: 'fs-5 bi bi-person', placeholder: 'Tên cộng tác viên' })
        this.$phonenumber2 = new Input({ icon: 'bi bi-telephone-plus-fill', placeholder: 'Số điện thoại 2' })
        this.$nationalId = new Input({ icon: 'bi bi-card-list', placeholder: 'CMTND/CCCD' })
        this.$nationalIdImg = new Input({ icon: 'bi bi-person-video2', type: 'file', placeholder: 'Ảnh CMTND' })
        this.$email = new Input({ icon: 'bi bi-envelope', placeholder: 'Email' })
        this.$password = new Input({ icon: 'bi bi-lock', type: 'password', placeholder: 'Mật khẩu' })
        this.$repeatPassword = new Input({ icon: 'bi bi-lock', type: 'password', placeholder: 'Nhập lại mật khẩu' })

        this.$colSource = document.createElement('div')
        this.$colSource.className = 'col-md-6 p-2'

        this.$cardSource = document.createElement('div')
        this.$cardSource.className = 'card'

        this.$cardBodySource = document.createElement('div')
        this.$cardBodySource.className = 'card-body'

        this.$titleSource = document.createElement('h5')
        this.$titleSource.className = 'text-medium-emphasis fw-bold mb-3'
        this.$titleSource.innerHTML = 'Tương tác'

        this.$company = new Select({ icon: 'bi bi-building', data: companyList, title: 'Công ty' })
        this.$brand = new Select({ icon: 'bi bi-award', data: brandList, title: 'Thương hiệu' })
        this.$sourceGroup = new Select({ icon: 'bi bi-people-fill', title: 'Cộng tác viên', value: 'CTV' })
        this.$source = new Select({ icon: 'bi bi-person-lines-fill', data: sourceList, title: 'Nguồn' })
        this.$status = new Select({ icon: 'bi bi-list-task', data: status, title: 'Trạng thái' })

        this.$cardBank = document.createElement('div')
        this.$cardBank.className = 'card mt-3'

        this.$cardBodyBank = document.createElement('div')
        this.$cardBodyBank.className = 'card-body'

        this.$titleBank = document.createElement('h5')
        this.$titleBank.className = 'text-medium-emphasis fw-bold mb-3'
        this.$titleBank.innerHTML = 'Ngân hàng'

        this.$bankName = new Input({ icon: 'bi bi-bank2', placeholder: 'Ngân hàng' })
        this.$bankNumber = new Input({ icon: 'bi bi-123', placeholder: 'Số thẻ' })

        this.$termModal = new Modal({ closeModal: this.closeModal })

        this.$term = document.createElement('div')
        this.$term.className = 'd-flex gap-2 justify-content-center mt-3'

        this.$termInput = document.createElement('input')
        this.$termInput.type = 'radio'

        this.$termLink = document.createElement('a')
        this.$termLink.className = 'link-primary'
        this.$termLink.href = '#'
        this.$termLink.innerHTML = 'Tôi đồng ý các điều khoản dịch vụ'
        this.$termLink.addEventListener('click', () => {
            this.openModal()
        })


        this.$btnGroup = document.createElement('div')
        this.$btnGroup.className = 'mt-3 d-flex justify-content-between'

        this.$btnBack = document.createElement('button')
        this.$btnBack.className = 'btn btn-link px-0 '
        this.$btnBack.innerHTML = 'Quay lại'
        this.$btnBack.addEventListener('click', () => {
            this.back()
        })

        this.$btnRegister = document.createElement('button')
        this.$btnRegister.className = 'btn btn-primary px-4 me-5 '
        this.$btnRegister.innerHTML = 'Đăng ký'
        this.$btnRegister.addEventListener('click', () => {
            this.register()
        })
        this.$none = document.createElement('div')
    }
    openModal = () => {
        this.$bg.appendChild(this.$termModal.render())
    }
    closeModal = () => {
        this.$bg.removeChild(this.$termModal.render())

    }
    back() {
        sessionStorage.removeItem('isRegister')
        getPage()
    }
    register() {
        this.data = {
            info: {
                phonenumber1: this.$phonenumber1.getInput().value,
                username: this.$username.getInput().value,
                phonenumber2: this.$phonenumber2.getInput().value,
                nationalId: this.$nationalId.getInput().value,
                nationalIdImg: this.$nationalIdImg.getInput().value,
                email: this.$email.getInput().value,
                password: this.$password.getInput().value,
                repeatPassword: this.$repeatPassword.getInput().value

            },
            source: {
                company: this.$company.getValue(),
                brand: this.$brand.getValue(),
                sourceGroup: this.$sourceGroup.getValue(),
                source: this.$source.getValue(),
                status: this.$status.getValue(),
            },
            bank: {
                bankName: this.$bankName.getInput().value,
                bankNumber: this.$bankNumber.getInput().value,
            }
        }
        if (this.data.info.phonenumber1 === '' || this.data.info.username === '' || this.data.info.nationalId === '' || this.data.info.password === '' || this.data.info.repeatPassword === '') {
            alert('Vui lòng nhập đủ thông tin')
            return;
        }
        if (this.data.source.company === 'default' || this.data.source.brand === 'default' || this.data.source.sourceGroup === 'default' || this.data.source.status === 'default' || this.data.source.status === 'default') {
            alert('Vui lòng nhập đủ thông tin')
            return;
        }
        if (this.data.password !== this.data.repeatPassword) {
            alert('Mật khẩu không khớp')
            return
        }
        if (!this.$termInput.checked) {
            alert('Bạn chưa đồng ý điều khoản của chúng tôi')
            return
        }
        console.log(this.data);
        sessionStorage.removeItem('isRegister')
        getPage()
    }
    render() {
        this.$bg.appendChild(this.$container)
        this.$container.appendChild(this.$row)
        this.$row.appendChild(this.$header)
        this.$row.appendChild(this.$colInfo)
        this.$row.appendChild(this.$colSource)
        this.$row.appendChild(this.$term)


        this.$colInfo.appendChild(this.$cardInfo)
        this.$cardInfo.appendChild(this.$cardBodyInfo)
        this.$cardBodyInfo.appendChild(this.$titleInfo)

        this.$cardBodyInfo.appendChild(this.$phonenumber1.render())
        this.$cardBodyInfo.appendChild(this.$username.render())
        this.$cardBodyInfo.appendChild(this.$phonenumber2.render())
        this.$cardBodyInfo.appendChild(this.$nationalId.render())
        this.$cardBodyInfo.appendChild(this.$nationalIdImg.render())
        this.$cardBodyInfo.appendChild(this.$email.render())
        this.$cardBodyInfo.appendChild(this.$password.render())
        this.$cardBodyInfo.appendChild(this.$repeatPassword.render())

        this.$colSource.appendChild(this.$cardSource)
        this.$cardSource.appendChild(this.$cardBodySource)
        this.$cardBodySource.appendChild(this.$titleSource)

        this.$cardBodySource.appendChild(this.$company.render())
        this.$cardBodySource.appendChild(this.$brand.render())
        this.$cardBodySource.appendChild(this.$sourceGroup.render())
        this.$cardBodySource.appendChild(this.$source.render())
        this.$cardBodySource.appendChild(this.$status.render())

        this.$colSource.appendChild(this.$cardBank)
        this.$cardBank.appendChild(this.$cardBodyBank)

        this.$cardBodyBank.appendChild(this.$titleBank)
        this.$cardBodyBank.appendChild(this.$bankName.render())
        this.$cardBodyBank.appendChild(this.$bankNumber.render())

        this.$term.appendChild(this.$termInput)
        this.$term.appendChild(this.$termLink)
        this.$container.appendChild(this.$btnGroup)
        this.$btnGroup.appendChild(this.$btnBack)
        this.$btnGroup.appendChild(this.$btnRegister)
        this.$btnGroup.appendChild(this.$none)

        return this.$bg
    }
}
export default Register