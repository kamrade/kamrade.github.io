import React, {SetStateAction, Dispatch} from 'react';
import ReactDOM from 'react-dom';
import s from './PopupNotification.module.scss';

interface IPopupState {
  isShowed: boolean;
}

interface IPopupNotification {
  textContent: string;
  popupState: IPopupState;
  setPopupState: Dispatch<SetStateAction<boolean>>;
}

export const PopupNotification = ({ textContent, popupState, setPopupState }: IPopupNotification) => {

  return ReactDOM.createPortal(
    (popupState.isShowed &&
      <div className={s.PopupNotification} onClick={() => setPopupState(false)}>
        {textContent}
    </div>),
    document.getElementById('popup-notification-root') as HTMLDivElement
  );
}
