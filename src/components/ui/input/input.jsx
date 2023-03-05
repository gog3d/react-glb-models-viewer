import React from 'react';
import styles from './input.module.css';

const Input = (props) => {
  const {
    type,
    value,
  } = props;

  return (
    <div className={styles.input_container}>
      <input 
        type={type}
        value={value}
        className={styles.input}

      />
      <label></label>
      </div>
      
    </div>
  );
};

export default App;
