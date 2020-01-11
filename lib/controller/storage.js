import base from './base.js'
import proto from './proto.js'

export const storage = {

    base: (args, init) => base(args, init),

    proto: (args, init) => proto(args, init),

    start: () => {
        localStorage.start()
        sessionStorage.start()
    }

}

export default storage