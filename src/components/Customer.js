import Filter from "./Filter.js";
import Search from "./Search.js";
import { statusList } from "../util/util.js"


class Customer {
    $container;
    $header;
    $filterSearch
    $filter
    $search;
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$header = document.createElement('div')
        this.$header.className = 'fs-2 fw-semibold my-4'
        this.$header.innerHTML = 'Khách hàng'

        this.$filterSearch = document.createElement('div')
        this.$filterSearch.className = 'd-flex justify-content-end gap-3'

        this.$filter = new Filter(statusList)
        this.$search = new Search()
    }
    render() {
        this.$container.appendChild(this.$header)
        this.$container.appendChild(this.$filterSearch)
        this.$filterSearch.appendChild(this.$filter.render())
        this.$filterSearch.appendChild(this.$search.render())


        return this.$container
    }
}
export default Customer