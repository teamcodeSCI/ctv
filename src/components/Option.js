class Option {
    constructor(code, name, isSelected, isDisabled) {
        this.$option = document.createElement('option')
        this.$option.selected = isSelected
        this.$option.disabled = isDisabled
        this.$option.value = code
        this.$option.innerHTML = name
    }
    render() {
        return this.$option
    }
}
export default Option