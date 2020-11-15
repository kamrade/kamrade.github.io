import React, { useState } from 'react';
import { Accordion } from 'shared/Accordion/Accordion';
import s from './AsideNav.module.scss';
import { AsideNavGroup } from 'shared/AsideNav/AsideNavGroup/AsideNavGroup';
import { AsideNavItem } from 'shared/AsideNav/AsideNavItem/AsideNavItem';
import { menuItems } from 'data/menuItems';

export interface INavState {
  [key: string]: boolean;

  applications: boolean;
  components: boolean;
}

export const AsideNav = () => {

  const [navState, setNavState] = useState<INavState>({
    applications: false,
    components: false
  })

  return (
    <div className={s.AsideNav}>

      { menuItems.map((group, i) =>
        {
          return (
            <Accordion key={i} accordionState={navState[ group.id ]} onChange={(value: boolean) => { setNavState({ ...navState, [group.id]: value}) }}>
              {{
                toggler: <AsideNavGroup groupState={ navState[ group.id ] } title={group.togglerTitle} />,
                content: group.nav.map((item, j) => <AsideNavItem key={j} title={item.title} link={item.link} />)
              }}
            </Accordion>
          )
        }
      )}
    </div>
  );
}
