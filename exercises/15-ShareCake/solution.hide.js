// your code here
const sliceOfCake = (totalSlices, recipients, slicesPerPerson) => {
  const result = recipients * slicesPerPerson < totalSlices ? true : false;
  return result;
};
