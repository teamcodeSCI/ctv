const URL = 'src/apis/company.json'
export const getAllCompany = async() => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        return data;
    } catch (e) {
        console.log(e)
    }
}