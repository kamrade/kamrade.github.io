import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './AdaptiveMenu.scss';
import { MuzqCtx } from 'App';
import { IMainMenu } from "data/model";
import { findIndex } from 'lodash';
import {XIcon} from 'UIKit/Icons';

export interface IAdaptiveMenuProps {
  isShowed: boolean;
  toggle: () => void;
}

export const AdaptiveMenu: FunctionComponent<IAdaptiveMenuProps> = ({ isShowed, toggle }) => {

  const [shouldRender, setRender] = useState(isShowed);
  const { contentData } = useContext(MuzqCtx);

  const lockBody = (isShowed: boolean) => {
    if (isShowed) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }

  }

  useEffect(() => {
    if (isShowed) {
      setRender(isShowed);
      lockBody(true);
    }
  }, [isShowed]);

  const animationEndHandler = () => {
    if (!isShowed) {
      setRender(false);
      lockBody(false);
    }
  }

  const menuItemAnimationEndHandler = (e: React.SyntheticEvent) => {
    let event = e as any;
    if (findIndex(event.target.classList, function(o) { return o === 'show' }) >= 0) {
      event.target.classList.add('static');
    }
    if (findIndex(event.target.classList, function(o) { return o === 'hide' }) >= 0)  {
      event.target.classList.remove('static');
    }
  }

  return (
    <>
      { shouldRender && (
        <div className={`animator animator-fade ${isShowed ? 'animator-in' : 'animator-out'}`}
          onAnimationEnd={animationEndHandler} >

          <div onClick={toggle} className="adaptive-menu">

            <div className="adaptive-menu-body">
              <div className="adaptive-menu-body-content">

                { contentData.mainMenu.map((menuItem: IMainMenu, i: number) => (
                  <NavLink key={i} className="muzq-adaptive-menu--item" exact to={menuItem.link}>
                    <span className={`muzq-roulette ${isShowed ? 'show' : 'hide'}`}
                      onAnimationEnd={menuItemAnimationEndHandler}>
                        { menuItem.title }
                    </span>
                  </NavLink>
                ))}

              </div>
            </div>

            <div className="muzq-mobile-menu--header">
              <div className="container">
                <div className="mobile-menu-toggler--wrapper">
                  <div className="row">
                    <div className="col-3 col-xs-3 col-sm-3 offset-21">
                      <button className="muzq-icon-button">
                        <XIcon  />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="muzq-adaptive-menu--footer">
              mail to: <a href={"mailto:denis.michailov@gmail.com"}>Denis.Michailov@gmail.com</a>
            </div>

          </div>

        </div>
      )}
    </>
  );
}
