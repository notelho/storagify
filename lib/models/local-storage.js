import { AbstractStorage } from './abstract-storage.js';

export class LocalStorage extends AbstractStorage {

    constructor(options) {
        super(options)
    }

    getItem(key) {
        return this.get(key, localStorage)
    }

    setItem(key, value) {
        this.set(key, value, localStorage)
    }

    removeItem(key) {
        this.delete(key, localStorage)
    }
}