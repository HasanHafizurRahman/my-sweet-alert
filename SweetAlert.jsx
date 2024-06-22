import React from 'react';
import PropTypes from 'prop-types';

const SweetAlert = ({ message, onClose }) => {
  return (
    <div style={styles.alert}>
      <div>{message}</div>
      <button onClick={onClose} style={styles.button}>Close</button>
    </div>
  );
};

const styles = {
  alert: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    border: '1px solid #000',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  button: {
    marginTop: '10px',
  },
};

SweetAlert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SweetAlert;
