import setCookie from "js-cookie"


export const authenticate = (response, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    setCookie('token', response.token);
    // setLocalStorage('user', response.data.user);
    next();
};