import { FaTimes } from "react-icons/fa";
const ContactModal = ({
  children,
  title,
  textBtn,
  onClick,
  onSubmit,
  open = false,
  onClose,
}) => {
  const clickHandler = (e) => {
    onClick && onClick(e);
  };

  const closeHandler = (e) => {
    onClose && onClose(e);
  };

  const submitHandler = (e) => {
    onSubmit && onSubmit(e);
  };

  return (
    <div className={`p-0 m-0 eforms_modal__container ${!open && "d-none"}`}>
      <div className="container p-3 py-4 m-0 eforms_modal_div__container rounded">
        <div className="p-1 m-0 mb-3 d-flex row align-items-center justify-content-between">
          <h4 className="p-0  m-0 footer_h4__category_title">{title}</h4>
          <button
            className="p-0 m-0 modal_close_button__style"
            onClick={closeHandler}
          >
            <FaTimes size={28} />
          </button>
        </div>
        <form className="p-0 m-0 row" onSubmit={submitHandler}>
          <div className="p-0 m-0 w-100">{children}</div>
          <button
            type="submit"
            className="p-2 m-1 mt-3 eforms_modal_button__style"
            onClick={clickHandler}
          >
            {textBtn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
