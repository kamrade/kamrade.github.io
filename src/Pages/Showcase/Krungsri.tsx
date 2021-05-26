import React from 'react';
import {krungsriSlide01, krungsriSlide02, krungsriSlide03, krungsriSlide04, krungsriSlide05} from 'data/preview-images';
import {ProgressiveImage} from 'UIKit/ProgressiveImage/ProgressiveImage';

export const Krungsri = ({ match }: any) => {

  console.dir(match);

  return (

    <div className="project-krungsri-page">
      <div className="container">


        <div className="my-3">
          <ProgressiveImage
            preview={krungsriSlide01}
            image="/img/krungsri-bank/slide-01.png"
            alt="krungsri-bank-slide01" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={krungsriSlide02}
            image="/img/krungsri-bank/slide-02.png"
            alt="krungsri-bank-slide02" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={krungsriSlide03}
            image="/img/krungsri-bank/slide-03.png"
            alt="krungsri-bank-slide03" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={krungsriSlide04}
            image="/img/krungsri-bank/slide-04.png"
            alt="krungsri-bank-slide04" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={krungsriSlide05}
            image="/img/krungsri-bank/slide-05.png"
            alt="krungsri-bank-slide05" />
        </div>


      </div>
    </div>

  );
};
