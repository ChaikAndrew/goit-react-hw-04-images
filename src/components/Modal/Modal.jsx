import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ closeModal, modalImg, alt }) {
  useEffect(() => {
    window.addEventListener('keydown', closeByEscape);

    return () => {
      window.removeEventListener('keydown', closeByEscape);
    };
    // eslint-disable-next-line
  }, []);

  const closeByEscape = e => {
    if (e.code !== 'Escape') {
      return;
    }
    closeModal();
  };

  return createPortal(
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={modalImg} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
}
