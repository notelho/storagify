# Storagify

Storagify is a open-source front-end library that builds a superset based on browser storages, localStorage and sessionStorage. It offers additional functions and encryption automatically, as well as several options for development, integration and especially compatibility.

Official documentation will be released soon.

## Installation

Use the node package manager [NPM](https://www.npmjs.com/package/storagify) to install it.

```bash
npm i storagify
yarn i storagify
```

## Usage

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
    <script src="./node_modules/storagify/index.js" type="text/javascript"></script>
</body>
</html>
```

### Basic methods usage:
```javascript
storagify.init('myencryptionkey')
// no JSON.stringfy is required anymore 
localStorage.setItem('teste', { a: 'b' })
localStorage.setItem('teste2', 'teste2')
localStorage.setItem('teste3', null)

// also, no JSON.parse again
console.log(localStorage.getItem('teste'))
console.log(localStorage.getItem('teste2'))
console.log(localStorage.getItem('teste3'))

localStorage.list() // returns all Storage instance keys
localStorage.when('key') // returns when value was created
localStorage.getItem('key') // returns item, as default
localStorage.setItem('key', anyvalue) // set item, as default
localStorage.removeItem('key') // remove item, as default
localStorage.clear() // clear storage instance, as default
```

## Options

Storagify has three main options: development mode, debug and stringfy.


```javascript
 storagify.init('myencryptionkey', {dev: true})
 storagify.init('myencryptionkey', {debug: true})
 storagify.init('myencryptionkey', {stringfy: true})
```

- dev: Disables encryption to enable viewing on the storage in question.
- debug: console.warn() all methods before execution.
- stringfy: Makes integration with older systems possible by always returning a string instead of automatic JSON.parse.

## Contributing
The library is in the testing phase and may be modified. You can contribute by reporting errors or suggesting new features [HERE](https://github.com/notelho/storagify/issues).

## License
[MIT](https://choosealicense.com/licenses/mit/)