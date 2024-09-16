export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') return '';

  const result = [];

  for (const elem of set) {
    if (elem && elem.startsWith(startString) && typeof elem === 'string') {
      const value = elem.slice(startString.length);

      if (value && value !== elem) result.push(value);
    }
  }

  return result;
}
