import { tuple } from 'shared/utils/type';
import {Shape} from 'types';

const InputTypes = tuple(
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week'
);

export type InputType = typeof InputTypes[number];

export type InputShape = Shape;

export type InputSize = 'sm' | 'md' | 'lg';

export type InputVariant = 'base' | 'outline' | 'line' | 'filled-inverted' | 'filled-base';

export interface IInputProps {
  name?: string;
  placeholder?: string;
  type?: InputType | string;
  autoComplete?: string;
  id?: string;

  value?: string;
  disabled?: boolean;
  required?: boolean;

  touched?: boolean;
  dirty?: boolean;
  focused?: boolean;
  valid?: boolean;

  size?: InputSize;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  shape?: InputShape;
}
