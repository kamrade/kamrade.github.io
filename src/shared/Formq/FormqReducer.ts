// TODO: dirty should become false if user changed value to its initial state.

import {IFormqState, IFormqAction, UPDATE, FOCUS, BLUR, RESET, PREVALIDATE, DISABLE_FORM, ENABLE_FORM, VALIDATE} from './FormqTypes';

let lastValue = '';

export const formqReducer = (
  state: IFormqState,
  action: IFormqAction,
  validations: (name: string, value: string) => string[],
  initialState: IFormqState
) => {

  let name = action?.data?.name;
  let value = action?.data?.value;
  let touched = action?.data?.touched;
  let validate = action?.data?.validate;

  if (!name && action.type !== RESET && action.type !== PREVALIDATE  && action.type !== DISABLE_FORM  && action.type !== ENABLE_FORM) {
    throw new Error('Please provide initial name for each field');
  }

  let updState: IFormqState = {};

  switch (action.type) {

    case RESET:
      return initialState;

    // TODO: refactor DISABLE/ENABLE
    case DISABLE_FORM:

      Object.keys(state).forEach((name, _i) => {
        updState[name] = {
          ...state[name],
          disabled: true
        }
      });

      return updState;

    case ENABLE_FORM:

      Object.keys(state).forEach((name, _i) => {
        updState[name] = {
          ...state[name],
          disabled: false
        }
      });

      return updState;


    // Prevalidations triggering when user trying to submit a form
    case PREVALIDATE:

      Object.keys(state).forEach((name, _i) => {
        updState[name] = {
          ...state[name],
          dirty: true,
          touched: true,
          errors: validations(name, state[name].value)
        }
      });

      return updState;

    case VALIDATE:
      return {
        ...state,
        [name]: {
          ...state[name],
          errors: validations(name, value)
        }
      }

    case UPDATE:
      if (validate) {
        return {
          ...state,
          [name]: {
            ...state[name],
            value: value,
            dirty: true,
            errors: validations(name, value)
          }
        }
      } else {
        return {
          ...state,
          [name]: {
            ...state[name],
            value: value,
            dirty: true,
          }
        }
      }

    case FOCUS:

      lastValue = value;

      return {
        ...state,
        [name]: {
          ...state[name],
          value: value,
          focused: true
        }
      }

    case BLUR:

      return {
        ...state,
        [name]: {
          ...state[name],
          value: value,
          // if user didn't change anything just focus and blur, do not set touched to true
          touched: touched ? touched : !(lastValue === value),
          focused: false,
          errors: validations(name, value)
        }
      }

    default:
      return state;

  }
}
