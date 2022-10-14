class FilterItem {
    $container;
    $item;
    constructor({ title }) {
        this.$container = document.createElement('li')
        this.$item = document.createElement('button')
        this.$item.className = 'dropdown-item'
        this.$item.innerHTML = title
    }
    render() {
        this.$container.appendChild(this.$item)
        return this.$container
    }
}
export default FilterItem