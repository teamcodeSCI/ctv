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
        this.$title.className = `text-center`
        this.$title.innerHTML = `Booking`

        this.$colLeft = document.createElement('div')
        this.$colLeft.className = `col-md-6 p-2`

        this.$colRight = document.createElement('div')
        this.$colRight.className = `col-md-6 p-2`

        this.$btnBox = document.createElement('div')
        this.$btnBox.className = `col-md-6 p-2 text-center`

        this.$classify = new Input({ icon: 'bi bi-bar-chart', placeholder: 'Phân loại' })
        this.$bookingCode = new Input({ icon: 'bi bi-qr-code-scan', placeholder: 'Mã booking' })
        this.$name = new Input({ icon: 'bi bi-person', placeholder: 'Tên liên hệ' })
        this.$oversea = new Input({ icon: 'bi bi-globe', placeholder: 'Việt kiều' })
        this.$phone = new Input({ icon: 'bi bi-qr-code-scan', placeholder: 'Điện thoại 1' })
        this.$country = new Input({ icon: 'bi bi-globe', placeholder: 'Quốc gia' })
        this.$city = new Input({ icon: 'bi bi-image-alt', placeholder: 'Tỉnh/TP' })
        this.$customer = new Input({ icon: 'bi bi-door-open', placeholder: 'Khách hàng đến cửa' })
        this.$branch = new Input({ icon: 'bi bi-hospital', placeholder: 'Chi nhánh' })

    }
    render() {
        return this.$bg
    }
}
export default Booking