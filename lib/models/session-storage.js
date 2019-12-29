import { AbstractStorage } from './abstract-storage.js';

export class SessionStorage extends AbstractStorage {

    constructor(options) {
        super(options)
    }

    getItem(key) {
        return this.get(key, sessionStorage)
    }

    setItem(key, value) {
        this.set(key, value, sessionStorage)
    }

    removeItem(key) {
        this.delete(key, sessionStorage)
    }
}