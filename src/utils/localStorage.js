export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key, defaultValue) => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};
