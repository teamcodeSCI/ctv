import { getPage } from "../util/getPage.js";
import Input from "./Input.js";
import Select from "./Select.js";
import { brandList, companyList, sourceList, status } from "../util/util.js"
class Register {
    $bg;
    $container;
    $row

    $colInfo
    $cardBodyInfo
    $titleInfo

    $userId;
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

    $colBank
    $cardBank
    $cardBodyBank
    $titleBank

    $bankName
    $bankNumber

    constructor() {
        this.$bg = document.createElement('div')
        this.$bg.className = 'bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent'

        this.$container = document.createElement('div')
        this.$container.classList.add('container')

        this.$row = document.createElement('div')
        this.$row.className = 'row'

        this.$header = document.createElement('h1')
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

        this.$userId = new Input('bi bi-person-video2', 'text', 'Mã cộng tác viên')
        this.$phonenumber1 = new Input('bi bi-telephone-plus-fill', 'text', 'Số điện thoại 1')
        this.$username = new Input('fs-5 bi bi-person', 'text', 'Tên cộng tác viên')
        this.$phonenumber2 = new Input('bi bi-telephone-plus-fill', 'text', 'Số điện thoại 2')
        this.$nationalId = new Input('bi bi-card-list', 'text', 'CMTND/CCCD')
        this.$nationalIdImg = new Input('bi bi-person-video2', 'file', 'Ảnh CMTND')
        this.$email = new Input('bi bi-envelope', 'text', 'Email')

        this.$colSource = document.createElement('div')
        this.$colSource.className = 'col-md-6 p-2'

        this.$cardSource = document.createElement('div')
        this.$cardSource.className = 'card'

        this.$cardBodySource = document.createElement('div')
        this.$cardBodySource.className = 'card-body'

        this.$titleSource = document.createElement('h5')
        this.$titleSource.className = 'text-medium-emphasis fw-bold mb-3'
        this.$titleSource.innerHTML = 'Tương tác'

        this.$company = new Select('bi bi-building', companyList, 'Công ty')
        this.$brand = new Select('bi bi-award', brandList, 'Thương hiệu')
        this.$sourceGroup = new Select('bi bi-people-fill', [], 'Cộng tác viên', 'CTV')
        this.$source = new Select('bi bi-person-lines-fill', sourceList, 'Nguồn')
        this.$status = new Select('bi bi-list-task', status, 'Trạng thái')

        this.$colBank = document.createElement('div')
        this.$colBank.className = 'col-md-6 p-2'

        this.$cardBank = document.createElement('div')
        this.$cardBank.className = 'card'

        this.$cardBodyBank = document.createElement('div')
        this.$cardBodyBank.className = 'card-body'

        this.$titleBank = document.createElement('h5')
        this.$titleBank.className = 'text-medium-emphasis fw-bold mb-3'
        this.$titleBank.innerHTML = 'Ngân hàng'

        this.$bankName = new Input('bi bi-bank2', 'text', 'Ngân hàng')
        this.$bankNumber = new Input('bi bi-123', 'text', 'Số thẻ')
    }
    back() {
        sessionStorage.removeItem('isRegister')
        getPage()
    }
    render() {
        this.$bg.appendChild(this.$container)
        this.$container.appendChild(this.$row)
        this.$row.appendChild(this.$header)
        this.$row.appendChild(this.$colInfo)
        this.$row.appendChild(this.$colSource)
        this.$row.appendChild(this.$colBank)


        this.$colInfo.appendChild(this.$cardInfo)
        this.$cardInfo.appendChild(this.$cardBodyInfo)
        this.$cardBodyInfo.appendChild(this.$titleInfo)

        this.$cardBodyInfo.appendChild(this.$userId.render())
        this.$cardBodyInfo.appendChild(this.$phonenumber1.render())
        this.$cardBodyInfo.appendChild(this.$username.render())
        this.$cardBodyInfo.appendChild(this.$phonenumber2.render())
        this.$cardBodyInfo.appendChild(this.$nationalId.render())
        this.$cardBodyInfo.appendChild(this.$nationalIdImg.render())
        this.$cardBodyInfo.appendChild(this.$email.render())

        this.$colSource.appendChild(this.$cardSource)
        this.$cardSource.appendChild(this.$cardBodySource)
        this.$cardBodySource.appendChild(this.$titleSource)

        this.$cardBodySource.appendChild(this.$company.render())
        this.$cardBodySource.appendChild(this.$brand.render())
        this.$cardBodySource.appendChild(this.$sourceGroup.render())
        this.$cardBodySource.appendChild(this.$source.render())
        this.$cardBodySource.appendChild(this.$status.render())

        this.$colBank.appendChild(this.$cardBank)
        this.$cardBank.appendChild(this.$cardBodyBank)
        this.$cardBodyBank.appendChild(this.$titleBank)

        this.$cardBodyBank.appendChild(this.$bankName.render())
        this.$cardBodyBank.appendChild(this.$bankNumber.render())
        return this.$bg
    }
}
export default Register