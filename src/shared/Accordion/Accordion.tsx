import React, { ReactChild, useState, useRef, useEffect } from 'react';
import s from './Accordion.module.scss';

import { isObject } from 'shared/utils/isObject';

interface IAccordionProps {
  children: ReactChild | AccordionNamedChildrenSlots;
  accordionState?: boolean;
  navState?: any;
  onChange?: (v: boolean) => void;
}

type AccordionNamedChildrenSlots = {
  toggler: ReactChild,
  content: ReactChild[]
}

export const Accordion = ({ children, onChange, accordionState, navState }: IAccordionProps) => {


  const [ isShowed, setIsShowed ] = useState(false);
  const [ contentHeight, setContentHeight ] = useState(0);
  const [ oldNavState, setOldNavState] = useState(navState);
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

  useEffect(() => {
    const keys = Object.keys(oldNavState);
    for (let i = 0; i < keys.length; i++) {
      if (oldNavState[keys[i]] !== navState[keys[i]]) {
        setContentHeight(refAccordionContent?.current?.clientHeight || 0);
        return;
      }
    }
    setOldNavState(navState);

  }, [navState]);

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
  }, [setContentHeight, isShowed]);

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
