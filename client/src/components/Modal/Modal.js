import ReactDom from 'react-dom';

const modal = document.getElementById('modal');

function Modal({ modalOff, children }) {
  return ReactDom.createPortal(<div />, modal);
}

export default Modal;
