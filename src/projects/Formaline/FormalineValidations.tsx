export const formalineValidations = (name: string, value: string) => {
  let errors = [];
  switch (name) {

    case 'username':
      if (value.trim() === "") {
        errors.push('Username can\'t be empty');
        break;
      }
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        errors.push('Invalid Username. Avoid Special characters');
      }
      if (value.length < 3) {
        errors.push('Username should be at least 3 characters long');
      }
      if (value.length > 64) {
        errors.push('Username should not be longer than 64 characters');
      }
      break;

    case 'password':
      if (value.trim() === "") {
        errors.push('Password can\'t be empty');
        break;
      }
      if (value.length < 8) {
        errors.push('Username should be at least 8 characters long');
      }
      break;

    default:
      break;
  }
  return errors;
}
