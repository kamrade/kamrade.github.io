import React from 'react';
import {b2bWidgets, b2bHero, b2bForms} from 'data/preview-images';
import {ProgressiveImage} from 'UIKit/ProgressiveImage/ProgressiveImage';

export const B2B = ({ match }: any) => {

  console.dir(match);

  return (

    <div className="project-b2b-page">
      <div className="container">

        <div className="my-3">
          <ProgressiveImage
            preview={b2bHero}
            image="/img/b2bcard/Hero--comp.png"
            alt="b2bcard-slide01" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={b2bForms}
            image="/img/b2bcard/Forms--comp.png"
            alt="b2bcard-slide02" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={b2bWidgets}
            image="/img/b2bcard/Widgets--comp.png"
            alt="b2bcard-slide03" />
        </div>

      </div>
    </div>

  );
};
