class Report {
    constructor() {
        this.$container = document.createElement('div')
        this.$container.innerHTML = 'Report'
    }
    render() {
        return this.$container
    }
}
export default Report