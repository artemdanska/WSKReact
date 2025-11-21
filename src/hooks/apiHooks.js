import {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaUrl = import.meta.env.VITE_MEDIA_API + '/media';
        const mediaItems = await fetchData(mediaUrl);

        const newArray = await Promise.all(
          mediaItems.map(async (item) => {
            const userUrl =
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id;
            const result = await fetchData(userUrl);
            return {...item, username: result.username};
          }),
        );

        setMediaArray(newArray);
        console.log(newArray);
      } catch (error) {
        console.error(error);
      }
    };

    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
