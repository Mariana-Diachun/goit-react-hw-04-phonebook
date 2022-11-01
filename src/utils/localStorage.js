export const getItem = () => {
  return JSON.parse(localStorage.getItem('contacts'));
};
