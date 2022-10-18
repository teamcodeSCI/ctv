class CustomerItem {
    $container
    $name
    $phonenumber
    $status
    $number

    constructor({ number, booking, name, phonenumber, service, createAt, appointmentDate, arrivalDate, status }) {
        this.$container = document.createElement('tr')

        this.$number = document.createElement('th')
        this.$number.innerHTML = number

        this.$booking = document.createElement('td')
        this.$booking.innerHTML = booking || ''



        this.$name = document.createElement('td')
        this.$name.innerHTML = name || ''

        this.$phonenumber = document.createElement('td')
        this.$phonenumber.innerHTML = phonenumber || ''

        this.$service = document.createElement('td')
        this.$service.innerHTML = service || ''

        this.$createAt = document.createElement('td')
        this.$createAt.innerHTML = createAt || ''

        this.$appointmentDate = document.createElement('td')
        this.$appointmentDate.innerHTML = appointmentDate || ''

        this.$arrivalDate = document.createElement('td')
        this.$arrivalDate.innerHTML = arrivalDate || ''

        this.$status = document.createElement('td')
        this.$status.innerHTML = status || ''
    }
    render() {
        this.$container.appendChild(this.$number)
        this.$container.appendChild(this.$booking)

        this.$container.appendChild(this.$name)
        this.$container.appendChild(this.$phonenumber)
        this.$container.appendChild(this.$service)
        this.$container.appendChild(this.$createAt)
        this.$container.appendChild(this.$appointmentDate)
        this.$container.appendChild(this.$arrivalDate)
        this.$container.appendChild(this.$status)
        return this.$container
    }
}
export default CustomerItem