export default function appendToEachArrayValue(array, appendString) {
  const result = [];

  for (const x of array) {
    result.push(appendString + x);
  }

  return result;
}
