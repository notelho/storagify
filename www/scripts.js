import { storagify } from '../index.js'

function main() {

    tests()

    let body = document.querySelector('body')
    let js = document.createElement('div')
    js.id = "js"
    js.innerHTML = "js"
    body.appendChild(js)

}
// return options , { debug: true, stringfy: true}
function tests() {

    console.warn('start');

    localStorage.setItem('teste', JSON.stringify({ a: 'b' }))
    localStorage.setItem('teste2', 'teste2')
    localStorage.setItem('teste3', null)

    console.log(localStorage.getItem('teste'))
    console.log(localStorage.getItem('teste2'))
    console.log(localStorage.getItem('teste3'))

    setTimeout(() => {
        7
        console.warn('default to prod:');
        storagify.init('test')

        console.log(localStorage.getItem('teste'))
        console.log(localStorage.getItem('teste2'))
        console.log(localStorage.getItem('teste3'))

        setTimeout(() => {

            console.warn('prod to dev:');
            storagify.init('test', { dev: true })

            console.log(localStorage.getItem('teste'))
            console.log(localStorage.getItem('teste2'))
            console.log(localStorage.getItem('teste3'))

            setTimeout(() => {

                console.warn('dev to prod:');
                storagify.init('test')

                console.log(localStorage.getItem('teste'))
                console.log(localStorage.getItem('teste2'))
                console.log(localStorage.getItem('teste3'))

            }, 2000)
        }, 2000)
    }, 2000)

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