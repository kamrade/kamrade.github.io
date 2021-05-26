import React, { FunctionComponent } from 'react';
import s from './HeroBlock.module.scss';
import classNames from 'classnames/bind';
import { useMobileDeviceDetect } from 'hooks/useMobileDeviceDetect';

const sx = classNames.bind(s);

export const HeroBlock: FunctionComponent = () => {

  const isMobile = useMobileDeviceDetect();
  return (
    <section className={sx({
      sectionHero: true,
      mobile: isMobile
    })}>

      <div className="container">
        <div className={s.sectionHero__content}>

          <h2 className={s.heroTitle}>
            <span className={s.heroTitleLine}>Create products </span>
            <span className={s.heroTitleLine}>for the perfect</span>
            <span className={s.heroTitleLine}> experience</span>
          </h2>

          <p className={s.heroDescription}>
            I am happy to work with enthusiasts, designers, visual artists and developers who envolved in digital transformation of the World.
          </p>

          <div className={s.heroIcon}>
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="84" height="84" fill="#04BA8E" strokeWidth="4"/>
              <path d="M44 30V56" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round"/>
              <path d="M58 44L44 58L30 44" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round"/>
            </svg>
          </div>

        </div>
      </div>


    </section>
  );
};
