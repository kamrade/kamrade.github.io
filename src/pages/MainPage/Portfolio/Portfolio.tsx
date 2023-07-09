import React from 'react';
import {ProgressiveImage} from "shared/ProgressiveImage/ProgressiveImage";

export interface IPortfolioImage {
  preview: string;
  path: string;
  alt: string;
  interactive?: boolean;
  description?: string;
  link?: string;
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
