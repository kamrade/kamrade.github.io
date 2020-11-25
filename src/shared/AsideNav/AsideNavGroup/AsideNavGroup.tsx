import React from 'react';
import { Accordion } from 'shared/Accordion/Accordion';
import { AsideNavGroupHead } from 'shared/AsideNav/AsideNavGroupHead/AsideNavGroupHead';
import { AsideNavItem } from 'shared/AsideNav/AsideNavItem/AsideNavItem';

export interface IAsideNavGroupProps {
  navState: any;
  group: any;
  onChange: (groupId: string, value: boolean) => void;
}

export const AsideNavGroup = ({navState, onChange, group}: IAsideNavGroupProps) => {

  const handleChange = (value: boolean) => {
    onChange(group.id, value);
  }

  const localChange = (groupId: string, value: boolean) => {
    onChange(groupId, value);
  }

  return (
    <div>
      <Accordion
        navState={navState}
        accordionState={navState[ group.id ]}
        id={group.id}
        onChange={ handleChange }
      >
        {{
          toggler:
            <AsideNavGroupHead
              groupState={navState[ group.id ]}
              title={group.togglerTitle} />,

          content:
            group.nav.map((item: any, j: number) => {
              if (item.id) {
                return <AsideNavGroup
                  navState={navState}
                  key={j}
                  group={item}
                  onChange={localChange}/>
              }
              return <AsideNavItem
                      key={j}
                      title={item.title}
                      link={item.link} />
            })
        }}
      </Accordion>
    </div>
  );
}
