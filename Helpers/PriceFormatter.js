/**
 * this method get cents and convert it to dollar format
 * @param {Number} cents cents price of product
 */
const priceFormatter = cents =>
  (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

export default priceFormatter;
