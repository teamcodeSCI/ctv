import { menu } from "./routes.js";

let currentComponent = null;
export const setComponent = (container, component) => {

    if (currentComponent) {

        container.removeChild(currentComponent);
    }
    currentComponent = container.appendChild(component.render())
}
export const getComponent = (container) => {
    for (let item of menu) {
        if (sessionStorage.getItem('link') === item.link) {
            setComponent(container, item.component)
            return;
        }
    }
    setComponent(container, menu[0].component)
}