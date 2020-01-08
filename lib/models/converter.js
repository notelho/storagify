// import persist from './persist.js'
// import encoder from './encoder.js'

// export const converter = new class {

//     autoSwitch(key, storageInstance) {

//         let
//             value = storageInstance.getItem(key),
//             vDef = value ? true : false,
//             vDev = false,
//             vProd = false

//         try {

//             let parsed = JSON.parse(storageInstance.getItem(key))

//             if (parsed.dev && parsed.dev === this.devkey) {
//                 vDev = true
//                 vDef = false
//             }

//         } catch (err) { }

//         let prodValue = storageInstance.getItem(encoder._force_hash(key))

//         if (typeof prodValue === 'string') {

//             vProd = true

//             try {
//                 if (value === encoder._force_decode(prodValue))
//                     vDef = false
//             } catch (err) { }
//         }

//         if (vDef) {
//             storageInstance.removeItem(key)
//             persist.set(key, value, storageInstance)
//         } else if (vDev && !this.dev)
//             this.devToProd(key, value, storageInstance)
//         else if (vProd && this.dev)
//             this.prodToDev(key, value, storageInstance)

//     }

//     prodToDev(key, value, storageInstance) {

//         let
//             encKey = encoder._force_hash(key),
//             encValue = storageInstance.getItem(encKey)

//         storageInstance.removeItem(encKey)

//         try {
//             value = JSON.parse(encoder._force_decode(encValue))
//             let when = encoder.when(encValue).getTime()
//             persist.set(key, value, storageInstance, parseInt(when))
//         } catch (err) { }
//     }

//     devToProd(key, value, storageInstance) {

//         let
//             v = JSON.parse(value)['value'],
//             w = JSON.parse(value)['when']

//         storageInstance.removeItem(key)
//         storageInstance.setItem(encoder._force_hash(key), encoder._force_encode(JSON.stringify(v), w))
//     }

//     notvalid(key, storageInstance) {
//         return !key || (!storageInstance.getItem(key) && !storageInstance.getItem(encoder._force_hash(key)))
//     }

// }

// export default converter 