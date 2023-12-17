import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactInfo = (props) => {
  const { data } = props;
  return (
    <>
      <h5 className="d-flex row justify-content-center align-items-start text-center col-12 p-0 px-sm-2 px-md-3 pb-md-2 pb-sm-3 m-0 info-service-appointment-title">
        CONTACT INFORMATION
      </h5>
      <div className="p-0 m-0 d-flex row align-items-center justify-content-center col-12">
        <div className="col-md-12 col-sm-12 col-12 p-1 m-0 mb-md-5 ">
          <div className="contact_information_container-style  p-4 m-0 d-flex flex-column">
            <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12">
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12  border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-1 border-right-contactinfo py-3 pr-3">
                  <img
                    src="/images/social/social-for-contact-info/noun_international_1755842.png"
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="p-0 m-0 d-flex flex-row justify-content-end align-items-center col-11">
                  <h6 className="p-0 m-0 ml-2 contactinfo-text">
                    <FaMapMarkerAlt /> {data?.business_street}
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center">
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-1 border-right-contactinfo py-3 pr-3">
                  <img
                    src="/images/social/social-for-contact-info/noun_Phone_1214440.png"
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="p-0 m-0 d-flex flex-row justify-content-end align-items-center col-11">
                  <h6 className="p-0 m-0 ml-2 contactinfo-text">
                    <FaPhone />
                    <a
                      href={phonenumberConvertor(data?.business_phone)}
                      rel="noopener noreferrer"
                      className="p-0 m-0 mx-2 text-white text-decoration-none"
                    >
                      {data?.business_phone}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center">
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-1 border-right-contactinfo py-3 pr-3">
                  <img
                    src="/images/social/social-for-contact-info/noun_1755842.png"
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="p-0 m-0 d-flex flex-row justify-content-end align-items-center col-11">
                  <h6 className="p-0 m-0 ml-2 contactinfo-text">
                    Email us : {data?.primary_email}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
