import React from 'react';
import {Link} from 'react-router-dom';
import { ProgressiveImage } from 'shared/ProgressiveImage/ProgressiveImage';
import { IPortfolioImage, IPortfolioTitle, thread, products } from './Portfolio';

import s from './MainPageContent.module.scss';


export const MainPageContent = () => {
  return (
    <div className={s.MainPageContent}>
      <div className={`container`}>

        <h2 className={s.Title}>Products</h2>
        <div className='row'>
          { products.map((product, i) => (
              <div className='col-md-8' key={i}>
                <Link to={product.link || '#'}>
                  <div className={s.Box}>
                    <ProgressiveImage key={i} alt={product.alt}
                      preview={product.preview} image={product.path}
                      interactive={product.interactive} description={product.description}
                    />
                  </div>
                </Link>
              </div>
          ))}
        </div>

        <>
          <h2 className={s.Title}>Random screens</h2>

          { thread.map((image, i) => {

            let img = image as IPortfolioImage;
            let title = image as IPortfolioTitle;

            if (img.path) {
              return (<ProgressiveImage key={i} preview={img.preview} image={img.path} alt={img.alt}/>)
            } else if (title.title) {
              return <h2 key={i}>{title.title}</h2>;
            }
            return null;
          })}
        </>

        <>
          <h2 className={s.Title}>Gallery</h2>
          <div className="row">
            <div className="col-md-4"><div className={s.Box} /></div>
            <div className="col-md-4"><div className={s.Box} /></div>
            <div className="col-md-4"><div className={s.Box} /></div>
            <div className="col-md-4"><div className={s.Box} /></div>
            <div className="col-md-4"><div className={s.Box} /></div>
            <div className="col-md-4"><div className={s.Box} /></div>
          </div>
        </>

      </div>
    </div>
  );
}
