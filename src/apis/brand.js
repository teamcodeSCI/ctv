const URL = 'src/apis/brand.json'
export const getAllBrand = async() => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        return data;
    } catch (e) {
        console.log(e)
    }
}