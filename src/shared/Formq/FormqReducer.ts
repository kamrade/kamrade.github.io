// TODO: dirty should become false if user changed value to its initial state.

import {IFormqState, IFormqAction, UPDATE, FOCUS, BLUR, RESET, PREVALIDATE} from './FormqTypes';

let lastValue = '';

export const formqReducer = (
  state: IFormqState,
  action: IFormqAction,
  validations: (name: string, value: string) => string[],
  initialState: IFormqState
) => {

  let name = action?.data?.name || '';
  let value = action?.data?.value || '';
  let touched = action?.data?.touched || '';

  if (!name && action.type !== RESET && action.type !== PREVALIDATE) {
    throw new Error('Please provide initial name for each field');
  }

  switch (action.type) {

    case RESET:
      return initialState;

    // Validations triggering when user trying to submit a form
    case PREVALIDATE:

      let updState: IFormqState = {};

      Object.keys(state).forEach((name, _i) => {
        updState[name] = {
          ...state[name],
          dirty: true,
          touched: true,
          errors: validations(name, state[name].value)
        }
      });

      return updState;


    case UPDATE:

      const newState = {
        ...state,
        [name]: {
          ...state[name],
          value: value,
          dirty: true,
          errors: validations(name, value)
        }
      }
      return newState;

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
          focused: false
        }
      }

    default:
      return state;

  }
}
