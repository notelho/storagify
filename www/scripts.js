

function main() {

    tests()

    let body = document.querySelector('body')
    let js = document.createElement('div')
    js.id = "js"
    js.innerHTML = "js"
    body.appendChild(js)

}

function tests() {

    Storage.prototype._setItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function (key, value) {
        console.log(`will this work?`);
        console.log(this === sessionStorage);
        this._setItem(key, value)
    }

    sessionStorage.setItem('pica', 'racassica')
    localStorage.setItem('teste', 'teste')

}

main()