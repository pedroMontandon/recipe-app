import React from 'react';
import PropTypes from 'prop-types';

function CreatingTagsList({ tags, func }) {
  const deleteTag = (indexToRemove) => {
    const newValue = tags.filter((_, index) => index !== indexToRemove);
    func({ target: { name: 'tags', value: newValue } });
  };

  return (
    <ul>
      {
        tags.map((tag, index) => (
          <li key={ `${index + 1}-${tag}-tag` }>
            <span>{ tag }</span>
            { ' ' }
            <button onClick={ () => deleteTag(index) } type="button">Delete tag</button>
          </li>
        ))
      }
    </ul>
  );
}

CreatingTagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  func: PropTypes.func.isRequired,
};

export default CreatingTagsList;
