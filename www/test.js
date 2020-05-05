
//     // return options , { debug: true, stringfy: true}
//     console.warn('start');

//     localStorage.setItem('teste', JSON.stringify({ a: 'b' }))
//     localStorage.setItem('teste2', 'teste2')
//     localStorage.setItem('teste3', null)

//     console.log(localStorage.getItem('teste'))
//     console.log(localStorage.getItem('teste2'))
//     console.log(localStorage.getItem('teste3'))

//     setTimeout(() => {

//         console.warn('default to prod:');
//         storagify.init('test')

//         console.log(localStorage.getItem('teste'))
//         console.log(localStorage.getItem('teste2'))
//         console.log(localStorage.getItem('teste3'))

//         setTimeout(() => {

//             console.warn('prod to dev:');
//             storagify.init('test', { dev: true })

//             console.log(localStorage.getItem('teste'))
//             console.log(localStorage.getItem('teste2'))
//             console.log(localStorage.getItem('teste3'))

//             setTimeout(() => {

//                 console.warn('dev to prod:');
//                 storagify.init('test')

//                 console.log(localStorage.getItem('teste'))
//                 console.log(localStorage.getItem('teste2'))
//                 console.log(localStorage.getItem('teste3'))

//             }, 2000)
//         }, 2000)
//     }, 2000)
