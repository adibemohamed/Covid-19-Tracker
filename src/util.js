export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));

  //   sortedData.sort((a, b) => {
  //     if (a.cases > b.cases) {
  //       return -1;
  //     } else {
  //       return 1;
  //     }
  //   });

  //   return sortedData;
};

// sort(compareFn?: (a: any, b: any) => number): any[]
// Function used to determine the order of the elements.
//It is expected to return a negative value if first argument
//is less than second argument, zero if they're equal and
// a positive value otherwise. If omitted, the elements are
//sorted in ascending, ASCII character order.

// [11,2,22,1].sort((a, b) => a - b)

// Sorts an array.
