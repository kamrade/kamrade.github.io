import React from 'react';
import s from './DocSection.module.scss';
import classNames from "classnames/bind";

const sx = classNames.bind(s);

export type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg';

export interface DocSectionProps {
  children: any;
  space?: Spacing;
  flex?: boolean;
}

export const DocSection: React.FC<DocSectionProps> = ({ children, space, flex }) => {

  let docSectionClassNames = sx({
    DocSection: true,
    flex: flex,
    spaceNONE: space === 'none',
    spaceXS: space === 'xs',
    spaceSM: space === 'sm',
    spaceMD: space === 'md',
    spaceLG: space === 'lg',
  });

  return (
    <section className={docSectionClassNames}>
      {children}
    </section>
  );
};
