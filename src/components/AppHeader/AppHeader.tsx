import React, { useContext } from 'react';
import './AppHeader.scss';
import { NavLink } from 'react-router-dom';
import { MuzqCtx } from 'App';
import { IMainMenu } from "data/model";
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { MobileMenuSwitcher } from 'components/MobileMenuSwitcher/MobileMenuSwitcher';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';

export const AppHeader = () => {

  const { contentData } = useContext(MuzqCtx);

  return (
    <>
    <div className={`muzq-header`}>
      <div className="container">
        <div className="muzq-header--content">
          <div className="row">

            <div className="col-9 col-xs-12 col-sm-11 col-md-15 col-lg-4 muzq-header--logo">
              <NavLink className="muzq-header--logo-link muzq-header--item muzq-header--link" exact to='/'>
                Dennis M<span className="s-name">ikhailov</span>
              </NavLink>
            </div>

            <div className="col-lg-12 muzq-header--menu">
              { contentData.mainMenu.map((menuItem: IMainMenu, i: number) => (
                <NavLink key={i}  className="muzq-header--item muzq-header--link"
                  exact to={menuItem.link}>
                    {menuItem.title}
                </NavLink>
              ))}

            </div>

            <div className="col-4 col-xs-3 col-sm-4 col-md-3 muzq-header--item muzq-header--switcher-wrapper">
              <ThemeSwitcher />
            </div>

            <div className="col-8 col-xs-6 col-sm-6 col-md-4">
              <LanguageSwitcher />
            </div>

            <div className="col-3 col-xs-3 col-sm-3 col-md-2 mobile-menu-toggler--wrapper">
              <MobileMenuSwitcher />
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}
