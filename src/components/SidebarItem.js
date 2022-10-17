import { getComponent } from "../util/getComponent.js"
class SidebarItem {
    $container
    $item
    $icon
    $text
    activeMenu
    link
    data
    $component
    constructor({ icon, text, link, data, component, activeMenu }) {
        this.$component = component
        this.link = link;
        this.data = data
        this.activeMenu = activeMenu;
        this.$container = document.createElement('li')
        this.$container.className = 'sidebarItem'

        this.$item = document.createElement('a')
        this.$item.className = `nav-link text-cus d-flex align-items-center gap-2 ${this.link===sessionStorage.getItem('link')?'active':''}`
        this.$item.href = '#'
        this.$item.addEventListener('click', () => {
            this.handleClick()
        })

        this.$icon = document.createElement('i')
        this.$icon.className = icon

        this.$text = document.createElement('span')
        this.$text.innerHTML = text

    }
    getItem() {
        return {
            text: this.$text,
            item: this.$item
        }
    }
    handleClick = () => {
        this.activeMenu({ text: this.$text.innerHTML })
        sessionStorage.setItem('link', this.link)
        getComponent(this.$component, this.data)
    }
    render() {
        this.$container.appendChild(this.$item)
        this.$item.appendChild(this.$icon)
        this.$item.appendChild(this.$text)
        return this.$container
    }

}
export default SidebarItem