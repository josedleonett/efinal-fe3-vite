import React, { useContext } from 'react';
import { FaHeart, FaEnvelope, FaLink, FaPhone } from "react-icons/fa";
import { ContextGlobal } from '../Components/utils/global.context';
import styles from '../style/DetailCard.module.css';

const DetailCard = ({id, name, email, phone, website, username }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const isFavorite = state.dentistFavorites.some((dentist) => dentist.id === id);

  const addFav = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: id });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: { id, name, username } });
    }
  };

  return (
    <div className={`${styles.detailCard} ${styles[state.theme]}`}>
      <img src="/images/doctor.jpg" alt="dentist profile" />

      <div>
        <h2>{name}</h2>

        <div className={`${styles.textIconContainer}`}>
          <FaEnvelope className={`${styles.icon}`} />
          <p>{email}</p>
        </div>
        <div className={`${styles.textIconContainer}`}>
          <FaPhone className={`${styles.icon}`} />
          <p>{phone}</p>
        </div>
        <div className={`${styles.textIconContainer}`}>
          <FaLink className={`${styles.icon}`} />
          <p>{website}</p>
        </div>
      </div>

      <button onClick={addFav}>
        <p>Save as favorite</p>
        <FaHeart
          className={`${styles.icon}`}
          color={isFavorite ? "red" : "gray"}
        />{" "}
      </button>
    </div>
  );
};

export default DetailCard;
