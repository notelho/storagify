import { AV64X4 } from '../index.js'

function main() {

    tests()

    let body = document.querySelector('body')
    let js = document.createElement('div')
    js.id = "js"
    js.innerHTML = "js"
    body.appendChild(js)

}

function tests() {

    let key = 'mysupersecretkey'
    let value = 'my super secret message'

    console.log('/==========================================================================/');

    let av64x4 = new AV64X4(key)
    console.log(key)
    console.log(value)

    let encoded = av64x4.encode(value)
    console.log('encoded:')
    console.log(encoded)

    let decoded = av64x4.decode(encoded)
    console.log('decoded:')
    console.log(decoded)

    let when = av64x4.when(encoded)
    console.log('when:')
    console.log(when)

    console.log('/==========================================================================/');

}

main()