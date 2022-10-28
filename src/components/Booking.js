import Input from "./Input.js"

class Booking {
    constructor() {
        this.$bg = document.createElement('div')
        this.$bg.className = `bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent`

        this.$container = document.createElement('div')
        this.$container.className = `container`

        this.$row = document.createElement('div')
        this.$row.className = `row`

        this.$title = document.createElement('h1')
        this.$title.className = `text-center mb-3`
        this.$title.innerHTML = `Booking`

        this.$colLeft = document.createElement('div')
        this.$colLeft.className = `col-md-6 p-2`

        this.$colRight = document.createElement('div')
        this.$colRight.className = `col-md-6 p-2`

        this.$btnBox = document.createElement('div')
        this.$btnBox.className = `col-md-12 p-2 text-center`

        this.$btnConfirm = document.createElement('button')
        this.$btnConfirm.className = 'btn btn-primary'
        this.$btnConfirm.innerHTML = 'Xác nhận'

        this.$classify = new Input({ icon: 'bi bi-bar-chart', placeholder: 'Phân loại' })
        this.$bookingCode = new Input({ icon: 'bi bi-qr-code-scan', placeholder: 'Mã booking' })
        this.$name = new Input({ icon: 'bi bi-person', placeholder: 'Tên liên hệ' })
        this.$oversea = new Input({ icon: 'bi bi-globe', placeholder: 'Việt kiều' })
        this.$phone = new Input({ icon: 'bi bi-qr-code-scan', placeholder: 'Điện thoại 1' })
        this.$country = new Input({ icon: 'bi bi-globe', placeholder: 'Quốc gia' })
        this.$city = new Input({ icon: 'bi bi-image-alt', placeholder: 'Tỉnh/TP' })
        this.$customer = new Input({ icon: 'bi bi-door-open', placeholder: 'Khách hàng đến cửa' })
        this.$branch = new Input({ icon: 'bi bi-hospital', placeholder: 'Chi nhánh' })

        this.$department = new Input({ icon: 'bi bi-ethernet', placeholder: 'Phòng ban người tạo' })
        this.$source = new Input({ icon: 'bi bi-folder-symlink', placeholder: 'Nguồn' })
        this.$service = new Input({ icon: 'bi bi-journal-text', placeholder: 'Dòng dịch vụ' })
        this.$paid = new Input({ icon: 'bi bi-credit-card-2-front', placeholder: 'Đã thanh toán' })
        this.$appointment = new Input({ icon: 'bi bi-calendar2-check', placeholder: 'Ngày hẹn lịch' })
        this.$dateCreated = new Input({ icon: 'bi bi-calendar2-check', placeholder: 'Ngày tạo' })
        this.$creator = new Input({ icon: 'bi bi-person-plus', placeholder: 'Người tạo' })
        this.$status = new Input({ icon: 'bi bi-check-circle', placeholder: 'Trạng thái' })
        this.$effect = new Input({ icon: 'bi bi-journal-arrow-down', placeholder: 'Hiệu lực' })
    }
    render() {
        this.$bg.appendChild(this.$container)
        this.$container.appendChild(this.$row)
        this.$row.appendChild(this.$title)
        this.$row.appendChild(this.$colLeft)
        this.$row.appendChild(this.$colRight)
        this.$row.appendChild(this.$btnBox)

        this.$colLeft.appendChild(this.$classify.render())
        this.$colLeft.appendChild(this.$bookingCode.render())
        this.$colLeft.appendChild(this.$name.render())
        this.$colLeft.appendChild(this.$oversea.render())
        this.$colLeft.appendChild(this.$phone.render())
        this.$colLeft.appendChild(this.$country.render())
        this.$colLeft.appendChild(this.$city.render())
        this.$colLeft.appendChild(this.$customer.render())
        this.$colLeft.appendChild(this.$branch.render())

        this.$colRight.appendChild(this.$department.render())
        this.$colRight.appendChild(this.$source.render())
        this.$colRight.appendChild(this.$service.render())
        this.$colRight.appendChild(this.$paid.render())
        this.$colRight.appendChild(this.$appointment.render())
        this.$colRight.appendChild(this.$creator.render())
        this.$colRight.appendChild(this.$dateCreated.render())
        this.$colRight.appendChild(this.$status.render())
        this.$colRight.appendChild(this.$effect.render())

        this.$btnBox.appendChild(this.$btnConfirm)

        return this.$bg
    }
}
export default Booking