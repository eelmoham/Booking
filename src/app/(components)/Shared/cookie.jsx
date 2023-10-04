import Cookies from 'js-cookie';

const setCookieData = (data) => {
  Cookies.set('myData', JSON.stringify(data));
  return {
    type: 'SET_COOKIE_DATA',
    payload: data,
  };
};

export default setCookieData;