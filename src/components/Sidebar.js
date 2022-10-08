import { menu } from "../util/routes.js"
import SidebarItem from "./SidebarItem.js"

class Sidebar {
    $container
    $user
    $userImg
    $userText
    $line
    $menu
    $menuItem

    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'sidebar d-flex flex-column flex-shrink-0 p-3 text-cus col-2'

        this.$user = document.createElement('a')
        this.$user.className = 'd-flex align-items-center text-white text-decoration-none'
        this.$user.href = '#'

        this.$userImg = document.createElement('img')
        this.$userImg.className = 'rounded-circle me-2'
        this.$userImg.width = '32'
        this.$userImg.height = '32'
        this.$userImg.src = 'https://github.com/mdo.png'

        this.$userText = document.createElement('strong')
        this.$userText.innerHTML = 'Đức Đoàn'

        this.$line = document.createElement('hr')

        this.$menu = document.createElement('ul')
        this.$menu.className = 'nav nav-pills flex-column mb-auto gap-2'
    }
    renderMenu() {
        for (let item of menu) {
            this.$menuItem = new SidebarItem(item.icon, item.text)
            this.$menuItem.render().addEventListener('click', () => {
                sessionStorage.setItem('link', item.link)
                console.log(sessionStorage.getItem('link'));
            })
            this.$menu.appendChild(this.$menuItem.render())
        }
        return this.$menu
    }
    render() {
        this.$container.appendChild(this.$user)
        this.$user.appendChild(this.$userImg)
        this.$user.appendChild(this.$userText)
        this.$container.appendChild(this.$line)
        this.$container.appendChild(this.$menu)
        this.renderMenu()

        return this.$container
    }
}
export default Sidebar