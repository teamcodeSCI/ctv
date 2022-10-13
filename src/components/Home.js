import { getComponent } from "../util/getComponent.js";
import { menu } from "../util/routes.js";
import Sidebar from "./Sidebar.js";

class Home {
    $container;
    $sidebar
    $content
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'd-flex'
        this.$content = document.createElement('div')
        this.$content.className = 'col-10 flex-fill px-3 bg-light'

        this.$sidebar = new Sidebar(this.$content)
    }
    render() {
        getComponent(this.$content, menu)
        this.$container.appendChild(this.$sidebar.render())
        this.$container.appendChild(this.$content)
        return this.$container
    }
}
export default Home