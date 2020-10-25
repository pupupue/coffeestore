export default function isinvalidEmail(email) {
  let errors = {email: 'valid'};
  if (!email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email address is invalid';
  }
  if(errors.email === 'valid') {
    return false
  } else {
    return errors; 
  }
};