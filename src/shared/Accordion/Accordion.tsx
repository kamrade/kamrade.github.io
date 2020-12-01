import React, { ReactChild, useState, useRef, useEffect } from 'react';
import s from './Accordion.module.scss';

import { quad } from 'shared/utils/timing-functions';
import { isObject } from 'shared/utils/isObject';
import { animate } from 'shared/utils/animate';

interface IAccordionProps {
  children: ReactChild | AccordionNamedChildrenSlots;
  id?: string; // using for identify accordion
  accordionState?: boolean; // using for control accordion from outside
  onChange?: (id: string, v: boolean) => void; // using in pair with accordionState to control outside
}

type AccordionNamedChildrenSlots = {
  toggler: ReactChild,
  content: ReactChild[]
}

//--- OPTIONS
const accordionAnimationDuration = 120;

export const Accordion = ({ children, accordionState, onChange, id }: IAccordionProps) => {

  const [ isShowed, setIsShowed ] = useState<boolean>(false);
  const refAccordionContent = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const [ animatedHeight, setAnimatedHeight] = useState<number>(0);
  const [ isAnimated, setIsAnimated ] = useState<boolean>(false);

  //--- CHECK ACCORDION HAS CHILDREN
  if (!children) {
    throw new Error('children is mandatory!');
  }

  //--- ANIMATE ACCORDION IN OR OUT
  useEffect(() => {
    if (isAnimated) {
      const contentBlockHeight = refAccordionContent?.current?.clientHeight || 0;
      animate({
        animationRef,
        timing: quad,
        draw: (progress:number) => setAnimatedHeight(isShowed ? progress * (contentBlockHeight) : contentBlockHeight - progress * contentBlockHeight),
        duration: accordionAnimationDuration,
        onAnimationEnd: () => setIsAnimated(false)
      });
    }
  }, [isShowed, isAnimated]);

  //--- TOGGLE HANDLER. EMIT ONCHANGE EVENT (IF EXISTS)
  const toggleAccordion = () => {
    onChange && onChange(id || '', !isShowed);
    setIsShowed(!isShowed);
  }

  //--- ANIMATE HEIGHT AFTER STATE CHANGED
  useEffect(() => {
    setIsAnimated(true);
  }, [isShowed]);

  //--- UPDATE STATE FROM PROPS (PARENT) (IF NEEDED)
  useEffect(() => {
    if (accordionState) {
      if (accordionState !== isShowed) {
        console.log('Update value from props');
        setIsShowed(accordionState);
      }
    }
  }, [ accordionState, isShowed ]);



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

        <div className={s.AccordionContentWrapper} style={{
          height: isAnimated ? animatedHeight + 'px' : 'auto',
          display: !isShowed && !isAnimated ? 'none' : 'block'
        }}>
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
