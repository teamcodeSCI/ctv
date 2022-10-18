import Filter from "./Filter.js";
import Search from "./Search.js";
import Pagination from "./Pagination.js";
import { customerList, statusList } from "../util/util.js"
import CustomerItem from "./CustomerItem.js";


class Customer {
    $container;
    $header;
    $filterSearch
    $filter
    $search;
    $tableRes;
    $table;
    $thead
    $headerTr
    $tbody

    $number
    $booking
    $creator
    $name
    $phonenumber
    $service
    $createAt
    $appointmentDate
    $arrivalDate
    $status

    $item
    $pagination
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$header = document.createElement('div')
        this.$header.className = 'fs-2 fw-semibold my-4'
        this.$header.innerHTML = 'Khách hàng'

        this.$filterSearch = document.createElement('div')
        this.$filterSearch.className = 'd-flex justify-content-end gap-3 mb-4'

        this.$filter = new Filter({ statusList: statusList })
        this.$search = new Search()
        this.$pagination = new Pagination(customerList)

        this.$tableRes = document.createElement('div')
        this.$tableRes.className = 'table-responsive'

        this.$table = document.createElement('table')
        this.$table.className = 'table border table-striped'

        this.$thead = document.createElement('thead')

        this.$headerTr = document.createElement('tr')

        this.$tbody = document.createElement('tbody')
        this.renderItem()

        this.$number = document.createElement('th')
        this.$number.innerHTML = 'STT'

        this.$booking = document.createElement('th')
        this.$booking.innerHTML = 'Mã booking'



        this.$name = document.createElement('th')
        this.$name.innerHTML = 'Tên khách hàng'

        this.$phonenumber = document.createElement('th')
        this.$phonenumber.innerHTML = 'Số điện thoại'

        this.$service = document.createElement('th')
        this.$service.innerHTML = 'Dịch vụ'

        this.$createAt = document.createElement('th')
        this.$createAt.innerHTML = 'Ngày tạo'

        this.$appointmentDate = document.createElement('th')
        this.$appointmentDate.innerHTML = 'Ngày hẹn lịch'

        this.$arrivalDate = document.createElement('th')
        this.$arrivalDate.innerHTML = 'Ngày đến cửa'

        this.$status = document.createElement('th')
        this.$status.innerHTML = 'Trạng thái'
    }
    renderItem() {
        this.$tbody.innerHTML = ''
        customerList.map((e, idx) => {
            this.$item = new CustomerItem({
                number: idx + 1,
                booking: e.booking,

                name: e.name,
                phonenumber: e.phonenumber,
                service: e.service,
                createAt: e.createAt,
                appointmentDate: e.appointmentDate,
                arrivalDate: e.arrivalDate,
                status: e.status
            })
            this.$tbody.appendChild(this.$item.render())
        })
        return this.$tbody
    }
    render() {

        this.$container.appendChild(this.$header)
        this.$container.appendChild(this.$filterSearch)


        this.$filterSearch.appendChild(this.$filter.render())
        this.$filterSearch.appendChild(this.$search.render())

        this.$container.appendChild(this.$tableRes)

        this.$tableRes.appendChild(this.$table)

        this.$table.appendChild(this.$thead)
        this.$table.appendChild(this.$tbody)

        this.$thead.appendChild(this.$headerTr)

        this.$headerTr.appendChild(this.$number)
        this.$headerTr.appendChild(this.$booking)

        this.$headerTr.appendChild(this.$name)
        this.$headerTr.appendChild(this.$phonenumber)
        this.$headerTr.appendChild(this.$service)
        this.$headerTr.appendChild(this.$createAt)
        this.$headerTr.appendChild(this.$appointmentDate)
        this.$headerTr.appendChild(this.$arrivalDate)
        this.$headerTr.appendChild(this.$status)

        this.$container.appendChild(this.$pagination.render())

        return this.$container
    }
}
export default Customer