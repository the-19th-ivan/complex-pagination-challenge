const nameGenerator = require("./generateName.util");
const { firstNames, lastNames } = require("./names.model");

const numberOfRandomNames = 70; // Adjust the total number of items as needed
const randomNames = nameGenerator(numberOfRandomNames, firstNames, lastNames);

// Cursor-based Pagination Algorithm
const pagination = (pageNumber, cursor, globalItemNumber) => {
  const maxPageSize = pageNumber === 1 ? 20 : 45; // either 20 or 45
  let start, end; // to determine which items to fetch

  // on page 1
  if (maxPageSize === 20) {
    start = 0;
    end = maxPageSize;
    // the rest page
  } else {
    start = cursor;
    end = cursor + maxPageSize;
  }

  const pageItems = randomNames.slice(start, end); // get the items
  return [pageItems, end, globalItemNumber]; // end = cursor, globalItemNumber = index
};

module.exports = {
  randomNames,
  pagination,
};
