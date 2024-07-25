import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([createUser(firstName, lastName), uploadPhoto(fileName)]);
}
