import Communicate from "../components/Communicate.js";
import Customer from "../components/Customer.js";
import Document from "../components/Document.js";
import Profile from "../components/Profile.js";
import Report from "../components/Report.js"

const report = new Report();
const document = new Document()
const customer = new Customer()
const communicate = new Communicate()
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
}, {
    icon: 'bi bi-chat-dots',
    text: 'Quản lí giao tiếp',
    link: 'communicate',
    component: communicate
}]
export const info = [{
    link: 'info',
    component: profile
}]