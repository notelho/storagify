import { storagify } from '../index.js'

function main() {

    tests()

    let body = document.querySelector('body')
    let js = document.createElement('div')
    js.id = "js"
    js.innerHTML = "js"
    body.appendChild(js)

}

function tests() {

    storagify.init('mykey')

    console.log(localStorage)

    localStorage.list()

}

main()