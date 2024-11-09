import './CustomModal.css';


// id, header, footer, content , onClose
const Modal = ({ id, header, content, footer, onClose }) => {
  return (
    <div className="modal-container">
      <header className='header'>
        <span className='close' onClick={onClose}>X</span>
        {header ? header : <div>This is default Header</div>}
      </header>
      <div className="content-area">
        {
            content ? content: <div>This is default Content</div>
        }
      </div>
      <div className="footer-area">
        {
            footer ? footer: <div>This is default Footer</div>
        }
      </div>
    </div>
  );
};

export default Modal;
