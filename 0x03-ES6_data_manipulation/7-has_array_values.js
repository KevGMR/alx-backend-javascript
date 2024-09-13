export default function hasValuesFromArray(set, arr) {
  const newSet = new Set(arr);
  return set.intersection(newSet).size === arr.length;
}
