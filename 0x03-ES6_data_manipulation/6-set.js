export default function setFromArray(arr) {
  if (!(arr instanceof Array)) return [];
  return new Set(arr);
}
