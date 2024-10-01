// @RequestParam("name") @RequestParam("email") @RequestParam("phoneNumber")
// `${import.meta.env.VITE_SERVER_API}/apply/confirm?name=${name}&email=${email}&phoneNumber=${phoneNumber}`

import { client } from './client';

export const getApplyInfo = async ({ name, email, number }) => {
  try {
    const response = await client.get('/apply/confirm', {
      params: {
        name: name,
        email: email,
        phoneNumber: number,
      },
    });
    console.log('applyInfo', response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
