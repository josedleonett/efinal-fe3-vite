import React, { useContext } from 'react'
import styles from "../style/Routes/NotFound.module.css";
import { ContextGlobal } from '../Components/utils/global.context';
import { useRouteError } from 'react-router-dom';


const DetailError= () => {

  const {state} = useContext(ContextGlobal)
  const error = useRouteError()

  return (
    <div className={`${styles.container} ${styles[state.theme]}`}>
      <h1>OH-OH...</h1>
      <p>{error.message}</p>
      <p className={styles.error404}>404</p>
    </div>
  )
}

export default DetailError