import { statusList } from "../util/util.js"
import FilterItem from "./FilterItem.js"

class Filter {
    $container
    $filterButon
    $dropdown
    $dropdownItem
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'dropdown'

        this.$dropdown = document.createElement('ul')
        this.$dropdown.className = 'dropdown-menu mt-2'
        this.renderFilterItem();

        this.$filterButon = document.createElement('button')
        this.$filterButon.className = 'btn btn-primary dropdown-toggle'
        this.$filterButon.innerHTML = 'Trạng thái'
        this.$filterButon.addEventListener('click', () => {
            this.$dropdown.classList.toggle('d-block')
        })
    }
    renderFilterItem = () => {
        this.$dropdown.innerHTML = ''
        for (let item of statusList) {
            this.$dropdownItem = new FilterItem({ title: item.name })
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