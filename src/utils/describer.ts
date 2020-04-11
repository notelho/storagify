// export function describer(

//     instance: Storage,

//     action: string,

//     callback?: Function

// ) {

//     let ret = undefined

//     if (instance['__debug'])
//         console.warn(action)

//     if (callback) {

//         try {
//             ret = callback()

//             if (
//                 instance['__stringfy'] &&
//                 ret && typeof ret !== 'object'
//             ) ret = JSON.stringify(ret)

//         } catch (err) {

//             console.warn('Something went wrong. This is probably a key conflict error. Make sure you always boot with the same key.')

//         }

//     }

//     return ret

// }