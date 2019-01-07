/**
 * this method get min,max and array of exclude number and return number
 * a random number that not in exclude number arrays
 * @param {Number} min Mininum number in range
 * @param {Number} max Maximum number in range
 * @param {Arrays} excludeNumbers Array of numbers as exclude number
 */
const GenerateRandomNumber = (min = 1, max = 10, excludeNumbers = []) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return excludeNumbers.indexOf(num) > -1
    ? GenerateRandomNumber(min, max, excludeNumbers)
    : num;
};
export default GenerateRandomNumber;
