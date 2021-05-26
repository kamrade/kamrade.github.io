import React from 'react';
import {extremeWavesSlide01, extremeWavesSlide02, extremeWavesSlide03, extremeWavesSlide04, extremeWavesSlide05, extremeWavesSlide06} from 'data/preview-images';
import {ProgressiveImage} from 'UIKit/ProgressiveImage/ProgressiveImage';

export const ExtremeWaves = () => {

  return (

    <div className="extreme-waves-page">
      <div className="container">

        <div className="my-3">
          <ProgressiveImage
            preview={extremeWavesSlide01}
            image="/img/extreme-waves/slide_01.png"
            alt="extreme-waves-slide01" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={extremeWavesSlide02}
            image="/img/extreme-waves/slide_02.png"
            alt="extreme-waves-slide02" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={extremeWavesSlide03}
            image="/img/extreme-waves/slide_03.png"
            alt="extreme-waves-slide03" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={extremeWavesSlide04}
            image="/img/extreme-waves/slide_04.png"
            alt="extreme-waves-slide04" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={extremeWavesSlide05}
            image="/img/extreme-waves/slide_05.png"
            alt="extreme-waves-slide05" />
        </div>

        <div className="my-3">
          <ProgressiveImage
            preview={extremeWavesSlide06}
            image="/img/extreme-waves/slide_06.png"
            alt="extreme-waves-slide06" />
        </div>

      </div>
    </div>

  );
};
