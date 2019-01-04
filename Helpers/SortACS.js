const sortACS = (items, property) =>
  items.sort((item1, item2) => item1[property] - item2[property]);
export default sortACS;
