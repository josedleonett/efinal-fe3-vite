import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "../style/Card.module.css";
import { ContextGlobal } from "./utils/global.context.jsx";

const Card = ({ name, username, id }) => {
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
    <div className={`${styles.card} ${styles[state.theme]}`}>
      <a className={`${styles.card_child}`} href={`/dentist/${id}`}>
        <img
          className={styles.cardImage}
          src="/images/doctor.jpg"
          alt="dentist profile"
        />
        <div className={styles.cardInfo}>
          <h5>{name}</h5>
          <h6>{id}</h6>
          <h6>{username}</h6>
        </div>
      </a>
      <button onClick={addFav} className={styles.favButton}>
        <FaHeart color={isFavorite ? "red" : "gray"} className={styles.favIco} />
      </button>
    </div>
  );
};

export default Card;