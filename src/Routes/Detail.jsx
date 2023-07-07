import React, { useEffect, useState, useContext } from "react";
import { ContextGlobal } from '../Components/utils/global.context';

import DetailCard from "../Components/DetailCard";
import { useParams } from "react-router-dom";
import styles from '../style/Routes/Home.module.css';

const Detail = () => {
  const { state } = useContext(ContextGlobal);

  const { id } = useParams();

  const [dentist, setDentist] = useState({});

  const getDentist = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    setDentist(data);
  };

  useEffect(() => {
    getDentist();
  }, [id]);

  return (
    <>
      <div className={`${styles.container} ${styles[state.theme]}`}>
        <h1>Detail Dentist {dentist.name} </h1>
        <DetailCard
          id={dentist.id}
          name={dentist.name}
          email={dentist.email}
          phone={dentist.phone}
          website={dentist.website}
          username={dentist.username}
        />
      </div>
    </>
  );
};

export default Detail;
