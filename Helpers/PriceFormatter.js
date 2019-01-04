/**
 * this method get
 */
const priceFormatter = cents =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(cents / 100);

export default priceFormatter;
