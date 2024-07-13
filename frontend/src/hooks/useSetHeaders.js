import useLocalStorage from './useLocalStorage';

const useSetHeaders = (headers) => {
  const token = useLocalStorage('get')('token');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};

export default useSetHeaders;
