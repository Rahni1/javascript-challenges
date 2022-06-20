// your code here
function formatPhoneNumber(numbers) {
  const args = Array.prototype.slice.call(arguments);
  args.splice(6, 0, "-");
  args.splice(3, 0, ") ");
  args.splice(0, 0, "(");
  return (args.join(""));
}