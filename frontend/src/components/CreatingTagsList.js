import React from 'react';
import PropTypes from 'prop-types';

function CreatingTagsList({ tags }) {
  return (
    <ul>
      {
        tags.map((tag, index) => (
          <li key={ `${index + 1}-${tag}-tag` }>{ tag }</li>
        ))
      }
    </ul>
  );
}

CreatingTagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CreatingTagsList;
