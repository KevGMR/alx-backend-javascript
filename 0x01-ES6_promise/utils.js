export function uploadPhoto(fileName) {
  return Promise.resolve({
    status: 200,
    body: fileName,
  });
}

export function createUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
