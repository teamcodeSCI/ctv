import Loading from "../components/Loading.js";

const load = new Loading()
export const app = document.getElementById('root')

export const loading = (isLoading) => {
    if (!isLoading) {
        app.removeChild(load.render())
        return
    }
    app.appendChild(load.render())
    return
}

export const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
export const getFileSize = async(url) => {
    try {
        const response = await fetch(url)
        const blob = await response.blob()
        const size = formatBytes(blob.size)
        return size;

    } catch (e) {
        console.log(e)
        return toString(e)
    }
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
export const statusList = [{
    name: 'Tất cả'
}, {
    name: 'Thành công'
}, {
    name: 'Outsold'
}, {
    name: 'Đang xử lý'
}, {
    name: 'Xác nhận'
}, {
    name: 'Chưa xác nhận'
}, {
    name: 'Khách không đến'
}, {
    name: 'Đặt cọc'
}, {
    name: 'Hủy'
}]
export const customerList = [{
    booking: 'booking1',
    creator: 'Người tạo 1',
    service: 'dịch vụ 1',
    createAt: '20-09-2022',
    appointmentDate: '21-09-2022',
    arrivalDate: '22-09-2022',
    name: 'Nguyễn Văn A',
    phonenumber: '012134511',
    status: 'Thành công'
}, {
    booking: 'booking2',
    creator: 'Người tạo 1',
    service: 'dịch vụ 1',
    createAt: '20-09-2022',
    appointmentDate: '21-09-2022',
    arrivalDate: '22-09-2022',
    name: 'Nguyễn Văn AB',
    phonenumber: '012134511',
    status: 'Đặt cọc'
}, {
    booking: 'booking3',
    creator: 'Người tạo 1',
    service: 'dịch vụ 1',
    createAt: '20-09-2022',
    appointmentDate: '21-09-2022',
    arrivalDate: '22-09-2022',
    name: 'Nguyễn Văn ABC',
    phonenumber: '012134511',
    status: 'Thành công'
}, {
    booking: 'booking4',
    creator: 'Người tạo 1',
    service: 'dịch vụ 1',
    createAt: '20-09-2022',
    appointmentDate: '21-09-2022',
    arrivalDate: '22-09-2022',
    name: 'Nguyễn Văn A',
    phonenumber: '012134511',
    status: 'Đặt cọc'
}, {
    booking: 'booking5',
    creator: 'Người tạo 1',
    service: 'dịch vụ 1',
    createAt: '20-09-2022',
    appointmentDate: '21-09-2022',
    arrivalDate: '22-09-2022',
    name: 'Nguyễn Văn D',
    phonenumber: '012134511',
    status: 'Thành công'
}, {
    booking: 'booking6',
    creator: 'Người tạo 1',
    service: 'dịch vụ 1',
    createAt: '20-09-2022',
    appointmentDate: '21-09-2022',
    arrivalDate: '22-09-2022',
    name: 'Nguyễn Văn X',
    phonenumber: '012134511',
    status: 'Đang xử lý'
}, {
    booking: 'booking7',
    creator: 'Người tạo 1',
    service: 'dịch vụ 1',
    createAt: '20-09-2022',
    appointmentDate: '21-09-2022',
    arrivalDate: '22-09-2022',
    name: 'Nguyễn Văn Y',
    phonenumber: '012134511',
    status: 'Đặt cọc'
}]
export const doc = [{ name: 'Cẩm nang tư vấn dịch vụ theo bảng giá', file: 'assets/files/cam-nang-tu-van-theo-gia-dich-vu.xlsx' }]