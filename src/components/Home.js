import { getComponent } from "../util/getComponent.js";
import Sidebar from "./Sidebar.js";

class Home {
    $container;
    $sidebar
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'd-flex'
        this.$content = document.createElement('div')
        this.$sidebar = new Sidebar(this.$content)

    }
    render() {
        getComponent(this.$content)
        this.$container.appendChild(this.$sidebar.render())
        this.$container.appendChild(this.$content)

        return this.$container
    }
}
export default Home