const actions = {
  set: (itemName, item) => localStorage.setItem(itemName, item),
  get: (item) => localStorage.getItem(item),
  clear: () => localStorage.clear(),
};

const useLocalStorage = (action) => actions[action];

export default useLocalStorage;
