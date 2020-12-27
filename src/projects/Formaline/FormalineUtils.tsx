/*
  ## Form roadmap
  - [ ]
*/

export const UPDATE_FORM = "UPDATE_FORM";

export interface IPayload {
  name: string;
  value?: string;
  errors?: string[]; // errors.length > 0 === invalid
  touched?: boolean;
  dirty?: boolean;
  isFormValid?: boolean;
}

export interface IAction {
  type: string;
  data: IPayload;
}

export interface IFormStateField {
  name?: string;
  placeholder?: string;
  value: string;
  touched: boolean;
  dirty: boolean;
  errors: string[];
}

export interface IFormState {
  [key: string]: IFormStateField | boolean;
}

export const initialState: IFormState = {
  username: {
    name: 'username',
    placeholder: 'Username',
    value: '',
    touched: false,
    dirty: false,
    errors: []
  },
  password: {
    name: 'password',
    placeholder: 'Password',
    value: '',
    touched: false,
    dirty: false,
    errors: []
  },
  isFormValid: true
}

export const onInputChange = ({name, value, dispatch, formState}: any) => {

  const errors: string[] = validateInput(name, value);
  let isFormValid = true;

  for (const key in formState) {
    if (key === name && errors.length > 0) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: {name, value, errors, touched: true, dirty: true, isFormValid}
  })
}

export const validateInput = (name: string, value: string) => {
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
