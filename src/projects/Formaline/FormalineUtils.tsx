import {formalineValidations} from './FormalineValidations';
import {UPDATE_FORM, FOCUS_FORM, BLUR_FORM} from './FormalineTypes';

export const onInputChange = ({name, value, dispatch, formState}: any) => {
  const errors: string[] = formalineValidations(name, value);
  dispatch({
    type: UPDATE_FORM,
    data: {name, value, touched: true, dirty: true, focused: formState[name].focused, errors}
  });
};

export const onInputFocus = ({name, value, dispatch, formState}: any) => {
  const errors: string[] = formalineValidations(name, value);
  dispatch({
    type: FOCUS_FORM,
    data: {name, value, touched: true, dirty: formState[name].dirty, focused: true, errors}
  })
}

export const onInputBlur = ({name, value, dispatch, formState}: any) => {
  const errors: string[] = formalineValidations(name, value);
  dispatch({
    type: BLUR_FORM,
    data: {name, value, touched: true, dirty: formState[name].dirty, focused: false, errors}
  })
}
