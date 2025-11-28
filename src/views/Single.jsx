import { useLocation, useNavigate } from "react-router";

const Single = () => {
  const { state } = useLocation();
  const item = state.item;
  const navigate = useNavigate();

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Username: {item.username}</p>

      {item.media_type.startsWith("image/") ? (
        <img src={item.filename} alt={item.title} width="450" />
      ) : item.media_type.startsWith("video/") ? (
        <video controls width="450">
          <source src={item.filename} type={item.media_type} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Unsupported media type.</p>
      )}

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Single;
