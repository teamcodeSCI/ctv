import Sidebar from "./Sidebar.js";

class Home {
    $container;
    $sidebar
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'd-flex'

        this.$sidebar = new Sidebar()
    }
    render() {
        this.$container.appendChild(this.$sidebar.render())
        return this.$container
    }
}
export default Home