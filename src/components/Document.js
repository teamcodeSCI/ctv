import { doc } from "../util/util.js";
import DocItem from "./DocItem.js";

class Document {
    $container;
    $header;
    $table;
    $thead;
    $theadTr;

    $number
    $name
    $size
    $download

    $item
    constructor() {
        this.$container = document.createElement('div')
        this.$container.className = 'container'

        this.$header = document.createElement('div')
        this.$header.className = 'fs-2 fw-semibold my-4'
        this.$header.innerHTML = 'Tài liệu'

        this.$table = document.createElement('table')
        this.$table.className = 'table border table-striped bg-white'

        this.$thead = document.createElement('thead')

        this.$headerTr = document.createElement('tr')

        this.$number = document.createElement('th')
        this.$number.innerHTML = 'STT'

        this.$name = document.createElement('th')
        this.$name.innerHTML = 'Tên'

        this.$size = document.createElement('th')
        this.$size.innerHTML = 'Dung lượng'

        this.$download = document.createElement('th')
        this.$download.innerHTML = 'Tải xuống'

        this.$tbody = document.createElement('tbody')
        this.renderItem()

    }
    renderItem() {
        this.$tbody.innerHTML = ''
        doc.map((item, idx) => {
            this.$item = new DocItem({ number: idx + 1, ...item })
            this.$tbody.appendChild(this.$item.render())
        })
    }
    render() {
        this.$container.appendChild(this.$header)
        this.$container.appendChild(this.$table)
        this.$table.appendChild(this.$thead)
        this.$thead.appendChild(this.$headerTr)
        this.$headerTr.appendChild(this.$number)
        this.$headerTr.appendChild(this.$name)
        this.$headerTr.appendChild(this.$size)
        this.$headerTr.appendChild(this.$download)
        this.$table.appendChild(this.$tbody)

        return this.$container
    }
}
export default Document