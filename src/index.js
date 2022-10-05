import Pagination from "./components/Pagination.js";
import Search from "./components/Search.js";
const search = new Search()
const pagination = new Pagination(5)

document.getElementById('root').appendChild(search.render())
document.getElementById('root').appendChild(pagination.render())