import Loading from "../components/Loading.js";

const load = new Loading()
const app = document.getElementById('root')
let currentComponent = null;
export const setComponent = (component) => {
    if (currentComponent) {
        app.removeChild(currentComponent);
    }
    currentComponent = app.appendChild(component.render())
}
export const loading = (bg, isLoading) => {
    if (!isLoading) {
        bg.removeChild(load.render())
        return
    }
    bg.appendChild(load.render())
    return
}