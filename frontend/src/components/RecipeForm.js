import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

function RecipeForm(
  {
    states,
    func,
    children,
  },
) {
  const [, , categories, getCategories] = useFetch([]);
  const [, , ingredients, getIngredients] = useFetch([]);

  const fetchCategories = async () => {
    getCategories(`/${states.type.toLowerCase()}/categories`);
  };

  const fetchIngredients = async () => {
    getIngredients('/ingredients');
  };

  useEffect(() => {
    fetchCategories();
    fetchIngredients();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [states.type]);

  return (
    <form>
      <label>
        <input
          name="name"
          value={ states.name }
          onChange={ func }
          type="text"
          placeholder="Name:"
        />
      </label>
      <br />
      <label>
        Type:
        <br />
        <input
          type="radio"
          value="Meals"
          name="type"
          defaultChecked
          onClick={ func }
        />
        Meals
        <br />
        <input
          type="radio"
          value="Drinks"
          name="type"
          onClick={ func }
        />
        Drinks
      </label>
      <br />
      <label>
        Category:
        <select
          name="categoryId"
          value={ states.categoryId }
          onChange={ func }
        >
          <option value={ 0 }>
            -- Select --
          </option>
          {
            categories.map(({ id, name }) => (
              <option value={ id } key={ `${id}-${name}` }>{name}</option>
            ))
          }
        </select>
      </label>
      <br />
      <label>
        Area:
        <select
          name="areaId"
          value={ states.areaId }
          onChange={ func }
        >
          <option value={ null }>
            Unknown
          </option>
        </select>
      </label>
      <br />
      <label>
        <textarea
          placeholder="Write the instructions"
          name="instructions"
          onChange={ func }
        />
      </label>
      <br />
      <label>
        <input
          name="thumb"
          value={ states.thumb }
          onChange={ func }
          type="text"
          placeholder="Image link:"
        />
      </label>
      <br />
      <label>
        <input
          placeholder="Tag:"
          id="tag"
        />
        <button
          type="button"
          onClick={ () => {
            const tag = document.getElementById('tag');
            if (tag.value) {
              func({ target: { name: 'tags', value: [...states.tags, tag.value] } });
            }
            tag.value = '';
          } }
        >
          Add tag

        </button>
      </label>
      <br />
      <label>
        <input
          name="youtube"
          value={ states.youtube }
          onChange={ func }
          type="text"
          placeholder="Video link:"
        />
      </label>
      <br />
      <label>
        <select
          name="ingredient"
          id="ingredient"
        >
          <option value={ 0 }>
            -- Select --
          </option>
          {
            ingredients.map(({ id, name }) => (
              <option key={ `${id}-${name}` } value={ id }>{name}</option>
            ))
          }
        </select>
        <input
          id="measure"
          placeholder="Measure:"
        />
        <button
          type="button"
          onClick={ () => {
            const id = document.getElementById('ingredient');
            const measure = document.getElementById('measure');
            if (!id.value || !measure.value) return;
            func({
              target: {
                name: 'ingredients',
                value: [
                  ...states.ingredients,
                  {
                    id: Number(id.value),
                    measure: measure.value,
                  },
                ],
              },
            });
            id.value = 0;
            measure.value = '';
          } }
        >
          Add ingredient to recipe
        </button>
      </label>
      <br />
      {
        children
      }
    </form>
  );
}

RecipeForm.propTypes = {
  states: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      categoryId: PropTypes.number.isRequired,
      areaId: PropTypes.number,
      instructions: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      youtube: PropTypes.string,
      ingredients: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          measure: PropTypes.string,
        }),
      ).isRequired,
    },
  ).isRequired,
  func: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default RecipeForm;
