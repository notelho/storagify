import thrower from "./thrower";

export function checkInstance() {
    if (!localStorage || !sessionStorage) {
        thrower('instance-notfound');
    }
}

export default checkInstance;