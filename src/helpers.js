//helper function to filter entries
const filterEntries = (entriesArray, Year) => {
  let results = entriesArray.filter(
    (entry) => entry.date.getFullYear() === Number(Year)
  );
  return results;
};

// const compareDates = (date1, date2){

// }
export { filterEntries };
