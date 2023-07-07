import React, { useState, useContext } from "react";
import styles from '../style/Form.module.css';
import { ContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faExclamationCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const { state } = useContext(ContextGlobal);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const nameValidator = (name) => name.length >= 5;

  const emailValidator = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const nameHandler = (event) => {
    const enteredName = event.target.value;
    setName(enteredName);
    setIsNameValid(nameValidator(enteredName));
  };

  const emailHandler = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setIsEmailValid(emailValidator(enteredEmail));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    setIsNameValid(nameValidator(name));
    setIsEmailValid(emailValidator(email));
    setIsFormValid(isNameValid && isEmailValid);
  };

  return (
    <div className={`${styles.formContainer} ${styles[state.theme]}`}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.inputContainer} ${
            isFormSubmitted && !isNameValid ? styles.inputInvalid : ""
          }`}
        >
          <label htmlFor="name">
            Name:{`${isFormSubmitted && !isNameValid ? "*" : ""}`}
          </label>
          <input
            type="text"
            value={name}
            onChange={nameHandler}
            placeholder="Insert your name"
            required
          />
        </div>
        <div
          className={`${styles.inputContainer} ${
            isFormSubmitted && !isEmailValid ? styles.inputInvalid : ""
          }`}
        >
          <label htmlFor="name">
            Email:{`${isFormSubmitted && !isEmailValid ? "*" : ""}`}
          </label>
          <input
            type="text"
            value={email}
            onChange={emailHandler}
            placeholder="Insert your email"
            required
          />
        </div>

        {isFormSubmitted && !isFormValid && (
          <div className={styles.formErrorContainer}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            <p>Por favor verifique su información nuevamente</p>
          </div>
        )}

        <button className={styles.submitButton} type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
          <p>Send</p>
        </button>
      </form>

      {isFormSubmitted && isFormValid && (
        <div className={styles.formSuccessContainer}>
          <FontAwesomeIcon icon={faCircleCheck} />
          <p>Gracias {name},</p>
          <p>te contactaremos cuanto antes vía mail.</p>
        </div>
      )}
    </div>
  );
};

export default Form;
