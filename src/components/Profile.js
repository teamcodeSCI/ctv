import Input from './Input.js'
class Profile {
    $container
    $header
    $colLeft
    $colRight
    data
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$header = document.createElement('div')
        this.$header.className = 'fs-2 fw-semibold my-4'
        this.$header.innerHTML = 'Thông tin cá nhân'

        this.$content = document.createElement('div')
        this.$content.className = 'row'

        this.$colLeft = document.createElement('div')
        this.$colLeft.className = 'col-md-6 p-2'

        this.$colRight = document.createElement('div')
        this.$colRight.className = 'col-md-6 p-2'

        this.$code = new Input({
            icon: 'bi bi-upc-scan',
            placeholder: 'Mã',
            isDisabled: true
        })

        this.$name = new Input({
            icon: 'bi bi-person',
            placeholder: 'Họ và tên',
            isDisabled: true
        })

        this.$country = new Input({
            icon: 'bi bi-person-bounding-box',
            placeholder: 'Quốc tịch',
            isDisabled: true
        })

        this.$birth = new Input({
            icon: 'bi bi-calendar-date',
            placeholder: 'Ngày sinh',
            isDisabled: true
        })

        this.$household = new Input({
            icon: 'bi bi-house-door',
            placeholder: 'Hộ khẩu thường trú',
            isDisabled: true
        })
        this.$currentPlace = new Input({
            icon: 'bi bi-house-door',
            placeholder: 'Chỗ ở hiện tại',
            isDisabled: true
        })
        this.$phonenumber = new Input({
            icon: 'bi bi-phone',
            placeholder: 'Số điện thoại',
            isDisabled: true
        })
        this.$nationId = new Input({
            icon: 'bi bi-card-text',
            placeholder: 'Số CMND/CCCD',
            isDisabled: true
        })
        this.$createdAt = new Input({
            icon: 'bi bi-card-text',
            placeholder: 'Ngày cấp',
            isDisabled: true
        })
        this.$issuedBy = new Input({
            icon: 'bi bi-card-text',
            placeholder: 'Nơi cấp',
            isDisabled: true
        })
        this.$accNumber = new Input({
            icon: 'bi bi-credit-card',
            placeholder: 'Số tài khoản',
            isDisabled: true
        })
        this.$branch = new Input({
            icon: 'bi bi-credit-card',
            placeholder: 'Chi nhánh',
            isDisabled: true
        })
        this.$accName = new Input({
            icon: 'bi bi-credit-card',
            placeholder: 'Chủ tài khoản',
            isDisabled: true
        })
    }
    render() {
        this.$container.appendChild(this.$header)
        this.$container.appendChild(this.$content)
        this.$content.appendChild(this.$colLeft)
        this.$content.appendChild(this.$colRight)

        this.$colLeft.appendChild(this.$code.render())
        this.$colLeft.appendChild(this.$name.render())
        this.$colLeft.appendChild(this.$country.render())
        this.$colLeft.appendChild(this.$birth.render())
        this.$colLeft.appendChild(this.$household.render())
        this.$colLeft.appendChild(this.$currentPlace.render())
        this.$colLeft.appendChild(this.$phonenumber.render())

        this.$colRight.appendChild(this.$nationId.render())
        this.$colRight.appendChild(this.$createdAt.render())
        this.$colRight.appendChild(this.$issuedBy.render())
        this.$colRight.appendChild(this.$accNumber.render())
        this.$colRight.appendChild(this.$branch.render())
        this.$colRight.appendChild(this.$accName.render())
        return this.$container
    }
}
export default Profile