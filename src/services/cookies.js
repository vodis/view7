import Cookie from 'js-cookie';

class Cookies {
    set = (uid) => Cookie.set('uid', uid)
    get = () => Cookie.get('uid');
    remove = () => Cookie.remove('uid')
}

export default new Cookies();