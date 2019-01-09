/**
 * this method get cents and convert it to dollar format
 * @param {Number} cents cents price of product
 */
const priceFormatter = cents => `$${parseFloat(cents / 100).toFixed(2)}`;

export default priceFormatter;
