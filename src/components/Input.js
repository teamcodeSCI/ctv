class Input {
    $container;
    $label;
    $icon;
    $input;
    constructor({ icon, type, placeholder, isDisabled, value }) {
        this.$container = document.createElement('div')
        this.$container.classList.add('input-group', 'mb-3')

        this.$label = document.createElement('span')
        this.$label.classList.add('input-group-text')

        this.$icon = document.createElement('i')
        this.$icon.className = icon

        this.$input = document.createElement('input')
        this.$input.classList.add('form-control')
        this.$input.disabled = isDisabled || false

        this.$input.type = type || 'text'
        this.$input.placeholder = placeholder
        this.$input.value = value || ''
    }
    setDisabled(disabled) {
        this.$input.disabled = disabled
    }
    getInput() {
        return this.$input
    }
    success() {
        this.$input.style.border = '1px solid green'
    }
    fail() {
        this.$input.style.border = '1px solid red'

    }
    render() {
        this.$label.appendChild(this.$icon)
        this.$container.appendChild(this.$label)
        this.$container.appendChild(this.$input)
        return this.$container
    }
}
export default Input