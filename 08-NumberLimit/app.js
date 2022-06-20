// your code here
const numLimit = (num, lowest, highest) => {
  switch (true) {
    case num >= lowest && num <= highest:
      return (num);
    case num < lowest:
      return (lowest);
    case num > highest:
      return (highest);
  }
};