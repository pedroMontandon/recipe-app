import React from 'react';
import PropTypes from 'prop-types';
import setIcons from '../helpers/setIcons';

function CategoryCard({ category: { name }, onClick, icon }) {
  return (
    <div>
      <button
        data-testid={ `${name}-category-filter` }
        onClick={ () => onClick(name) }
        className="category-button"
      >
        <div>
          <img src={ icon } alt={ name } />
        </div>
        <span>{setIcons(name)}</span>
      </button>
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default CategoryCard;
