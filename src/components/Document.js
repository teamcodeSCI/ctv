class Document {
    constructor() {
        this.$container = document.createElement('div')
        this.$container.innerHTML = 'Document'

    }
    render() {
        return this.$container
    }
}
export default Document