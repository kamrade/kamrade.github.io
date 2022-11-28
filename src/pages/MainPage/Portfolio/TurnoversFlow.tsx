import React from 'react';
import {slide_01, slide_02} from "data/preview/turnover-flow";
import {ProgressiveImage} from "shared/ProgressiveImage/ProgressiveImage";
import {BackToMain} from "shared";

export const TurnoversFlow = () => {
  return (
    <div>

      <BackToMain/>

      <ProgressiveImage
        preview={slide_02}
        image="/img/turnovers-flow/slide_02.jpg"
        alt="turnovers-flow" />

      <ProgressiveImage
        preview={slide_01}
        image="/img/turnovers-flow/slide_01.jpg"
        alt="turnovers-flow" />


    </div>
  );
}
