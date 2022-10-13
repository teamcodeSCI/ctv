import Card from "./Card.js";

class Report {
    $container;
    $header;
    $row;
    $turnover
    $commission
    $debts
    $service
    $cash
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$header = document.createElement('div')
        this.$header.className = 'fs-2 fw-semibold my-4'
        this.$header.innerHTML = 'Báo cáo'

        this.$row = document.createElement('div')
        this.$row.className = 'row'

        this.$turnover = new Card({ value: '20 Triệu', title: 'Doanh thu', percent: 50 })
        this.$commission = new Card({ value: '20 Triệu', title: 'Hoa hồng', percent: 50 })
        this.$debts = new Card({ value: '20 Triệu', title: 'Công nợ', percent: 50 })
        this.$customer = new Card({ value: '2000', title: 'Khách hàng', percent: 50 })
        this.$service = new Card({ value: '20', title: 'Dịch vụ', percent: 50 })
        this.$cash = new Card({ value: '20 Triệu', title: 'Dòng tiền', percent: 50 })

    }
    render() {
        this.$container.appendChild(this.$header)
        this.$container.appendChild(this.$row)
        this.$row.appendChild(this.$turnover.render())
        this.$row.appendChild(this.$commission.render())
        this.$row.appendChild(this.$debts.render())
        this.$row.appendChild(this.$customer.render())
        this.$row.appendChild(this.$service.render())
        this.$row.appendChild(this.$cash.render())
        return this.$container
    }
}
export default Report