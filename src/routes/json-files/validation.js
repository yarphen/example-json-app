import yup from 'yup';

const createSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  jsonFile: yup.object().required(),
});

export const validateJsonFileCreation = async ({ name, description, jsonFile }) => {
  try {
    await createSchema.validate({ name, description, jsonFile }, { abortEarly: false });
    return [];
  } catch (e) {
    return e.errors;
  }
};
