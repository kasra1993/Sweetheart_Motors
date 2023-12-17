import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Select from "react-select";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import PersonalInfo from "../personalinfo";
import SpecialCarsCustomerWeb from "../specialcars";
import { onSubmit } from "../../../../utils/book-appointment/book_appointment";
import Loading from "../../../common/web/loading/loading";
import { BOOKAPPOINMENT_INITIAL_VALUES } from "../../../../constant/bookappointment/bookappointment";
import { BOOK_APPOINTMENT_VALIDATION_SCHEMA } from "../../../../constant/formik/validation";
import EFormsHeaderSection from "../../../common/web/eform-header/eforms_header_section";
import CategoryTitle from "../../../common/layout/header/category_title";
import EformsHeader from "../../../common/layout/header/eform_header";
import EformsConatctInfo from "../../../common/web/eforms/eforms_contact_info";
const BookAppointmentCustomerWeb = (props) => {
  const { specialCars, dealerData, domain } = props;
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: BOOKAPPOINMENT_INITIAL_VALUES,
    validationSchema: BOOK_APPOINTMENT_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { data, status, message } = await onSubmit(domain, values);
      setLoading(false);
      if (status === 201) {
        toast.success("successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <>
      <div
        className="p-0 m-0 col-12 col-sm-11"
        style={{ position: "relative" }}
      >
        <div className="p-0 m-0 row px-lg-5 pt-lg-5 px-4 pt-4 w-100">
          <EFormsHeaderSection
            title="Book Appointment"
            desc={dealerData?.bookApointment_desc}
            image={dealerData?.bookApointment_image_url}
          />
        </div>

        <div className="p-0 m-0 row w-100 px-lg-5 pt-lg-5 px-4 pt-4 justify-content-start align-items-start">
          <div className="p-0 m-0 col-12 col-lg-8 forms_container_back">
            <form onSubmit={formik.handleSubmit} className="p-3 m-0 row w-100">
              <div className="p-0 m-0 mt-2 col-12">
                <EformsHeader title="Personal Information" />
              </div>
              <PersonalInfo formik={formik} />

              <div className="col-12 p-0 m-0">
                <div className="row p-0 m-0 ">
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
                    <Select
                      name="type"
                      className="form-select w-100 eforms_input_select_container"
                      placeholder="Method of contact"
                      options={[
                        { label: "cell phone", value: 1 },
                        { label: "work phone", value: 2 },
                        { label: "home phone", value: 3 },
                        { label: "email", value: 4 },
                      ]}
                      styles={reactSelectInputStyle}
                      onChange={(e) => {
                        formik.setFieldValue("method_of_contact", +e.value);
                      }}
                    />
                    {formik.errors.method_of_contact &&
                      formik.touched.method_of_contact && (
                        <small className="text-danger">
                          {formik.errors.method_of_contact}
                        </small>
                      )}
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
                    <input
                      type="date"
                      name="requested_date"
                      id="requested_date"
                      className="form-control eforms_input_container"
                      {...formik.getFieldProps("requested_date")}
                      placeholder="Date"
                    />
                    {formik.errors.requested_date &&
                      formik.touched.requested_date && (
                        <small className="text-danger">
                          {formik.errors.requested_date}
                        </small>
                      )}
                  </div>

                  <div className="form-group col-12 p-0 m-0 mb-1 p-1">
                    <textarea
                      id="comment"
                      name="comment"
                      className="form-control eforms_textarea_container"
                      placeholder="Additional..."
                      rows="4"
                      cols="50"
                      {...formik.getFieldProps("comment")}
                    />
                    {formik.errors.comment && formik.touched.comment && (
                      <small className="text-danger">
                        {formik.errors.comment}
                      </small>
                    )}
                  </div>

                  <div className="p-1 m-0 col-12 col-md-6">
                    <div className="p-0 m-0">
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <button
                          type="submit"
                          className="btn yellow_button w-100"
                        >
                          <span className="p-0 m-0">Submit</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="p-0 m-0 col-12 col-lg-4 px-lg-4">
            <SpecialCarsCustomerWeb data={dealerData?.specialData} />
          </div>
        </div>
      </div>
    </>
  );
};
export default BookAppointmentCustomerWeb;
