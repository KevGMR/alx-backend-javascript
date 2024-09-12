export default function getStudentIdsSum(obj) {
  if (!(obj instanceof Array)) return 0;
  return obj.reduce((prev, current) => prev + current.id, 0);
}
