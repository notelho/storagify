import { storagify } from '../index.js'

import {
    init,
    session,
    storage
} from '../index.js'



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
        myarray: [1, 2, 3, 4, 5, 6],
        myarray2: [1, 2, 3, 4, 5, 6]
    }

    // console.warn('====================================================');
    // console.log('test def to prod:');
    // localStorage.setItem('meuitem', 'meu texto')
    // console.log("meuitem:");
    // console.log(localStorage.getItem("meuitem"));
    // storagify.init('mysupersecretkey')
    // console.log(storagify.storage.getItem('meuitem'));

    console.warn('====================================================');
    console.log('test def to dev:');    
    localStorage.setItem('meuitem2', {
        a: 'b',
        c: ['😜', '😜'],
        teste: true
    })
    console.log("meuitem2:");
    console.log(localStorage.getItem("meuitem2"));
    storagify.init('mysupersecretkey',{ dev: true })
    console.log(storagify.storage.getItem('meuitem2'));

    // console.warn('====================================================');
    // console.log('test dev to prod:');
    // console.log("meuitem2:");
    // console.log(localStorage.getItem("meuitem2"));
    // storagify.init('mysupersecretkey')
    // console.log(storagify.storage.getItem('meuitem2'));

    // console.warn('====================================================');
    // console.log('test prod to dev:');
    // console.log("meuitem2:");
    // // console.log(localStorage.getItem("meuitem2"));
    // storagify.init('mysupersecretkey', { dev: true })
    // console.log(storagify.storage.getItem('meuitem2'));

    // console.warn('====================================================');
    // console.log('dev when:');
    // storagify.init('mysupersecretkey', { dev: true })
    // console.log(storagify.storage.when('meuitem2'));

    // console.warn('====================================================');
    // console.log('prod when:');
    // storagify.init('mysupersecretkey')
    // console.log(storagify.storage.when('meuitem2'));

    // console.warn('====================================================');
    // console.log(storagify.storage.list());

    // console.log('====================================================');
    // storagify.init('mysupersecretkey', { dev: true, debug: true })
    // console.log('debugger testing');
    // console.log("abc:");
    // console.log(storagify.storage.when('abc'));
    // console.log(storagify.storage.getItem('meuitem'));
    // console.log('====================================================');

    // init    session    storage

    // console.log('====================================================');
    // init('mysupersecretkey', { dev: true, debug: true })
    // console.log('debugger testing');
    // console.log("abc:");
    // console.log(storage().when('abc'));
    // console.log(storage().getItem('meuitem'));
    // console.log('====================================================');

}

main()