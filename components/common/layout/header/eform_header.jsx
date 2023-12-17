const EformsHeader = ({ title = "", className = "" }) => {
  return (
    <div
      className={`p-0 py-2 w-100 eform_form_header_div__conatiner d-flex ${className}`}
    >
      <p className="p-0 m-0 py-1 col-12">{title}</p>
    </div>
  );
};

export default EformsHeader;
