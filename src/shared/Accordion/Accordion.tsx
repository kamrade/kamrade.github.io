import React, { ReactChild, useState, useRef, useEffect } from 'react';
import s from './Accordion.module.scss';

import { isObject } from 'shared/utils/isObject';

interface IAccordionProps {
  children: ReactChild | AccordionNamedChildrenSlots;
  accordionState?: boolean;
  onChange?: (v: boolean) => void;
}

type AccordionNamedChildrenSlots = {
  toggler: ReactChild,
  content: ReactChild[]
}

export const Accordion = (props: IAccordionProps) => {

  const { children, onChange, accordionState } = props;

  const [ isShowed, setIsShowed ] = useState(false);
  const [ contentHeight, setContentHeight ] = useState(0);
  const refAccordionContent = useRef<HTMLDivElement>(null);

  if (!children) {
    throw new Error('children is mandatory!');
  }

  const toggleAccordion = (_e: React.SyntheticEvent) => {
    if (onChange) {
      onChange(!isShowed);
    }
    setIsShowed(!isShowed);
  }

  // get heigth for animated wrapper
  const getContentWrapperHeight = () => {
    if (isShowed) {
      return contentHeight + 'px';
    } else {
      return 0;
    }
  }

  // change accordion state if get value from props
  useEffect(() => {
    if (accordionState) {
      if (accordionState !== isShowed) {
        setIsShowed(accordionState);
      }
    }
  }, [ accordionState, isShowed ]);

  // get correct height for accordion content
  useEffect(() => {
    setContentHeight(refAccordionContent?.current?.clientHeight || 0);
  }, [setContentHeight]);

  if (isNamedSlots(children)) {
    const { toggler, content } = children;
    return (
      <div className={s.Accordion}>

        { toggler
          ? <div onClick={toggleAccordion} className={s.AccordionToggler}>
              {toggler}
            </div>
          : null}


        <div className={s.AccordionContentWrapper} style={{height: getContentWrapperHeight() }}>
          <div ref={refAccordionContent} className={s.AccordionContent}>
            { content
                ? content.map((item, i) =>
                  <div key={i} className={s.AccordionContentItem}>
                    {item}
                  </div>)
                : null }

          </div>
        </div>

      </div>
    )
  }

  return (
    <div className={s.Accordion}>
      { children }
    </div>
  );
}

export const isNamedSlots = (children: any): children is AccordionNamedChildrenSlots => {
  return isObject(children) && 'content' in children;
};
