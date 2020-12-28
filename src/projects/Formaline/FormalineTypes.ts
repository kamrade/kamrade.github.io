export const UPDATE_FORM = "UPDATE_FORM";

export interface IFormStateField {
  name: string;
  placeholder?: string;
  value: string;
  touched: boolean;
  dirty: boolean;
  errors: string[];
}

export interface IFormState {
  [key: string]: IFormStateField;
}

export interface IPayload extends IFormStateField {}

export interface IAction {
  type: string;
  data: IPayload;
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
  }
}
