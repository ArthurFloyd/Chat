const actions = {
  set: (itemName, item) => localStorage.setItem(itemName, item),
  get: (item) => localStorage.getItem(item),
  login: (token, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  },
  clear: () => localStorage.clear(),
};

const useLocalStorage = (action) => actions[action];

export default useLocalStorage;
