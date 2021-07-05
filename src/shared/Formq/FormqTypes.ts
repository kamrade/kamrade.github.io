import {Dispatch} from 'react';

// Actions (Reducer)
export const UPDATE      = "UPDATE_FIELD";
export const FOCUS       = "FOCUS_FIELD";
export const BLUR        = "BLUR_FIELD";
export const PREVALIDATE = "PREVALIDATE";

export interface IFormqAction {
  type: string;
  data: IPayload;
}

export interface IPayload {
  name: string;
  value: string;
  touched?: boolean;
}

// Formq context (state)
export interface IFormqFieldState {
  name: string;
  placeholder?: string;
  autoComplete?: string;   // TODO: make its own type
  type?: string;           // TODO: make its own type
  id?: string;
  value: string;
  touched?: boolean;
  dirty?: boolean;
  focused?: boolean;
  errors?: string[];
}

export interface IFormqState {
  [key: string]: IFormqFieldState;
}

export interface IFormqContext {
  formqState: IFormqState;
  dispatch: Dispatch<IFormqAction>;
}

// Formq props
export interface IFormqProps {
  initialFormqState: IFormqState;
  validations: (name: string, value: string) => string[];
  onSubmit: (formqState: IFormqState) => void;
  children: React.ReactChild;
}
