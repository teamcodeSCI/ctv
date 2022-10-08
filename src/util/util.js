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