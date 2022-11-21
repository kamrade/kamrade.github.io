import React from 'react';
import {Link} from 'react-router-dom';

import { ProgressiveImage } from 'shared/ProgressiveImage/ProgressiveImage';
import {PageTitle} from 'shared/PageTitle/PageTitle';

import {thumbnail as extremeWavesThumb} from 'data/images/extreme-waves';
import {thumbnail as turnoversFlowThumb} from 'data/images/turnovers-flow';
import {thumbnail as unlimintIbankThumb} from 'data/images/unlimint-ibank';
import {thumbnail as unlimintIbankMobileThumb} from 'data/images/unlimint-ibank-mobile';
import {thumbnail as uxFlowThumb} from 'data/images/ux-flow';
import {thumbnail as b2bcardsThumb} from 'data/images/b2bcards';

import s from './MainPageContent.module.scss';


export const MainPageContent = () => {
  return (
    <div>
      <div className={`container`}>
        <div className={s.Body}>
          <PageTitle>
            Create <span className={s.Milq}>products</span> <br />
            for the perfect experience
          </PageTitle>
          <p className={s.Desc}>
            I am happy to work with enthusiasts, designers, visual artists and developers who envolved in digital transformation of the World
          </p>
        </div>
      </div>

      <div className={`container-fluid`}>
        <div className='row'>

          <div className='col-md-8'>
            <Link to={'/timer'}>
              <div className={s.Box}>
                <ProgressiveImage
                  interactive={true}
                  description="Pomodorio (In progress from 2021)"
                  preview={extremeWavesThumb}
                  image="/img/timer/Thumbnail.png"
                  alt="Timer" />
              </div>
            </Link>
          </div>

          <div className='col-md-8'>
            <Link to={'/apps'}>
              <div className={s.Box}>
                <ProgressiveImage
                  interactive={true}
                  description="Showcase (In progress from 2021)"
                  preview={extremeWavesThumb}
                  image="/img/showcase/Thumbnail.png"
                  alt="Showcase" />
              </div>
            </Link>
          </div>

          <div className='col-md-8'>
            <Link to={'/triads/random'}>
              <div className={s.Box}>
                <ProgressiveImage
                  interactive={true}
                  description="Triads (In progress from 2021)"
                  preview={extremeWavesThumb}
                  image="/img/triads/Thumbnail.png"
                  alt="triads" />
              </div>
            </Link>
          </div>

          <div className='col-md-8'>
            <Link to={'/main/portfolio/extreme-waves'}>
              <div className={s.Box}>
                <ProgressiveImage
                  interactive={true}
                  description="Extreme waves (2014)"
                  preview={extremeWavesThumb}
                  image="/img/extreme-waves/thumbnail-compressed.png"
                  alt="extreme waves" />
              </div>
            </Link>
          </div>

          <div className='col-md-8'>
            <Link to={'/main/portfolio/b2b'}>
              <div className={s.Box}>
                <ProgressiveImage
                  interactive={true}
                  description="B2BCards (2017)"
                  preview={b2bcardsThumb}
                  image="/img/b2bcards/thumbnail-compressed.png"
                  alt="b2bcards-preview" />
              </div>
            </Link>
          </div>

          <div className='col-md-8'>
            <Link to={'/main/portfolio/turnovers-flow'}>
              <div className={s.Box}>
                <ProgressiveImage
                  interactive={true}
                  description="Turnovers Flow (2019)"
                  preview={turnoversFlowThumb}
                  image="/img/turnovers-flow/thumbnail-compressed.jpg"
                  alt="turnovers-flow-preview" />
              </div>
            </Link>
          </div>

          <div className='col-md-8'>
            <div className={s.Box}>
              <ProgressiveImage
                interactive={true}
                description="Unlimint iBank (2019-2020)"
                preview={unlimintIbankThumb}
                image="/img/unlimint-ibank/thumbnail-dark-compressed.png"
                alt="unlimint-ibank-preview" />
            </div>
          </div>

          <div className='col-md-8'>
            <Link to={'/main/portfolio/mbank'}>
              <div className={s.Box}>
                <ProgressiveImage
                  interactive={true}
                  description="Unlimint iBank Mobile (2021)"
                  preview={unlimintIbankMobileThumb}
                  image="/img/unlimint-ibank-mobile/thumbnail.jpg"
                  alt="unlimint-ibank-mobile-preview" />
              </div>
            </Link>
          </div>

          <div className='col-md-8'>
            <div className={s.Box}>
              <ProgressiveImage
                interactive={true}
                description="UX Flow (2016)"
                preview={uxFlowThumb}
                image="/img/ux-flow/thumbnail-compressed.png"
                alt="ux-flow-preview" />
            </div>
          </div>



        </div>

      </div>
    </div>
  );
}
