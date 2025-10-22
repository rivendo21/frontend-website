export const getProducts = () => {
  return JSON.parse(localStorage.getItem("products")) || [];
};

export const saveProducts = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
