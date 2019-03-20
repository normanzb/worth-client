import Emitter from 'reemitter';
import cookie from './cookie';

var data = {
    jwt: null
};

var exportObject = {};
Emitter(exportObject);

for(let key in data) {
    Object.defineProperty(exportObject, key, {
        get: function () {
            var ret;

            if (data[key]) {
                ret = data[key];
            }
            else {
                ret = cookie.get(key) || null;
            }

            return ret;
        },
        set: function(value) {
            var old = data[key];
            if (old === value) {
                return;
            }

            cookie.set(key, value);

            data[key] = value;
            this.emit(key, value);
        }
    });
}

export default exportObject;