import { useFormik } from "formik";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import { CONTACT_US_INITIAL_VALUE } from "../../../../constant/contact-us/contact_us";
import { CONTACT_US_VALIDATION_SCHEMA } from "../../../../constant/formik/validation";
import { onSubmit } from "../../../../utils/contact-us/contact_us";
import ContactModal from "./contact_us_modal";
const ContactUsModalContainer = ({
  domain,
  iconPath,
  firstParagraph = "",
  secondParagraph = "",
  className = "",
  hasButton,
  disbleButton,
}) => {
  const [show, setShow] = useState(false);
  const handleModalOpen = () => {
    setShow(true);
  };
  const handleModalClose = () => {
    setShow(false);
  };
  const formik = useFormik({
    initialValues: CONTACT_US_INITIAL_VALUE,
    validationSchema: CONTACT_US_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      const { data, message, status } = await onSubmit(values, domain);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <>
      <div className={`p-0 m-0 col-12 col-md-6 col-lg-4 ${className}`}>
        {!disbleButton && (
          <ContactModal
            title="Send A Text Message"
            textBtn="Save Changes"
            open={show}
            onClose={handleModalClose}
            onSubmit={formik.handleSubmit}
            onClick={formik.handleSubmit}
          >
            <div className="p-0 m-0 d-flex row">
              <div className="p-1 m-0 form-group col-12 col-md-6">
                <input
                  id="f_name"
                  name="f_name"
                  type="text"
                  className="form-control eforms_modal_input_container py-4"
                  placeholder="Your First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.f_name}
                />
                {formik.errors.f_name && formik.touched.f_name && (
                  <div className="text-danger">{formik.errors.f_name}</div>
                )}
              </div>

              <div className="p-1 m-0 form-group col-12 col-md-6">
                <input
                  id="l_name"
                  name="l_name"
                  type="text"
                  className="form-control eforms_modal_input_container py-4"
                  placeholder="Your Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.l_name}
                />
                {formik.errors.l_name && formik.touched.l_name && (
                  <div className="text-danger">{formik.errors.l_name}</div>
                )}
              </div>

              <div className="p-1 m-0 form-group col-12 col-md-6">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="form-control eforms_modal_input_container py-4"
                  placeholder="Your Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>

              <div className="p-1 m-0 form-group col-12 col-md-6">
                {/* <NumberFormat
                  prefix="+"
                  format="+# (###) ###-####"
                  mask="_"
                  allowEmptyFormatting={false}
                  onValueChange={(e) => {
                    formik.setFieldValue("mobile", e.value);
                  }}
                  placeholder="Cell Phone Number"
                  onBlur={formik.handleBlur}
                  name="mobile"
                  id="mobile"
                  className="form-control eforms_modal_input_container py-4"
                  value={formik.values.mobile}
                /> */}
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  className="form-control eforms_modal_input_container py-4"
                  placeholder="Your mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
                {formik.errors.mobile && formik.touched.mobile && (
                  <div className="text-danger">{formik.errors.mobile}</div>
                )}
              </div>
              <div className="p-1 m-0 form-group col-12">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="form-control eforms_modal_input_container"
                  placeholder="Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.errors.message && formik.touched.message && (
                  <div className="text-danger">{formik.errors.message}</div>
                )}
              </div>
            </div>
          </ContactModal>
        )}

        <div className="p-0 m-0 h-100 w-100 d-flex align-items-center justify-content-center">
          <div className="p-0 m-0 d-flex flex-column align-items-center justify-content-center contact_us_div_content__container">
            <img
              src={`/images/contact-us/contact-us-${iconPath}`}
              alt="contact-us-icon"
              className="contact_us_img__icon"
            />
            <h5 className="my-2">{firstParagraph}</h5>
            <p>{secondParagraph}</p>
            {hasButton && (
              <button
                disabled={disbleButton}
                className="p-2 px-5 mt-5 contact_us_button__style"
                onClick={(e) => {
                  e.preventDefault();
                  handleModalOpen();
                }}
              >
                START CHAT
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsModalContainer;
