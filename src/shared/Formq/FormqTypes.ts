import {Dispatch} from 'react';

// Actions (Reducer)
export const UPDATE = "UPDATE_FIELD";
export const FOCUS = "FOCUS_FIELD";
export const BLUR = "BLUR_FIELD";

export interface IFormqAction {
  type: string;
  data: IPayload;
}

export interface IPayload {
  name: string;
  value: string;
}

// Formq context (state)
export interface IFormqData {
  name: string;
  placeholder?: string;
  autoComplete?: string; // TODO: make its own type
  type?: string; // TODO: make its own type
  id?: string;
  value: string;
  touched: boolean;
  dirty: boolean;
  focused: boolean;
}

export interface IFormqFieldState {
  data: IFormqData;
  errors: string[];
  validations: () => string[];
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
  children: React.ReactChild;
}
