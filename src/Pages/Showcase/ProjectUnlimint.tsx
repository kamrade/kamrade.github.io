import React from 'react';
import {unlimintHero, ipadProDark, ipadProLight, unlimintSlide03, unlimintSlide04, unlimintSlide05, unlimintSlide06, unlimintSlide07, unlimintSlide08} from 'data/preview-images';
import {ProgressiveImage} from 'UIKit/ProgressiveImage/ProgressiveImage';

export const ProjectUnlimint = ({ match }: any) => {

  console.dir(match);

  return (

    <div className="project-unlimint-page">
      <div className="container">


        <div className="my-3">
          <ProgressiveImage
            preview={unlimintHero}
            image="/img/unlimint-bank/slides/Hero--comp.png"
            alt="unlimint-bank-avatar" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={ipadProDark}
            image="/img/unlimint-bank/slides/ipadPro-dark--comp.png"
            alt="unlimint-bank-avatar" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={ipadProLight}
            image="/img/unlimint-bank/slides/ipadPro-light--comp.png"
            alt="unlimint-bank-avatar" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={unlimintSlide03}
            image="/img/unlimint-bank/slides/slide-03.png"
            alt="unlimint-bank-avatar" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={unlimintSlide04}
            image="/img/unlimint-bank/slides/slide-04.png"
            alt="unlimint-bank-avatar" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={unlimintSlide05}
            image="/img/unlimint-bank/slides/slide-05.png"
            alt="unlimint-bank-avatar" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={unlimintSlide06}
            image="/img/unlimint-bank/slides/slide-06-user-flow.png"
            alt="unlimint-bank-avatar" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={unlimintSlide07}
            image="/img/unlimint-bank/slides/slide-07.png"
            alt="unlimint-bank-avatar" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={unlimintSlide08}
            image="/img/unlimint-bank/slides/slide-08.png"
            alt="unlimint-bank-avatar" />
        </div>

      </div>
    </div>

  );
};
