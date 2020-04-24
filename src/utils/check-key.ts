import thrower from "./thrower";

export function checkKey(key: string) {
    if (!key || typeof key !== 'string') {
        thrower('key-notfound');
    }
}

export default checkKey;