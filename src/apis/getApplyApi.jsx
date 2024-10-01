import { client } from './client';

export const getApplyInfo = async ({ name, email, number }) => {
  try {
    const response = await client.get(
      `/apply/confirm?name=${name}&email=${email}&phoneNumber=${number}`,
    );
    console.log('applyInfo', response.data);
    return response.data.userApply;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
