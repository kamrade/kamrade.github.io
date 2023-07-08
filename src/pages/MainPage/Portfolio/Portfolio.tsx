import React from 'react';
import {ProgressiveImage} from "shared/ProgressiveImage/ProgressiveImage";
import {BackToMain} from "shared";

export interface IPortfolioImage {
  preview: string;
  path: string;
  alt: string;
}

export interface IPortfolioTitle {
  title: string;
}

interface IPortfolioPageProps {
  images: IPortfolioImage[];
}

export const PortfolioPage: React.FC<IPortfolioPageProps> = (props) => {

  const { images } = props;

  return (
    <div className={'container'}>

      <BackToMain/>

      { images.map((image, i) => (
        <ProgressiveImage
          key={i}
          preview={image.preview}
          image={image.path}
          alt={image.alt} />
      ))}

    </div>
  );
}
