

// // import cryptojs from 'crypto-js';

// // /*
// //  * Key AES (key)
// //  */
// // const ak: string = 'QENPTk5FQ1RNSVgyMDE5'

// // /*
// //  * Key SHA (value)
// //  */
// // const sk: string = 'MjAxOUNPTk5FQ1RNSVhA'

// export class Encoder {

//     constructor(key: string) {

//     }

//     when(str) {
//         return this.av64x4.when(str)
//     }

//     hash(str) {
//         return AV.encode64(str)
//     }

//     value(str) {
//         return AV.decode64(str)
//     }

//     encode(str, timestamp = null) {
//         return this.av64x4.encode(str, timestamp)
//     }

//     decode(str) {
//         return this.av64x4.decode(str)
//     }

// }

// import { isDevMode } from '@angular/core';
 

// /*
//  * SHA1 HASH
//  */
// export function shaEncode(key: string): string {
//     return isDevMode() ?
//         key :
//         cryptojs.SHA1(sk + key)
// }

// /*
//  * AES ENCRYPT
//  */
// export function aesEncrypt(value: any): string {
//     return isDevMode() ?
//         value :
//         cryptojs.AES.encrypt(value, ak)
// }

// /*
//  * AES DECRYPT
//  */
// export function aesDecrypt(value: any): string {

//     if (!isDevMode()) {
//         let d = cryptojs.AES.decrypt(value, ak)
//         return d.toString(cryptojs.enc.Utf8)
//     }

//     return value
// }
