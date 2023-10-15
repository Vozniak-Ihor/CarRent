import css from './CarList.module.css';
import React, { useEffect, useState } from 'react';
import fetchData from '../../Services/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/advertSlice';
import Modal from 'components/Modal/Modal';

import iconAdd from '../../images/active.svg';
import iconRemove from '../../images/normal.svg';

const CarList = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const favorites = useSelector(state => state.advert.items);
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(true);

  const getData = page => {
    fetchData(page)
      .then(data => {
        setAdverts(prevAdverts => {
          return [...prevAdverts, ...data];
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleFavorite = ad => {
    const isFavorite = favorites.some(fav => fav.id === ad.id);
    if (isFavorite) {
      dispatch(removeFavorite(ad));
    } else {
      dispatch(addFavorite(ad));
    }
  };

  const [selectedCar, setSelectedCar] = useState(null);
  const handleLearnMore = info => {
    setSelectedCar(info);
    setModalActive(true);
  };
  return (
    <>
      <div className={css.catalogConteiner}>
        {adverts.map(info => (
          <div className={css.cards} key={info.id}>
            <div className={css.carImgBtn}>
              <img
                className={css.carImg}
                src={info.img}
                alt={`${info.make} ${info.model}, ${info.year}`}
              />
              <button
                onClick={() => toggleFavorite(info)}
                className={css.carFavoriteBtn}
              >
                {favorites.some(fav => fav.id === info.id) ? (
                  <img src={iconAdd} alt="icon add" />
                ) : (
                  <img src={iconRemove} alt="icon remove" />
                )}
              </button>
            </div>
            <div className={css.carTitle}>
              <h3 className={css.carTitleMake}>
                {info.make}{' '}
                <span className={css.carTitleModel}>{info.model}</span>,{' '}
                {info.year}
              </h3>
              <span>{info.rentalPrice}</span>
            </div>
            <p className={css.cardInfo}>
              {info.address} | {info.rentalCompany} | "Premium audio system" |{' '}
              {info.model} | {info.id} | "Power liftgate"
            </p>

            <button
              className={css.cardBtn}
              onClick={() => handleLearnMore(info)}
            >
              Learn more
            </button>
          </div>
        ))}
        {console.log(adverts.length)}
        {adverts.length <= 50 && (
          <button
            onClick={handleLoadMore}
            className={css.loadMoreButton}
            type="button"
          >
            Load More
          </button>
        )}

        <Modal
          active={modalActive}
          setActive={setModalActive}
          infoCar={selectedCar}
        />
      </div>
    </>
  );
};

export default CarList;
