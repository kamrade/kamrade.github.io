import {IFormqState, IFormqAction, UPDATE, FOCUS, BLUR} from './FormqTypes';

export const formqReducer = (state: IFormqState, action: IFormqAction ) => {

  let name = action.data.name;
  let value = action.data.value;

  if (!name) {
    throw new Error('Please provide initial name for each field');
  }

  switch (action.type) {

    case UPDATE:
      return {
        ...state,
        [name]: {
          ...state[name],
          data: {
            ...state[name].data,
            value: value,
            // TODO: dirty should become false if user changed value to its initial state.
            dirty: true,
            touched: true,
          }
        }

      }

    case FOCUS:
      return {
        ...state,
        [name]: {
          ...state[name],
          data: {
            ...state[name].data,
            value: value,
            touched: true,
            focused: true
          }

        }
      }

    case BLUR:

      return {
        ...state,
        [name]: {
          ...state[name],
          data: {
            ...state[name].data,
            value: value,
            focused: false
          }

        }
      }

    default:
      return state;

  }
}
