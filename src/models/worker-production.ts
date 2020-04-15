export class Production {

}

export default Production

// import { Abstract } from './abstract.js'
// import { converter } from '../utils/converter.js'

// export class Production extends Abstract {

//     constructor() {
//         super()
//     }

//     get(key, instance) {
//         const
//             { encoder, base } = this._translate(instance),
//             value = base.getItem(encoder.hash(key)),
//             decoded = encoder.decode(value)
//         return this._parse(decoded)
//     }

//     set(key, value, instance, timestamp = null) {
//         const { encoder, base } = this._translate(instance)
//         if (!value) value = "null"
//         if (typeof value !== 'string') value = JSON.stringify(value)
//         key = encoder.hash(key)
//         value = encoder.encode(value, timestamp)
//         base.setItem(key, value)
//     }

//     delete(key, instance) {
//         const { encoder, base } = this._translate(instance)
//         base.removeItem(encoder.hash(key))
//     }

//     list(instance) {
//         const encoder = this._translate(instance).encoder
//         return new Array(this._len(instance))
//             .fill(false)
//             .map((v, i) => i)
//             .map((v) => encoder.value(instance.key(v)))
//     }

//     when(key, instance) {
//         const
//             { encoder, base } = this._translate(instance),
//             value = base.getItem(encoder.hash(key)),
//             timestamp = encoder.when(value)
//         return timestamp
//     }

//     clear(instance) {
//         this._translate(instance).base.clear()
//     }

//     start(instance) {
//         const { encoder, base } = this._translate(instance),
//             keys = new Array(this._len(instance))
//                 .fill(false)
//                 .map((v, i) => i)
//                 .map((v) => instance.key(v))
//         for (let key of keys) {
//             if (converter.isDev(key, base)) {
//                 let d = converter.devToProd(key, base)
//                 this.set(d.key, d.value, instance, d.when)
//             } else if (!converter.isProd(key, base, encoder)) {
//                 let d = converter.defaultToProd(key, base)
//                 this.set(d.key, d.value, instance)
//             }
//         }
//     }

// }