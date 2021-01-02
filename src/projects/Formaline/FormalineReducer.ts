import {BLUR_FORM, FOCUS_FORM, IAction, IFormState, UPDATE_FORM} from "./FormalineTypes";

export const formsReducer = (state: IFormState, action: IAction): IFormState => {
  switch (action.type) {

    case BLUR_FORM:
      return {
        ...state,
        [action.data.name]: {
          ...state[action.data.name],
          touched: action.data.touched,
          focused: action.data.focused,
          errors: action.data.errors
        }
      }

    case FOCUS_FORM:
      return {
        ...state,
        [action.data.name]: {
          ...state[action.data.name],
          touched: action.data.touched,
          focused: action.data.focused,
          errors: action.data.errors
        }
      }

    case UPDATE_FORM:
      const { name, value, errors, touched, dirty } = action.data;

      return {
        ...state,
        [name]: {
          ...state[name],
          value, errors, touched, dirty
        }
      }

    default:
      return state;
  }
}
