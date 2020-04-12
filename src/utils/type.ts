export function type(instance: Storage): string {

    const local = 'local storage';
    const session = 'session storage';

    if (instance === localStorage) {
        return local;
    } else if (instance === sessionStorage) {
        return session;
    }

    return '';
}

export default type;