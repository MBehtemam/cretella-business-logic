const sortDESC = (items, property) =>
  items.sort((item1, item2) => item2[property] - item1[property]);
export default sortDESC;
