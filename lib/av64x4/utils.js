export default () => {

    if (!String.prototype.includes) {
        String.prototype.includes = function (search, start) {
            'use strict';

            if (typeof start !== 'number')
                start = 0;

            return start + search.length > this.length ?
                false : this.indexOf(search, start) !== -1

        }
    }

}

// return av_char_64.split('')[b[it(b, k)][jt(b, v, it(b, k))]]