import cookie from "js-cookie"


export const authenticate = (response, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response.data.token);
    // setCookie('token', response.data.token);
    cookie.set('token', response.data.token)
    // setLocalStorage('user', response.data.user);
    next();
};

