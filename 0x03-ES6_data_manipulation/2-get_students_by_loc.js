export default function getStudentsByLocation(obj, location) {
  return obj.filter((item) => item.location === location);
}
