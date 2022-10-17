class Profile {
    $container
    constructor() {
        this.$container = document.createElement('div')
        this.$container.innerHTML = 'Profile'
    }
    render() {
        return this.$container
    }
}
export default Profile