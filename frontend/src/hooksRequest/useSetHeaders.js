// import useLocalStorage from './useLocalStorage';

// const useSetHeaders = (headers) => {
//   const token = useLocalStorage('get')('token');
//   headers.set('Authorization', `Bearer ${token}`);

//   return headers;
// };

// export default useSetHeaders;
import getTokenFromStorage from './useLocalStorage';

const useSetHeaders = (headers) => {
  const token = getTokenFromStorage;
  headers.set('Authorization', `Bearer ${token}`);

  return headers;
};

export default useSetHeaders;
