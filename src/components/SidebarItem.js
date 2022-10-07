class SidebarItem {
    $container
    $item
    $icon
    $text
    constructor(icon, text) {
        this.$container = document.createElement('li')
        this.$container.className = 'sidebarItem'

        this.$item = document.createElement('a')
        this.$item.className = 'nav-link text-cus d-flex align-items-center gap-2'
        this.$item.href = '#'

        this.$icon = document.createElement('i')
        this.$icon.className = icon

        this.$text = document.createElement('span')
        this.$text.innerHTML = text

    }
    render() {
        this.$container.appendChild(this.$item)
        this.$item.appendChild(this.$icon)
        this.$item.appendChild(this.$text)
        return this.$container
    }

}
export default SidebarItem