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

    let value = {
        test: true,
        value: 2,
        myarray: [1, 2, 3, 4, 5, 6]
    }

    storagify.init('mysupersecretkey', { dev: true })

    storagify.storage.setItem('myobject', value)

    let a = storagify.storage.getItem('myobject')

    console.log(a);


}

main()