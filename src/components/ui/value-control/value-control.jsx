import React from 'react';
import styles from './value-control.module.css';

const ValueControl = (props) => {

  const {
    name, 
    value, 
    setValue
  } = props;
  
  const increment = () => {
    let num = Number(value);
    num += 0.1;
    setValue(num.toFixed(1));
  };
  const decrement = () => {
    let num = Number(value);
    num -= 0.1;
    setValue(num.toFixed(1));
  };

  return (
    <div className={styles.container}>
      <label className={styles.name}>{name}</label>
      <label className={styles.value}>{value}</label>
      <div className={styles.button_container}>
        <button onClick={increment} className={styles.button}>+</button>
        <button onClick={decrement} className={styles.button}>-</button>
      </div>
    </div>
  );
};

export default ValueControl;
