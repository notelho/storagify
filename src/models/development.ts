
// import { Abstract } from './abstract.js'
// import { converter } from '../utils/converter.js'
// import { consts } from '../controller/consts.js'

export class Development {

    //     constructor() {
    //         super()
    //     }


}

export default Development


// export class Development extends Abstract {
 
//     get(key, instance) {
//         const base = this._translate(instance).base,
//             value = base.getItem(`${consts.devkey}${key}`),
//             parsed = this._parse(value)
//         return parsed.val
//     }

//     set(key, value, instance, timestamp = null) {
//         const base = this._translate(instance).base
//         if (!value)
//             value = null
//         key = `${consts.devkey}${key}`
//         value = {
//             val: this._parse(value),
//             timestamp: timestamp ?
//                 timestamp :
//                 new Date().getTime()
//         }
//         base.setItem(key, JSON.stringify(value))
//     }

//     delete(key, instance) {
//         this._translate(instance)
//             .base
//             .removeItem(`${consts.devkey}${key}`)
//     }

//     list(instance) {
//         return new Array(this._len(instance))
//             .fill(false)
//             .map((v, i) => i)
//             .map((v) => instance.key(v))
//             .map((v) => v = v.replace(consts.devkey, ''))
//     }

//     when(key, instance) {
//         const
//             base = this._translate(instance).base,
//             value = base.getItem(`${consts.devkey}${key}`),
//             parsed = this._parse(value)
//         return new Date(parsed.timestamp)
//     }

//     clear(instance) {
//         this._translate(instance)
//             .base
//             .clear()
//     }

//     start(instance) {
//         const
//             { encoder, base } = this._translate(instance),
//             keys = new Array(this._len(instance))
//                 .fill(false)
//                 .map((v, i) => i)
//                 .map((v) => instance.key(v))

//         for (let k of keys) {
//             if (converter.isProd(k, base, encoder)) {
//                 let d = converter.prodToDev(k, base, encoder)
//                 this.set(d.key, d.value, instance, d.when)
//             } else if (!converter.isDev(k, base)) {
//                 let d = converter.defaultToDev(k, base)
//                 this.set(d.key, d.value, instance)
//             }
//         }
//     }

// }