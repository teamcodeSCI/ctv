const app = document.getElementById('root')
let currentComponent = null;
export const setComponent = (component) => {
    if (currentComponent) {
        app.removeChild(currentComponent);
    }
    currentComponent = app.appendChild(component.render())
}