import React, { useEffect, useState, useContext } from "react";
import { ContextGlobal } from '../Components/utils/global.context';

import DetailCard from "../Components/DetailCard";
import { useLoaderData, useParams } from "react-router-dom";
import styles from '../style/Routes/Home.module.css';
//import { getDentist } from "../Data/Dentist";

export const detailLoader = async ({params}) => {
  const { id } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!response.ok) {
    throw Error("We could not find the Dentist")
  }

  return response.json();
}

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();
  const dentist = useLoaderData();
  //const [dentist, setDentist] = useState({});

  // useEffect(() => {
  //   getDentist(id).then((payload) => {
  //     console.log(payload);
  //     setDentist(payload);
  //   });
  // }, []);

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

