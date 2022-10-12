const URL = '/src/apis/user.json'
const getAllUser = async() => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        return data;
    } catch (e) {
        console.log(e)
    }
}
const getUserByPhoneNumber = async(phoneNumber) => {
    try {
        const allUser = await getAllUser()
        const user = allUser.filter(e => {
            return e.phoneNumber === phoneNumber
        })
        return user[0]
    } catch (e) {
        console.log(e)
    }
}
const login = async(phoneNumber, password) => {
    try {
        const user = await getUserByPhoneNumber(phoneNumber)
        if (!user) {
            console.log('user not found')
            return
        }
        if (phoneNumber !== user.phoneNumber || password !== user.password) {
            console.log('wrong phone number or passsword')
            return
        }
        return {
            phoneNumber: user.phoneNumber,
            password: user.password,
            isLogin: true
        }
    } catch (e) {
        console.log(e)
    }

}


export { login }