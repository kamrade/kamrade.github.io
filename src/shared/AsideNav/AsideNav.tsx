import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import s from './AsideNav.module.scss';
import { AsideNavGroup } from 'shared/AsideNav/AsideNavGroup/AsideNavGroup';
import { menuItems, IMenuItem, IMenuLink } from 'data/menuItems';

export interface IStateField {
  children: string[];
  links: string[];
  folded: boolean;
  active: boolean;
}

export interface INavState {
  [key: string]: IStateField;
}

// TODO: Do NOT delete it! It's another interesting solution.
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

// generate state from menuItems
function createInitialNavState(): INavState {
  let navState: INavState = {};

  // Function which get navState and give it value
  const fillNavState = (menuItems: (IMenuItem | IMenuLink)[]) => {

    menuItems.map((menuItem: IMenuItem | IMenuLink ) => {
      if ('id' in menuItem) { // this is a group

        navState[menuItem.id] = { children: [], folded: false, active: false, links: [] };
        let currentParent = menuItem;

        // Function which get specific menu item, get all its children names and insert them to navState['specific menu item'].children
        let getAllChild = (currentMenuItem: (IMenuItem | IMenuLink)) => {
          if ('nav' in currentMenuItem) {
            currentMenuItem.nav.map(currentItem => {
              if ('id' in currentItem) {
                navState[currentParent.id].children.push(currentItem.id);
                getAllChild(currentItem);
              } else {
                navState[currentParent.id].links.push(currentItem.link);
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

const initialNavState = createInitialNavState();

export const AsideNav = () => {

  const location = useLocation();

  const [navState, setNavState] = useState<INavState>(initialNavState);

  useEffect(() => {
    const currentPath = location.pathname;
    const newState = {...navState};
    Object.keys(navState).map(item => newState[item].active = navState[item].links.includes(currentPath));
    setNavState(newState);

  // eslint-disable-next-line
  }, [location]);

  // set value to accordion group with id: groupId
  const handleChange = (groupId: string, value: boolean) => {
    setNavState({ ...navState, [groupId]: { ...navState[groupId], folded: value }});
  }

  // toggle accordion group with id and all its children
  const foldAll = (id: string) => {
    // TODO: Make it smarter
    let newState = { ...navState };
    let v = !newState[id].folded;
    newState[id].folded = v;
    navState[id].children.map(item => {
      newState[item].folded = v;
      return null;
    });

    setNavState(newState);

  }

  return (
    <div className={s.AsideNav}>
      { menuItems.map((group: IMenuItem | IMenuLink, i: number) =>
          <AsideNavGroup
            navState={navState}
            key={i}
            group={group}
            foldAll={foldAll}
            onChange={handleChange}/>)
      }
    </div>
  );
}
