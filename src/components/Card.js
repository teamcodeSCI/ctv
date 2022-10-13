class Card {
    $container
    $card
    $cardBody
    $number
    $title
    $progress
    $progressBar
    constructor({ value, title, percent }) {
        this.$container = document.createElement('div')
        this.$container.className = 'col-sm-6 col-lg-4 mb-4'

        this.$card = document.createElement('div')
        this.$card.className = 'card'

        this.$cardBody = document.createElement('div')
        this.$cardBody.className = 'card-body'

        this.$number = document.createElement('div')
        this.$number.className = 'fs-4 fw-semibold'
        this.$number.innerHTML = value

        this.$title = document.createElement('div')
        this.$title.innerHTML = title

        this.$progress = document.createElement('div')
        this.$progress.className = 'progress progress-thin my-2'

        this.$progressBar = document.createElement('div')
        this.$progressBar.className = 'progress-bar bg-primary'
        this.$progressBar.style.width = `${percent}%` || `25%`
    }
    render() {
        this.$container.appendChild(this.$card)
        this.$card.appendChild(this.$cardBody)
        this.$cardBody.appendChild(this.$number)
        this.$cardBody.appendChild(this.$title)
        this.$cardBody.appendChild(this.$progress)
        this.$progress.appendChild(this.$progressBar)
        return this.$container
    }
}
export default Card