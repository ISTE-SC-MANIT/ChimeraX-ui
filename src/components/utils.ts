import cookie from "js-cookie"


export const authenticate = (response, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response.data.token);
    // setCookie('token', response.data.token);
    cookie.set('token', response.data.token)
    // setLocalStorage('user', response.data.user);
    next();
};

export const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

