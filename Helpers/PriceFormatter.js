/**
 * this method get cents and convert it to dollar format
 * @param {Number} cents cents price of product
 */
const priceFormatter = cents =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(cents / 100);

export default priceFormatter;
