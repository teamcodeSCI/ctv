import Option from "./Option.js";

class Select {
    $container;
    $label;
    $icon;
    $select;
    $option;
    data
    title
    value
    constructor({ icon, data, title, value }) {
        this.title = title
        this.data = data || []
        this.value = value || 'default'
        this.$container = document.createElement('div')
        this.$container.classList.add('input-group', 'mb-3')

        this.$label = document.createElement('span')
        this.$label.classList.add('input-group-text')

        this.$icon = document.createElement('i')
        this.$icon.className = icon

        this.$select = document.createElement('select')
        this.$select.className = 'form-select'
    }
    option() {
        this.$option = new Option({ code: this.value, name: this.title, isSelected: true, isDisabled: true })
        this.$select.appendChild(this.$option.render())
        for (let item of this.data) {
            this.$option = new Option({ code: item.code, name: item.name })
            this.$select.appendChild(this.$option.render())
        }
        return this.$select
    }
    success() {
        this.$select.style.border = '1px solid green'
    }
    fail() {
        this.$select.style.border = '1px solid red'

    }
    getValue() {
        return this.$select.value
    }
    render() {
        this.$label.appendChild(this.$icon)
        this.$container.appendChild(this.$label)
        this.$container.appendChild(this.$select)
        this.option()
        return this.$container
    }
}
export default Select