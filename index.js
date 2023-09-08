const { randomNames, pagination } = require("./paginator.util");

let cursor = 0; // the last item of the previous page
let itemNumber = 0; // for index
let page = 1; // default

// Calculate the total number of pages
const totalItems = randomNames.length;
const maxItemsOnFirstPage = 20;
const maxItemsOnSucceedingPages = 45;

// Formula for getting accurate total pages
const totalPages =
  Math.ceil((totalItems - maxItemsOnFirstPage) / maxItemsOnSucceedingPages) + 1;

// Loop over until all random names are displayed
while (cursor < randomNames.length) {
  // pagination logic happens here
  const [pageItems, end, pageItemNumber] = pagination(page, cursor, itemNumber);

  // display items on the screen
  for (let i = 0; i < pageItems.length; i++) {
    console.log(`${pageItemNumber + i + 1}. ${pageItems[i]}`);
  }

  console.log(); // space

  console.log(`Page ${page} of ${totalPages}`); // Display page info

  cursor = end; // cursor is = end
  itemNumber = pageItemNumber + pageItems.length;
  page++;
  console.log(); // space
}
