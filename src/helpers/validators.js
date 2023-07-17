export const REGEX = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}

export const nameValidation = (value) => {
  if (!value) return 'Empty value';
  if (value?.length < 6) return 'Name should be longer then 6';

  return null;
}

export const emailValidator = (value) => {
  if (!REGEX.email.test(value)) return 'Email invalid';

  return null;
}

export const passwordValidator = (value) => {
  if (value?.length < 6) return 'Name should be longer then 8';

  return null;
}

