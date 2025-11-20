import React from 'react';
import PropTypes from 'prop-types';

const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  if (!item) return null;
  return (
    <dialog open className="singleView">
      <h2>{item.title}</h2>
      <p>{item.description}</p>

      {item.media_type.startsWith('image/') ? (
        <img src={item.filename} alt={item.title} width="600" />
      ) : item.media_type.startsWith('video/') ? (
        <video controls width="600">
          <source src={item.filename} type={item.media_type} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Unsupported media type.</p>
      )}

      <button onClick={() => setSelectedItem(null)}>Close</button>
    </dialog>
  );
};

SingleView.propTypes = {
  item: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
