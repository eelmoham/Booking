import Cookies from 'js-cookie';

const restoreDataFromCookie = () => {
  const cookieData = Cookies.get('myData');
  if (cookieData) {
    return JSON.parse(cookieData);
  }
  return null;
};

export default restoreDataFromCookie;