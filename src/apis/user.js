const URL = 'src/apis/user.json'
const getAllUser = async() => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        return data;
    } catch (e) {
        console.log(e)
    }
}
const getUserByPhoneNumber = async(phonenumber) => {
    try {
        const allUser = await getAllUser()
        const user = allUser.filter(e => {
            return e.phonenumber === phonenumber
        })
        return user[0]
    } catch (e) {
        console.log(e)
    }
}
const login = async(phonenumber, password) => {
    try {
        const user = await getUserByPhoneNumber(phonenumber)
        if (!user) {
            console.log('user not found')
            return
        }
        if (phonenumber !== user.phonenumber || password !== user.password) {
            console.log('wrong phone number or passsword')
            return
        }
        return {
            phonenumber: user.phonenumber,
            password: user.password,
            isLogin: true
        }
    } catch (e) {
        console.log(e)
    }

}


export { login }