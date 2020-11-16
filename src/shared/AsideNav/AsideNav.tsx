import React, { useState } from 'react';
import s from './AsideNav.module.scss';
import { AsideNavGroup } from 'shared/AsideNav/AsideNavGroup/AsideNavGroup';
import { menuItems } from 'data/menuItems';

export interface INavState {
  [key: string]: boolean;
  applications: boolean;
  components: boolean;
  subgroup: boolean;
}

export const AsideNav = () => {

  const [navState, setNavState] = useState<INavState>({
    applications: false,
    components: false,
    subgroup: false
  })

  const handleChange = (groupId: string, value: boolean) => {
    setNavState({ ...navState, [groupId]: value});
  }

  // const handleChange = (groupId: string) => {
  //   return (value: boolean) => {
  //     setNavState({
  //       ...navState,
  //       [groupId]: value
  //     })
  //   }
  // }

  return (
    <div className={s.AsideNav}>
      { menuItems.map((group, i) =>
          <AsideNavGroup
            navState={navState}
            key={i}
            group={group}
            onChange={handleChange}/>)

      }
    </div>
  );
}
