import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [results, setResults] = useState([]);
  const [toogle, setToogle] = useState(true);
  // serve para salvar o último botao clicado, ainda não foi usado
  const [stateLocked, setStateLocked] = useState(false);

  const [categories, setCategories] = useState({
    meals: [],
    drinks: [],
  });

  const data = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    categories,
    setCategories,
    results,
    setResults,
    toogle,
    setToogle,
    stateLocked,
    setStateLocked,
  };

  return (
    <MyContext.Provider value={ data }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
