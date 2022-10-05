class Pagination {
    $container;
    $nextBtn;
    $nextLink;
    $preBtn;
    $preLink;
    $numBtn;
    $numLink;
    index = 1;
    dataLength = 0;
    constructor(data) {
        this.dataLength = data;
        this.$container = document.createElement('ul')
        this.$container.id = 'page2'
        this.$container.classList.add('pagination', 'justify-content-center')

        this.$preBtn = document.createElement('li')
        this.$preBtn.classList.add('page-item', 'disabled')
        this.$preBtn.addEventListener('click', () => {
            this.prePage()
        })

        this.$preLink = document.createElement('span')
        this.$preLink.classList.add('page-link')

        this.$preLink.innerHTML = '&laquo;'

        this.$nextBtn = document.createElement('li')
        this.$nextBtn.classList.add('page-item')
        this.$nextBtn.addEventListener('click', () => {
            this.nextPage()
        })

        this.$nextLink = document.createElement('span')
        this.$nextLink.classList.add('page-link')

        this.$nextLink.innerHTML = '&raquo;'


    }
    prePage() {
        if (this.index <= 1) {
            this.$preBtn.classList.add('disabled')
            return
        } else {
            this.index--;
            this.$nextBtn.classList.remove('disabled')
        }
        console.log(this.index);
    }
    nextPage() {
        if (this.index >= this.dataLength) {
            this.$nextBtn.classList.add('disabled')
            return;
        } else {
            this.index++;
            this.$preBtn.classList.remove('disabled')

        }
        console.log(this.index);
    }

    loadPage() {
        const numTemp = (number) => {
            this.$numBtn = document.createElement('li')
            this.$numBtn.classList.add('page-item')

            this.$numLink = document.createElement('span')
            this.$numLink.classList.add('page-link')
            this.$numLink.setAttribute('role', 'button')
            this.$numLink.innerHTML = number

            this.$container.appendChild(this.$numBtn)
            this.$numBtn.appendChild(this.$numLink)
            this.$numBtn.addEventListener('click', () => {
                this.index = number

                if (this.index >= this.dataLength) {
                    this.$nextBtn.classList.add('disabled')
                } else {
                    this.$nextBtn.classList.remove('disabled')
                }
                if (this.index <= 1) {
                    this.$preBtn.classList.add('disabled')
                } else {
                    this.$preBtn.classList.remove('disabled')
                }
                console.log(this.index)
            })
        }
        for (let i = 1; i <= this.dataLength; i++) {
            numTemp(i)
        }
    }
    render() {
        this.$container.appendChild(this.$preBtn)
        this.$preBtn.appendChild(this.$preLink)
        console.log(this.index)
        this.loadPage()

        this.$container.appendChild(this.$nextBtn)
        this.$nextBtn.appendChild(this.$nextLink)
        return this.$container
    }
}
export default Pagination