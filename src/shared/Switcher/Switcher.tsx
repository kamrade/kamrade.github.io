import React, {ForwardedRef, forwardRef, ForwardRefRenderFunction} from 'react';
import s from './Switcher.module.scss';

interface ISwitcherProps {
  children?: any;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // TODO: describe the function.
}

const InternalSwitcher: ForwardRefRenderFunction<unknown, ISwitcherProps> = ({checked, onChange, children}, ref: ForwardedRef<any>) => {
  return (
    <label className={s.Switcher}>
      <input ref={ref} type='checkbox' checked={checked} onChange={onChange} />
      <span className={s.customSwitcher} />
      <span className={s.SwitcherContent}>{children}</span>
    </label>
  );
}

const Switcher = forwardRef<unknown, ISwitcherProps>( InternalSwitcher );
Switcher.displayName = 'Switcher';
export {Switcher};
