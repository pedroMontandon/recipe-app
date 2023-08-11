import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useRecipes from '../hooks/useRecipes';
import CategoryCard from './CategoryCard';
import useFetch from '../hooks/useFetch';
import mealsIcons from '../helpers/mealsIcons';
import drinksIcons from '../helpers/drinkIcons';

const icons = { ...mealsIcons, ...drinksIcons };

function CategoriesList({ title, fetchRecipes }) {
  const { URL_CATEGORIES, URL_CATEGORY_SELECTED, URL_API } = useRecipes(title);
  const [, , categories, fetchCategories] = useFetch([]);
  const [toggles, setToggles] = useState({});

  useEffect(() => {
    fetchCategories(URL_CATEGORIES);
  }, [title]);

  useEffect(() => {
    setToggles(categories
      .reduce((acc, curr) => ({ ...acc, [curr.name]: false }), {}));
  }, [categories]);

  const handleCategoriesClick = (value) => {
    if (!toggles[value]) {
      fetchRecipes(URL_CATEGORY_SELECTED + value);
    } else {
      fetchRecipes(URL_API);
    }
    const allToggles = categories
      .reduce((acc, curr) => (
        { ...acc, [curr.name]: false }
      ), {});
    setToggles({ ...allToggles, [value]: !toggles[value] });
  };

  return (
    <section className="categories-list">
      {
        categories && categories
          .map(
            (category, index) => {
              const categoryIcons = ['allMeals', 'beef', 'side', 'lamb', 'chicken',
                'dessert', 'ordinarydrink', 'cocktail', 'punch/partydrink', 'coffee/tea',
                'shot'];
              const iconStr = category.name.toLowerCase().replaceAll(' ', '');
              console.log(iconStr);
              if (categoryIcons.includes(iconStr)) {
                return (<CategoryCard
                  category={ category }
                  key={ index }
                  onClick={ handleCategoriesClick }
                  icon={ icons[iconStr] }
                />);
              }
              return null;
            },
          )
      }
      <button
        data-testid="All-category-filter"
        onClick={ () => {
          fetchRecipes(URL_API);
          const allToggles = categories
            .reduce((acc, curr) => ({ ...acc, [curr.name]: false }), {});
          setToggles(allToggles);
        } }
        className="category-button"
      >
        <div><img src={ icons[`all${title}`] } alt="All Categories" /></div>
        <span>All</span>
      </button>
    </section>
  );
}

CategoriesList.propTypes = {
  title: PropTypes.string.isRequired,
  fetchRecipes: PropTypes.func.isRequired,
};

export default CategoriesList;
