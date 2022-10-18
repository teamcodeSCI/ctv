import Customer from "../components/Customer.js";
import Document from "../components/Document.js";
import Profile from "../components/Profile.js";
import Report from "../components/Report.js"

const report = new Report();
const document = new Document()
const customer = new Customer()

const profile = new Profile()
export const menu = [{
    icon: 'bi bi-flag',
    text: 'Báo cáo',
    link: 'report',
    component: report
}, {
    icon: 'bi bi-file-earmark-pdf',
    text: ' Tài liệu',
    link: 'document',
    component: document
}, {
    icon: 'bi bi-person-lines-fill',
    text: 'Quản lí khách hàng',
    link: 'customer',
    component: customer
}]
export const info = [{
    link: 'info',
    component: profile
}]