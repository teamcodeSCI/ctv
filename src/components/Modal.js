class Modal {
    $container
    $dialog
    $content
    $header
    $title
    $body
    $footer
    $btnClose
    constructor({ closeModal }) {
        this.$container = document.createElement('div')
        this.$container.className = 'modal d-block'
        this.$container.style.background = 'rgba(0,0,0,0.5)'


        this.$dialog = document.createElement('div')
        this.$dialog.className = 'modal-dialog'


        this.$content = document.createElement('div')
        this.$content.className = 'modal-content'

        this.$header = document.createElement('div')
        this.$header.className = 'modal-header'
        window.onclick = (e) => {
            if (e.target == this.$container) {
                closeModal()
            }
        }
        this.$title = document.createElement('h5')
        this.$title.className = 'modal-title'
        this.$title.innerHTML = 'Điều khoản dịch vụ'

        this.$body = document.createElement('div')
        this.$body.className = 'modal-body'

        this.$footer = document.createElement('div')
        this.$footer.className = 'modal-footer'

        this.$btnClose = document.createElement('button')
        this.$btnClose.className = 'btn btn-primary'
        this.$btnClose.innerHTML = 'Đóng'
        this.$btnClose.addEventListener('click', () => {
            closeModal()
        })
    }
    render() {
        this.$container.appendChild(this.$dialog)
        this.$dialog.appendChild(this.$content)

        this.$content.appendChild(this.$header)
        this.$content.appendChild(this.$body)
        this.$content.appendChild(this.$footer)

        this.$header.appendChild(this.$title)
        this.$footer.appendChild(this.$btnClose)

        return this.$container
    }
}
export default Modal