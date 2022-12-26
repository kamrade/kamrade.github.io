import React from 'react';
import s from "./AboutPage.module.scss";
import {PageTitle} from "../../shared/PageTitle/PageTitle";

export const AboutPage = () => {
  return (
    <div className='container'>

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
  );
}
