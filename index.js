function sweetAlert(message) {
  const alertDiv = document.createElement('div');
  alertDiv.innerText = message;
  alertDiv.style.position = 'fixed';
  alertDiv.style.top = '50%';
  alertDiv.style.left = '50%';
  alertDiv.style.transform = 'translate(-50%, -50%)';
  alertDiv.style.backgroundColor = '#fff';
  alertDiv.style.padding = '20px';
  alertDiv.style.border = '1px solid #000';
  alertDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  alertDiv.style.zIndex = '1000';

  const closeBtn = document.createElement('button');
  closeBtn.innerText = 'Close';
  closeBtn.style.marginTop = '10px';
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(alertDiv);
  });

  alertDiv.appendChild(closeBtn);
  document.body.appendChild(alertDiv);
}

module.exports = sweetAlert;
