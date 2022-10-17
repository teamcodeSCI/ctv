class CustomerItem {
    $container
    $name
    $phonenumber
    $status
    $number

    constructor({ number, name, phonenumber, status }) {
        this.$container = document.createElement('tr')

        this.$number = document.createElement('th')
        this.$number.innerHTML = number || ''

        this.$name = document.createElement('td')
        this.$name.innerHTML = name || ''

        this.$phonenumber = document.createElement('td')
        this.$phonenumber.innerHTML = phonenumber || ''

        this.$status = document.createElement('td')
        this.$status.innerHTML = status || ''
    }
    render() {
        this.$container.appendChild(this.$number)
        this.$container.appendChild(this.$name)
        this.$container.appendChild(this.$phonenumber)
        this.$container.appendChild(this.$status)
        return this.$container
    }
}
export default CustomerItem