/**
 * The addDecimals function rounds a number to two decimal places.
 * @param num - The `num` parameter in the `addDecimals` function represents a number that you want to
 * round to two decimal places.
 * @returns The function rounds the result to the nearest integer,
 * divides it by 100, and then returns the result as a string with
 * exactly two decimal places using the `toFixed(2)` method.
 */
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

// utility for cartSlice addToCart reducer
export const updateCart = (state) => {
  // Calculate the items price in whole number (pennies) to avoid issues with
  // floating point number calculations
  const itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100,
    0
  );
  state.itemsPrice = addDecimals(itemsPrice);

  // Calculate the shipping price
  const shippingPrice = itemsPrice > 100 ? 0 : 7;
  state.shippingPrice = addDecimals(shippingPrice);

  // Calculate the tax price
  const taxPrice = 0.1 * itemsPrice;
  state.taxPrice = addDecimals(taxPrice);

  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  // Calculate the total price
  state.totalPrice = addDecimals(totalPrice);

  // Save the cart to localStorage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
