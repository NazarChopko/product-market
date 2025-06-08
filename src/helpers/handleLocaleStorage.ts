export const setLocaleStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocaleStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocaleStorage = (key: string) => {
  localStorage.removeItem(key);
};
