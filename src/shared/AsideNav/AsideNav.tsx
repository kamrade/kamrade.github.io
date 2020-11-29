import React, { useState } from 'react';
import s from './AsideNav.module.scss';
import { AsideNavGroup } from 'shared/AsideNav/AsideNavGroup/AsideNavGroup';
import { menuItems, IMenuItem, IMenuLink } from 'data/menuItems';

export interface INavState {
  [key: string]: boolean;
}

// TODO: Do not delete it! It's another interesting solution.
/*
let groups: any[] = [];
function createNavState(menuItems: (IMenuItem | IMenuLink)[], parent: any) {
  menuItems.map((menuItem: (IMenuItem | IMenuLink)) => {
    if ('id' in menuItem) {
      parent.push({
        id: menuItem.id,
        children: []
      });
      let parentInner = parent[parent.length - 1].children;
      if ('nav' in menuItem) {
        createNavState(menuItem.nav, parentInner);
      }
    }
    return null;
  })
}

createNavState(menuItems, groups);
console.log(groups);
*/

function createNavState() {

  let navState: any = {};

  const fillNavState = (menuItems: (IMenuItem | IMenuLink)[]) => {

    menuItems.map((menuItem: IMenuItem | IMenuLink ) => {
      if ('id' in menuItem) {

        navState[menuItem.id] = { children: [], folded: false };
        let currentParent = menuItem;

        let getAllChild = (currentMenuItem: (IMenuItem | IMenuLink)) => {
          if ('nav' in currentMenuItem) {
            currentMenuItem.nav.map(currentItem => {
              if ('id' in currentItem) {
                navState[currentParent.id].children.push(currentItem.id);
                getAllChild(currentItem);
              }
              return null;
            });
          }
        }

        getAllChild(currentParent);

        'nav' in menuItem && fillNavState(menuItem.nav);
      }
      return null;
    });
  }

  fillNavState(menuItems);
  return navState;
}

console.log(createNavState());






export const AsideNav = () => {

  const [navState, setNavState] = useState<INavState>({
    applications: false,
    components: false,
    subgroup: false,
    subgroupLevel2: false,
    subgroupLevel3: false,
    subgroupLevel4: false
  });

  const handleChange = (groupId: string, value: boolean) => {
    setNavState({ ...navState, [groupId]: value});
  }

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
