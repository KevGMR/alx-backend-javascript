export default function hasValuesFromArray(set, arr) {
  return set.intersection(new Set(arr)).size === arr.length;
}
