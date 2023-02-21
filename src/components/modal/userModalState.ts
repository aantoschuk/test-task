import axios from 'axios';
import { useCallback, useEffect, useState } from "react";

export const useModalState = (props: IUseIdProps) => {

  const { userId } = props;

  const [show, setShow] = useState(false);
  const [albums, setAlbums] = useState<TAlbum[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setShow((prevState) => !prevState);
  }, []);

  const fetchAlbums = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    setAlbums(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchAlbums();
  }, [])

  return { show, handleClick, isLoading, albums };
};