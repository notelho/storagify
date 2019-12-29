import { storagify } from '../index.js';

function main() {

    tests()

    let body = document.querySelector('body')
    let js = document.createElement('div')
    js.id = "js"
    js.innerHTML = "js"
    body.appendChild(js)

}

function tests() {

    storagify.init('abcdefga11111111', {
        dev: false, debug: false
    })

    storagify.storage.setItem('abcdefga11111111', { a: 'b' })




}

main()