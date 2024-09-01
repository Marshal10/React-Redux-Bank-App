function Popup({ children, handleClose }) {
  return (
    <>
      <div className="overlay"></div>
      <div className="popup">
        <span className="close-btn" onClick={handleClose}>
          X
        </span>
        {children}
      </div>
    </>
  );
}

export default Popup;
