import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string()
    .required('name is required'),
  username: Yup.string()
    .required('username is required'),
  bio: Yup.string().required('description is required'),
  city: Yup.string().required('city is required'),
});

export default schema;
