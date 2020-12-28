export const formalineValidations = (name: string, value: string) => {
  let errors = [];
  switch (name) {
    case 'username':
      if (value.trim() === "") {
        errors.push('Username can\'t be empty');
      }
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        errors.push('Invalid Username. Avoid Special characters');
      }
      if (value.length < 3) {
        errors.push('Username should be at least 3 characters length');
      }
      if (value.length > 64) {
        errors.push('Username should not be longer than 64 characters');
      }
      break;
    case 'password':
      break;
    default:
      break;
  }
  return errors;
}
