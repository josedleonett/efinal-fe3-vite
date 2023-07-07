import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from '../style/Routes/Home.module.css';

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${styles.container} ${styles[state.theme]}`}>
      <h1>Favs</h1>
      <div className={`${styles.card_grid}`}>
        {state.dentistFavorites.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
