import React from 'react';
import FavoriteCar from 'components/FavoriteCar/FavoriteCar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Favorites.module.css';
const Favorites = () => {
  const favorites = useSelector(state => state.advert.items);
  return (
    <>
      {favorites.length > 0 ? (
        <FavoriteCar />
      ) : (
        <>
          <div className={css.message}>
            You have not yet liked any flavors. Start exploring to add some
            favorites!
          </div>
          <NavLink to="/catalog" className={css.link}>
            Catalog
          </NavLink>
        </>
      )}
    </>
  );
};

export default Favorites;
