export default function validateEmail(email) {
  let errors = {};
  if (!email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email address is invalid';
  }
  return errors;
};