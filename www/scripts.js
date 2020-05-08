
var storagify = require('storagify');

console.log(storagify);

function test() {
	// storagify.init('mykey', { development: true });
	// localStorage.setItem('storagify', 'storagify');
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
