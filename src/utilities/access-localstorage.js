const setTokenToLocalStorage = (token) => {
  localStorage.setItem("access-token", token);
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("access-token");
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("access-token");
};

export {
  setTokenToLocalStorage,
  removeTokenFromLocalStorage,
  getTokenFromLocalStorage,
};
