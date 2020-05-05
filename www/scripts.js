
import init from '../lib/index.js';

function test() {

    init('mykey');

    localStorage.setItem('storagify', 'storagify')



}

function success() {

    let body = document.querySelector('body');
    let js = document.createElement('div');

    js.id = "js";
    js.innerHTML = "js";

    body.appendChild(js);

}

function main() {

    test();

    success();

}

main();