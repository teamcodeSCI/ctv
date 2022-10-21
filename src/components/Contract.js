class Contract {
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$header = document.createElement('div')
        this.$header.className = 'fs-2 fw-semibold my-4'
        this.$header.innerHTML = 'Hợp đồng'

    }
    render() {
        this.$container.appendChild(this.$header)
        return this.$container
    }
}
export default Contract