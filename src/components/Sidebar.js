import { getComponent } from "../util/getComponent.js"
import { info, menu } from "../util/routes.js"
import Logout from "./Logout.js"
import SidebarItem from "./SidebarItem.js"

class Sidebar {
    $container
    $user
    $userImg
    $userText
    $line
    $menu
    $menuItem
    $component
    $lineBot
    $logout
    sidebarGroup = []
    constructor(component) {
        this.$component = component
        this.$container = document.createElement('div')
        this.$container.className = 'sidebar d-flex flex-column flex-shrink-0 p-3 text-cus col-2'

        this.$user = document.createElement('a')
        this.$user.className = 'd-flex align-items-center text-white text-decoration-none'
        this.$user.href = '#'
        this.$user.addEventListener('click', () => {
            sessionStorage.setItem('link', info[0].link)
            getComponent(this.$component, info)
        })

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
        this.renderMenu()

        this.$lineBot = document.createElement('hr')
        this.$logout = new Logout()

    }
    activeMenu = (nameMenu) => {
        for (let item of this.sidebarGroup) {
            if (nameMenu.text === item.getText().innerHTML) {
                item.getItem().classList.add('active')
            } else {
                item.getItem().classList.remove('active')
            }
        }

    }
    renderMenu() {
        for (let item of menu) {
            this.$menuItem = new SidebarItem({
                icon: item.icon,
                text: item.text,
                link: item.link,
                data: menu,
                component: this.$component,
                activeMenu: this.activeMenu
            })
            this.sidebarGroup.push(this.$menuItem)
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
        this.$container.appendChild(this.$lineBot)
        this.$container.appendChild(this.$logout.render())
        return this.$container
    }
}
export default Sidebar