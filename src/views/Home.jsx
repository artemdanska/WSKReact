import { useState, useEffect } from "react";
import MediaRow from "../components/MediaRow";
import { fetchData } from "../utils/fetchData";

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const mediaUrl = import.meta.env.VITE_MEDIA_API + "/media";
      const mediaItems = await fetchData(mediaUrl);

      const newArray = await Promise.all(
        mediaItems.map(async (item) => {
          const userUrl =
            import.meta.env.VITE_AUTH_API + "/users/" + item.user_id;
          const result = await fetchData(userUrl);
          return { ...item, username: result.username };
        })
      );

      console.log(newArray);
      setMediaArray(newArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getMedia();
  }, []);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
