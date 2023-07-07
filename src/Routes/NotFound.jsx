import React, { useContext } from 'react'
import styles from "../style/Routes/NotFound.module.css";
import { ContextGlobal } from '../Components/utils/global.context';


const NotFound = () => {

  const {state} = useContext(ContextGlobal)

  return (
    <div className={`${styles.container} ${styles[state.theme]}`}>
      <h1>OH-OH...</h1>
      <p>The page you are looking for may have been moved, deleted o possibly never existed.</p>
      <p className={styles.error404}>404</p>
    </div>
  )
}

export default NotFound