const dateFormatter = inputDateString => {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 8); //gettind one day before last week
  const inputDate = new Date(inputDateString);
  if (inputDate > lastWeek) {
    //it's should return day string diff
    const diff = new Date().getTime() - inputDate.getTime();
    const milliSecondsInDay = 60 * 1000 * 60 * 24;
    const days = Math.round(diff / milliSecondsInDay);

    return days > 0 ? `${days} days ago` : "today";
  } else {
    return inputDate.toDateString();
  }
};
export default dateFormatter;
