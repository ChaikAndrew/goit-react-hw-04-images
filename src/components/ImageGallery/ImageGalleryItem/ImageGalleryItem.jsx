import Modal from 'components/Modal/Modal';
import { useState } from 'react';

export function ImageGalleryItem({ webformatURL, largeImageURL, alt }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt=""
        onClick={toggleModal}
      />
      {showModal && (
        <Modal modalImg={largeImageURL} closeModal={toggleModal} alt={alt} />
      )}
    </li>
  );
}
