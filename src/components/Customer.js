class Customer {
    constructor() {
        this.$container = document.createElement('div')
        this.$container.innerHTML = 'Customer'
    }
    render() {
        return this.$container
    }
}
export default Customer