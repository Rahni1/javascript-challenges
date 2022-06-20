// your code here
const missingAngle = (degree1, degree2) => {
  const result = 180 - (degree1 + degree2);
  switch (true) {
    case result < 90:
      return ("Acute");
    case result === 90:
      return ("Right");
    case result >= 90:
      return ("Obtuse");
  }
};