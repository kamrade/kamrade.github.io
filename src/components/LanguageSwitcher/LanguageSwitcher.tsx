import React, { useContext } from 'react';
import './LanguageSwitcher.scss';
import { MuzqCtx } from 'App';

export const LanguageSwitcher = () => {

  const { contentData, changeLanguage } = useContext(MuzqCtx);

  return (
    <div className="muzq-header--item muzq-header--toggle-language">

      <span onClick={() => changeLanguage && changeLanguage('ua')}
        className={`language-toggler--option ${ contentData.currentLanguage === 'ua' ? 'active' : ''}`}>ua</span>
      <span onClick={() => changeLanguage && changeLanguage('en')}
        className={`language-toggler--option ${ contentData.currentLanguage === 'en' ? 'active' : ''}`}>en</span>
      <span onClick={() => changeLanguage && changeLanguage('ru')}
        className={`language-toggler--option ${ contentData.currentLanguage === 'ru' ? 'active' : ''}`}>ru</span>

    </div>
  )
};
