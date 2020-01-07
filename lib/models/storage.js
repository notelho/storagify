import base from './base.js'
import proto from './proto.js'

export const storage = {

    base: args => base(args),

    proto: args => proto(args),

    start: args => {
        localStorage._start()
        sessionStorage._start()
    }

}

export default storage

