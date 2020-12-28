export const UPDATE_FORM = "UPDATE_FORM";
export const FOCUS_FORM = "FOCUS_FORM";
export const BLUR_FORM = "BLUR_FORM";

export interface IFormStateField {
  name: string;
  placeholder?: string;
  value: string;
  touched: boolean;
  dirty: boolean;
  focused: boolean;
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
    focused: false,
    errors: []
  },
  password: {
    name: 'password',
    placeholder: 'Password',
    value: '',
    touched: false,
    focused: false,
    dirty: false,
    errors: []
  }
}
