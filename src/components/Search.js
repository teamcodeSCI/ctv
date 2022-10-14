class Search {
    $container;
    $form;
    $input;
    $searchBtn
    $icon
    constructor() {
        this.$container = document.createElement('div')
        this.$container.classList.add('input-group', 'w-auto')

        this.$form = document.createElement('div')
        this.$form.classList.add('form-outline')

        this.$input = document.createElement('input')
        this.$input.classList.add('form-control')
        this.$input.type = 'text'
        this.$input.placeholder = 'Tìm kiếm'
        this.$input.style = "border-top-right-radius: 0; border-bottom-right-radius: 0;"
        this.$input.addEventListener('input', () => {
            this.search()
        })

        this.$searchBtn = document.createElement('button')
        this.$searchBtn.classList.add('btn', 'btn-primary')

        this.$icon = document.createElement('i')
        this.$icon.classList.add('bi', 'bi-search')
    }
    search() {
        if (this.$input.value != '') {
            console.log(this.$input.value);
        }
    }
    render() {
        this.$form.appendChild(this.$input);
        this.$searchBtn.appendChild(this.$icon)
        this.$container.appendChild(this.$form)
        this.$container.appendChild(this.$searchBtn)
        return this.$container
    }
}
export default Search