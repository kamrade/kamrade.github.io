import React, {ReactChild, useRef, useState} from 'react';
import s from './Dropdown.module.scss';

import {useOnClickOutside} from "hooks/useOnClickOutside";

export interface IDropdownProps {
  children: DropdownNamedSlots;
}

type DropdownNamedSlots = {
  toggler: ReactChild,
  content: ReactChild[]
}

export interface IDropdownContext {
  open: boolean;
}

export const DropdownContext = React.createContext<IDropdownContext>({ open: false });

export const Dropdown = ({children}: IDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const refDropdown = useRef<HTMLDivElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  const { toggler, content } = children;

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>): void => {
    refInput.current?.focus();
    setOpen(!open);
  }

  const optionClickHandler = (e: React.MouseEvent<HTMLDivElement>, i: number): void => {
    // console.log('on option click', i);
  }

  useOnClickOutside([refDropdown], () => {
    setOpen(false);
  }, true);

  return (
    <DropdownContext.Provider value={{open}}>
        <div className={`${s.DropdownWrapper} ${open && s.Open}`} ref={refDropdown} onClick={toggleDropdown}>

          <input type="text" className={s.FocusableInput} ref={refInput}/>

          {/* Static */}
          <div className={`${s.Dropdown} ${s.DropdownStatic}`}>
            <div className={s.DropdownToggler}>{toggler}</div>
          </div>

          {/* Dynamic */}
          <div className={`${s.Dropdown} ${s.DropdownDynamic}`} >
            <div className={s.DropdownToggler}>{toggler}</div>
            {open &&
              <div className={s.DropdownContent}>
                {content.map((dropdownOption: React.ReactChild, i: number) =>
                  <div onClick={(e: React.MouseEvent<HTMLDivElement>) => optionClickHandler(e, i)} key={i} className={s.DropdownOption}>{dropdownOption}</div>
                )}
              </div>
            }
          </div>

        </div>
    </DropdownContext.Provider>
  );

}
