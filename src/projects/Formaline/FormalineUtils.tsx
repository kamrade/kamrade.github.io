import {formalineValidations} from './FormalineValidations';
import {UPDATE_FORM} from './FormalineTypes';

export const onInputChange = ({name, value, dispatch, formState}: any) => {
  const errors: string[] = formalineValidations(name, value);
  dispatch({
    type: UPDATE_FORM,
    data: {name, value, touched: true, dirty: true, errors}
  });
};
