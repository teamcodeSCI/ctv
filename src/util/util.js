import Loading from "../components/Loading.js";

const load = new Loading()
export const app = document.getElementById('root')

export const loading = (bg, isLoading) => {
    if (!isLoading) {
        bg.removeChild(load.render())
        return
    }
    bg.appendChild(load.render())
    return
}

export const renderUserId = () => {
    const random = Math.floor(1000 + Math.random() * 9000)
    return `CTV-${random}`
}

export const companyList = [{
    code: 'KN',
    name: 'Kangnam'
}, {
    code: 'DA',
    name: 'Đông Á'
}, {
    code: 'PR',
    name: 'Paris'
}, {
    code: 'HH',
    name: 'Hồng Hà'
}, {
    code: 'RH',
    name: 'Richard Huy'
}, {
    code: 'SCI',
    name: 'SCI'
}]
export const brandList = [{
    code: 'KN',
    name: 'Kangnam'
}, {
    code: 'DA',
    name: 'Đông Á'
}, {
    code: 'PR',
    name: 'Paris'
}, {
    code: 'HH',
    name: 'Hồng Hà'
}, {
    code: 'RH',
    name: 'Richard Huy'
}, {
    code: 'SCI',
    name: 'SCI'
}]
export const sourceList = [{
    code: 'CTV01',
    name: 'CTV_Bên ngoài (Sale&MKT)'
}, {
    code: 'CTV02',
    name: 'CTV_Bên ngoài (Chi nhánh)'
}, {
    code: 'CTV04',
    name: 'CTV_Nội bộ_Bác sĩ'
}, {
    code: 'CTV06',
    name: 'CTV_Nội bộ_CBNV'
}, {
    code: 'CTV07',
    name: 'CTV_Khách hàng hợp tác'
}]
export const status = [{
    code: 'PENDING',
    name: 'Chưa xử lý'
}, {
    code: 'COMPLETED',
    name: 'Đã xử lý'
}]