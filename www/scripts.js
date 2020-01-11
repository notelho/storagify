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

    storagify.init('test')

    localStorage.setItem('teste', { a: 'b' })
    localStorage.setItem('teste2', 'teste2')
    localStorage.setItem('teste3', null)

    console.warn('start:');
    console.log(localStorage.getItem('teste'))
    console.log(localStorage.getItem('teste2'))
    console.log(localStorage.getItem('teste3'))

    storagify.init('test', { dev: true })

    console.warn('prod to dev:');
    console.log(localStorage.getItem('teste'))
    console.log(localStorage.getItem('teste2'))
    console.log(localStorage.getItem('teste3'))

    storagify.init('test')

    console.warn('dev to prod:');
    console.log(localStorage.getItem('teste'))
    console.log(localStorage.getItem('teste2'))
    console.log(localStorage.getItem('teste3'))

    // setTimeout(() => {

    //     console.warn('test ------------------- 1 ')
    //     localStorage.setItem('teste', { a: 'b' })
    //     localStorage.setItem('teste2', 'teste2')
    //     localStorage.setItem('teste3', null)

    //     setTimeout(() => {

    //         console.warn('test ------------------- 2 ')
    //         console.log(localStorage.getItem('teste'))
    //         console.log(localStorage.getItem('teste2'))
    //         console.log(localStorage.getItem('teste3'))

    //         setTimeout(() => {

    //             console.warn('test ------------------- 3 ')
    //             console.log(localStorage.list())
    //             console.log(localStorage.when('teste'))
    //             localStorage.removeItem('teste2')

    //             setTimeout(() => {

    //                 console.warn('test ------------------- 4 ')
    //                 localStorage.clear()
    //             }, 2000)

    //         }, 2000)
    //     }, 2000)

    // }, 2000)

}

main()