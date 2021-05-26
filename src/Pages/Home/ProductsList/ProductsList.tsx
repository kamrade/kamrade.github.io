import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import s from './ProductsList.module.scss';

import { unlimintThmbPre, extremeWavesThmbPre, b2bcardThmbPre, krungsriThmbPre } from 'data/preview-images';
import { ProgressiveImage } from 'UIKit/ProgressiveImage/ProgressiveImage';

export const ProductsList: FunctionComponent = () => {
  return (
    <section className={s.muzqImages__productList}>

      <div className={s.muzqImages__productListContent}>

        <div className="row">

          {/* TODO: Make small components and data driven rendering */}

          <div className="col-sm-12 col-md-8">
            <Link to="/showcase/project-unlimint">
              <div className={s.imageWrapper}>
                <ProgressiveImage
                  interactive={true}
                  description="Unlimint Bank User Interface (2020)"
                  preview={unlimintThmbPre}
                  image="/img/unlimint-bank/Thumbnail--comp.png"
                  alt="unlimint-bank-avatar" />
              </div>
            </Link>
          </div>

          <div className="col-sm-12 col-md-8">
            <Link to="/showcase/b2b-card">
              <div className={s.imageWrapper}>
                <ProgressiveImage
                  interactive={true}
                  description="B2BCard User Dashboard (2017)"
                  preview={b2bcardThmbPre}
                  image="/img/b2bcard/b2bcard-thmb.png"
                  alt="b2b-avatar" />
              </div>
            </Link>
          </div>


          <div className="col-sm-12 col-md-8">
            <Link to="/showcase/extreme-waves">
              <div className={s.imageWrapper}>
                <ProgressiveImage
                  interactive={true}
                  description="Extreme Waves Global Portal (2013)"
                  preview={extremeWavesThmbPre}
                  image="/img/extreme-waves/extremewaves-thmb.png"
                  alt="unlimint-bank-avatar" />
              </div>
            </Link>
          </div>


          <div className="col-sm-12 col-md-8">
            <Link to="/showcase/krungsri">
              <div className={s.imageWrapper}>
                <ProgressiveImage
                  interactive={true}
                  description="Krungsri Bank Business Mobile Client (2018)"
                  preview={krungsriThmbPre}
                  image="/img/krungsri-bank/krungsri-thmb.png"
                  alt="unlimint-bank-avatar" />
              </div>
            </Link>
          </div>





        </div>

      </div>

    </section>
  );
}
