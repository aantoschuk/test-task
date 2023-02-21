import { useCallback, useEffect } from 'react';

interface IProps {
  albums: TAlbum[];
  isLoading: boolean;
  handleClick: () => void;
}

export const ModalContent = (props: IProps) => {
  const { handleClick, albums, isLoading } = props;

  const handleKeypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClick();
      }
    },
    [handleClick]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress);

    return () => document.removeEventListener('keydown', handleKeypress);
  }, [handleClick]);

  if (isLoading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          {albums.map((album) => (
            <div className="modal-item" key={album.id}>
              <p>{album.title}</p>
            </div>
          ))}
        </div>
        <button type="button" className="raise" onClick={handleClick}>
          close
        </button>
      </div>
    </div>
  );
};
