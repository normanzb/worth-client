import jsCookie from 'js-cookie';
import cookieUtil from 'cookie';

var cookie = {};
var RES_COOKIE = 'Set-Cookie';

cookie.init = function(getIntialPropParam) {
    cookie.req = getIntialPropParam.req;
    cookie.res = getIntialPropParam.res;
};

cookie.get = function (key) {
    if (typeof window !== 'undefined') {
        return jsCookie.get(key);
    }
    else {
        var cookieReqString = cookie.req.headers.cookie;
        if (!cookieReqString) {
            return null;
        }
        var cookies = cookieUtil.parse(cookieReqString);
        return cookies[key];
    }
};

cookie.set = function (key, value) {
    if (typeof window !== 'undefined') {
        jsCookie.set(key, value);
    }
    else {
        var existing = cookie.req.getHeader(RES_COOKIE);
        var cookies = [];

        if (existing) {
            cookies.push(existing);
        }
        cookies.push(cookieUtil.cookie.serialize('name', value));
        cookie.req.setHeader(RES_COOKIE, cookies.join('; '));
    }
};


export default cookie;