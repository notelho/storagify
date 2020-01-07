export function type(instance) {

    if (instance === localStorage)
        return 'local storage'

    return 'session storage'
}

export default type