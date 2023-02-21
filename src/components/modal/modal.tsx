import { createPortal } from 'react-dom';

import { ModalContent } from './modal_content';

import './modal.css';
import { useModalState } from './userModalState';

export const Modal = (props: IUseIdProps) => {
  const { userId } = props;
  const { show, handleClick, albums, isLoading } = useModalState({ userId });

  return (
    <div>
      <button type="button" className="raise" onClick={handleClick}>
        albums
      </button>
      {show &&
        createPortal(
          <ModalContent
            handleClick={handleClick}
            albums={albums}
            isLoading={isLoading}
          />,
          document.body
        )}
    </div>
  );
};
