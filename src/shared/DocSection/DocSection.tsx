import React from 'react';
import s from './DocSection.module.scss';
import classNames from "classnames/bind";

const sx = classNames.bind(s);

export type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg';

export interface DocSectionProps {
  children: any;
  space?: Spacing;
}

export const DocSection: React.FC<DocSectionProps> = ({ children, space }) => {

  let buttonClassNames = sx({
    DocSection: true,
    SpaceNONE: space === 'none',
    SpaceXS: space === 'xs',
    SpaceSM: space === 'sm',
    SpaceMD: space === 'md',
    SpaceLG: space === 'lg',
  });

  return (
    <section className={buttonClassNames}>
      {children}
    </section>
  );
};
