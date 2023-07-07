import React, { useContext, useEffect } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';
import styles from '../style/Routes/Home.module.css';

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const getDentistList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: "SET_DENTIST_LIST", payload: data })
  };

  useEffect(() => {
    getDentistList();
  }, [state]);

  return (
    <div className={`${styles.container} ${styles[state.theme]}`}>
      <h1>Home</h1>
      <div className={`${styles.card_grid}`}>
        {state.dentistList.map((dentist) => (
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

export default Home;
