"use client";
import styles from "./formError.module.css";

const FormError = ({message}) => {
  return <p className={styles.message}>{ message}</p>
};

export default FormError;
