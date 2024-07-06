const getTokenFromStorage = () => {
  let token = '';
  const userStringified = localStorage.getItem('user') || '';
  try {
    const user = JSON.parse(userStringified);
    if (!(user && user.token)) {
      return;
    }

    token = user.token;
  } catch (error) {
    //
  }

  // eslint-disable-next-line consistent-return
  return token;
};

// const actions = {
//   set: (itemName, item) => localStorage.setItem(itemName, item),
//   get: (item) => localStorage.getItem(item),
//   clear: () => localStorage.clear(),
// };

// const useLocalStorage = (action) => actions[action];

// export default useLocalStorage;
export default getTokenFromStorage;
