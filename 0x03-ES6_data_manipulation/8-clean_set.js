export default function cleanSet(set, str) {
  if (str.length === 0 || (!(set instanceof Set))) return '';

  const endString = [];

  set.forEach((item) => {
    if (item.startsWith(str)) {
      endString.push(item.slice(str.length));
    }
  });

  return endString.join('-');
}
