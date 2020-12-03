import React from 'react';
import { useLocation } from 'react-router-dom';
import { Accordion } from 'shared/Accordion/Accordion';
import { AsideNavGroupHead } from 'shared/AsideNav/AsideNavGroupHead/AsideNavGroupHead';
import { AsideNavItem } from 'shared/AsideNav/AsideNavItem/AsideNavItem';

export interface IAsideNavGroupProps {
  navState: any;
  group: any;
  foldAll: (id: string) => void;
  onChange: (groupId: string, value: boolean) => void;
  level?: number;
}

export const AsideNavGroup = ({navState, onChange, foldAll, group, level}: IAsideNavGroupProps) => {

  const location = useLocation();
  let groupLevel = level ? level : 0;
  let active = false;

  for (let i = 0; i < group.nav.length; i++) {
    if (group.nav[i].link === location.pathname) {
      active = true;
      break;
    }
  }

  const handleChange = (groupId: string, value: boolean) => {
    onChange(groupId, value);
  }

  return (
    <>
      <Accordion
        accordionState={navState[ group.id ].folded}
        id={group.id}
        foldAll={foldAll}
        onChange={ handleChange }
      >
        {{
          toggler:
            <AsideNavGroupHead
              active={active}
              innerPadding={ (level || 0) * 16 }
              groupState={navState[ group.id ].folded}
              title={group.togglerTitle} />,

          content:
            group.nav.map((item: any, j: number) => {
              if (item.id) {
                return <AsideNavGroup
                  level={groupLevel+1}
                  navState={navState}
                  key={j}
                  foldAll={foldAll}
                  group={item}
                  onChange={handleChange}/>
              }
              return <AsideNavItem
                      key={j}
                      title={item.title}
                      link={item.link}
                      innerPadding={(level || 0) * 16}/>
            })
        }}
      </Accordion>
    </>
  );
}
