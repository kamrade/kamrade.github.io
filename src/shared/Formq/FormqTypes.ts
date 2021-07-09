import {Dispatch} from 'react';

// Actions (Reducer)
export const UPDATE        = 'UPDATE_FIELD';
export const FOCUS         = 'FOCUS_FIELD';
export const BLUR          = 'BLUR_FIELD';
export const RESET         = 'RESET_FORM';
export const PREVALIDATE   = 'PREVALIDATE';
export const DISABLE_FORM  = 'DISABLE_FORM';
export const ENABLE_FORM   = 'ENABLE_FORM';

export interface IFormqAction {
  type: string;
  data?: any; // TODO: make better typing
}

// Formq context (state)
export interface IFormqFieldState {
  name: string;
  value: string;
  placeholder?: string;
  autoComplete?: string;   // TODO: make specific type
  type?: string;           // TODO: make specific type
  id?: string;
  touched?: boolean;
  dirty?: boolean;
  focused?: boolean;
  errors?: string[];
  disabled?: boolean;
}

export interface IFormqState {
  [key: string]: IFormqFieldState;
}

export interface IFormqContext {
  formqState: IFormqState;
  dispatch: Dispatch<IFormqAction>;
}

export interface IFormqReturnArgs {
  handleSubmit: (e: React.SyntheticEvent) => void;
  clearForm: (e: React.SyntheticEvent) => void;
  isSubmitting: boolean;
}

// Formq props
export interface IFormqProps {
  initialFormqState: IFormqState;
  validations: (name: string, value: string) => string[];
  onSubmit: (formqState: any, isValid: boolean) => Promise<string>;
  clearAfterSubmit: boolean;
  children: (args: IFormqReturnArgs) => React.ReactChild;
}
