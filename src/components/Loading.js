class Loading {
    $bg;
    $container;
    $span
    constructor() {
        this.$bg = document.createElement('div')
        this.$bg.className = 'position-fixed min-vh-100 min-vw-100 d-flex align-items-center justify-content-center'
        this.$bg.style.zIndex = '10'
        this.$bg.style.background = 'rgba(255,255,255,0.5)'

        this.$container = document.createElement('div')
        this.$container.className = 'spinner-border text-primary'
        this.$container.setAttribute('role', 'status')

        this.$span = document.createElement('span')
        this.$span.className = 'visually-hidden'
        this.$span.innerHTML = 'Loading...'
    }
    render() {
        this.$bg.appendChild(this.$container)
        this.$container.appendChild(this.$span)
        return this.$bg
    }
}
export default Loading