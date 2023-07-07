import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope, faLink, faPhone } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon className={`${styles.icon}`} icon={faEnvelope} />
          <p>{email}</p>
        </div>
        <div className={`${styles.textIconContainer}`}>
          <FontAwesomeIcon className={`${styles.icon}`} icon={faPhone} />
          <p>{phone}</p>
        </div>
        <div className={`${styles.textIconContainer}`}>
          <FontAwesomeIcon className={`${styles.icon}`} icon={faLink} />
          <p>{website}</p>
        </div>
      </div>

      <button onClick={addFav}>
        <p>Save as favorite</p>
        <FontAwesomeIcon className={`${styles.icon}`} icon={faHeart} color={isFavorite ? "red" : "gray"} />
      </button>
    </div>
  );
};

export default DetailCard;
