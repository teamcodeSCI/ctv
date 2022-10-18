import FilterItem from "./FilterItem.js"

class Filter {
    $container
    $filterButon
    $dropdown
    $dropdownItem
    statusList

    constructor(statusList) {
        this.statusList = statusList || []
        this.$container = document.createElement('div')
        this.$container.className = 'dropdown'

        this.$dropdown = document.createElement('ul')
        this.$dropdown.className = 'dropdown-menu end-0 mt-2 w-100'
        this.renderFilterItem();

        this.$filterButon = document.createElement('button')
        this.$filterButon.className = 'btn btn-primary dropdown-toggle d-flex justify-content-between align-items-center'
        this.$filterButon.style.minWidth = '170px'

        this.$filterButon.innerHTML = 'Trạng thái'
        this.$filterButon.addEventListener('click', () => {
            this.$dropdown.classList.toggle('d-block')
        })

    }
    setStatus = (status) => {
        this.$filterButon.innerHTML = status
    }
    renderFilterItem = () => {
        this.$dropdown.innerHTML = ''
        for (let item of this.statusList) {
            this.$dropdownItem = new FilterItem({ title: item.name, setStatus: this.setStatus })
            this.$dropdown.appendChild(this.$dropdownItem.render())
        }
        return this.$dropdown
    }
    render() {
        this.$container.appendChild(this.$filterButon)
        this.$container.appendChild(this.$dropdown)
        return this.$container
    }
}
export default Filter