import React, { ReactChild, useState, useRef, useEffect } from 'react';
import s from './Accordion.module.scss';

import { isObject } from 'shared/utils/isObject';

interface IAccordionProps {
  children: ReactChild | AccordionNamedChildrenSlots;

  id?: string;

  accordionState?: boolean;
  onChange?: (id: string, v: boolean) => void;

  isContentUpdated?: boolean;
  onUpdate?: () => void;
}

type AccordionNamedChildrenSlots = {
  toggler: ReactChild,
  content: ReactChild[]
}

export const Accordion = ({ children, accordionState, onChange, id, isContentUpdated, onUpdate }: IAccordionProps) => {

  const [ isShowed, setIsShowed ] = useState(false);
  const [ contentHeight, setContentHeight ] = useState(0);
  const refAccordionContent = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  if (!children) {
    throw new Error('children is mandatory!');
  }

  //--- TOGGLE HANDLER
  const toggleAccordion = () => {
    if (onChange) {
      onChange(id || '', !isShowed);
    }
    setIsShowed(!isShowed);
  }

  //--- GET WRAPPER HEIGHT
  const getWrapperHeight = () => isShowed ? contentHeight + 'px' : 0;

  //--- SET WRAPPER HEIGHT (BASED ON CONTENT)
  const setWrapperHeight = () => {
    const h = refAccordionContent?.current?.clientHeight;
    setContentHeight(h || 0);
  }

  //--- COMPONENT DID UPDATE
  useEffect(() => {
    if (!mounted.current) {
      console.log('mounted:', id);
      mounted.current = true;
    } else {
      console.log('updated:', id);
      console.log(id, 'isShowed', isShowed);
    }
  });

  //--- EVENT: CHILD UPDATED
  useEffect(() => {
    if (isContentUpdated) {
      setTimeout(() => {
        setWrapperHeight();
        onUpdate && onUpdate();
      });
    }
  }, [isContentUpdated, onUpdate]);

  //--- UPDATE STATE FROM PROPS (IF NEEDED)
  useEffect(() => {
    if (accordionState) {
      if (accordionState !== isShowed) {
        setIsShowed(accordionState);
      }
    }
  }, [ accordionState, isShowed ]);

  //--- CHANGE HEIGHT WHEN STATE CHANGED
  useEffect(() => {
    setWrapperHeight();
  }, [isShowed]);



  //---
  //--- RENDER
  //---
  if (isNamedSlots(children)) {
    const { toggler, content } = children;
    return (
      <div className={s.Accordion}>

        { toggler
          ? <div onClick={toggleAccordion} className={s.AccordionToggler}>
              {toggler}
            </div>
          : null}

        <div className={s.AccordionContentWrapper} style={{height: getWrapperHeight() }}>
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
