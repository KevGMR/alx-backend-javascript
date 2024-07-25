import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const userReturn = await createUser();
    const uploadReturn = await uploadPhoto();

    return {
      photo: uploadReturn,
      user: userReturn,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
