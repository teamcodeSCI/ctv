class DocItem {
    $container
    $number
    $name
    $size
    $download
    $downloadBtn
    file
    constructor({ number, name, size, file }) {
        this.file = file

        this.$container = document.createElement('tr')

        this.$number = document.createElement('th')
        this.$number.innerHTML = number

        this.$name = document.createElement('td')
        this.$name.innerHTML = name || ''

        this.$size = document.createElement('td')
        this.$size.innerHTML = size || ''

        this.$download = document.createElement('td')

        this.$downloadBtn = document.createElement('button')
        this.$downloadBtn.className = 'btn btn-link p-0'
        this.$downloadBtn.innerHTML = 'Tải xuống'
        this.$downloadBtn.addEventListener('click', () => {
            window.open(this.file)
        })
    }
    render() {
        this.$container.appendChild(this.$number)
        this.$container.appendChild(this.$name)
        this.$container.appendChild(this.$size)
        this.$container.appendChild(this.$download)
        this.$download.appendChild(this.$downloadBtn)

        return this.$container
    }
}
export default DocItem