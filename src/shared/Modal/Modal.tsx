import React from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import {Close} from 'shared/Close/Close';
import {IModal} from './ModalTyping';

export const Modal = ({ children, showModal, setModal }: IModal) => {

  return ReactDOM.createPortal(
    (showModal && <div className={s.Root}>
      <div className={s.Backdrop} onClick={(e: React.MouseEvent<HTMLDivElement>) => setModal && setModal(false)} />
      <div className={s.Content}>
        <div>This is modal</div>
        {children}
        <Close onClose={(e: React.MouseEvent<HTMLDivElement>) => setModal && setModal(false)} />
      </div>

    </div>),
    document.getElementById('modal-root') as HTMLDivElement
  );
}
