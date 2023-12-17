import { FaArrowCircleRight, FaPlus } from "react-icons/fa";

const AccordianToggleStandard = (props) => {
  const { children, onClick, className } = props;
  return (
    <div
      onClick={onClick}
      className="d-flex justify-content-center align-items-center col-1"
      style={{ cursor: "pointer" }}
    >
      <p className="p-0 m-0" style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
        {children}
      </p>
      <i
        className={`p-0 m-0 d-flex justify-content-start col-12 ${className}`}
        style={{ color: "#000" }}
      >
        <FaPlus />
      </i>
    </div>
  );
};

export default AccordianToggleStandard;
