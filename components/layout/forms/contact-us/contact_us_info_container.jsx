const ConatacyUsInfoContainer = ({
  iconPath,
  firstParagraph = "",
  secondParagraph = "",
  className = "",
}) => {
  return (
    <div className={`p-0 m-0 col-12 col-md-6 col-lg-4 ${className}`}>
      <div className="p-0 m-0 h-100 w-100 d-flex align-items-center justify-content-center">
        <div className="p-0 m-0 d-flex flex-column align-items-center justify-content-start contact_us_div_content__container">
          <img
            src={`/images/contact-us/contact-us-${iconPath}`}
            alt="contact-us-icon"
            className="contact_us_img__icon"
          />
          <h5 className="my-2 px-2 px-md-5 text-center">{firstParagraph} </h5>
          <p className="text-center">{secondParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default ConatacyUsInfoContainer;
