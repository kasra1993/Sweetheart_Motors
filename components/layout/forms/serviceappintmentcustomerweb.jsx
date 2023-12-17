import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { INITIAL_VALUES } from "../../../constant/service-appointment/service_appointment";
import { SERVICE_APPOINTMENT_VALIDATION } from "../../../constant/formik/validation";
import {
  handleAddClick,
  handleInputChange,
  handleRemoveClick,
  onSubmit,
} from "../../../utils/service-appointment/service_appointment";
import SpecialCarsCustomerWeb from "./specialcars";
import PersonalInfo from "./personalinfo";
import Select from "react-select";
import { reactSelectInputStyle } from "../../../utils/common/react_select_styles";
import EFormsHeaderComponent from "./e_forms_header";
import { calculateYear } from "../../../utils/common/calculate_year";
import Loading from "../../common/web/loading/loading";
import EFormsHeaderSection from "../../common/web/eform-header/eforms_header_section";
import CategoryTitle from "../../common/layout/header/category_title";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import EformsConatctInfo from "../../common/web/eforms/eforms_contact_info";
import EformsHeader from "../../common/layout/header/eform_header";
import { findScript } from "../../../utils/common/html_script";

const ServiceAppintmentCustomerWeb = (props) => {
  const { specialCars, domain, dealerData } = props;
  const [isLoading, setLoading] = useState(false);
  const [years] = useState(calculateYear);
  useEffect(() => {
    calculateYear();
  }, []);
  const [service, setService] = useState([
    { requested_service: "", comment: "" },
  ]);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => SERVICE_APPOINTMENT_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      if (
        service.length === 1 &&
        (service[0].requested_service === "" || service[0].comment === "")
      ) {
        formik.setFieldError("services", "Select atleast one service");
      } else {
        setLoading(true);
        const { data, status, message } = await onSubmit(
          values,
          service,
          domain
        );
        setLoading(false);
        if (status === 201) {
          toast.success("successful");
          setService([{ requested_service: "", comment: "" }]);
          resetForm();
        } else {
          toast.error(message);
        }
      }
      return;
    },
  });

  return (
    <div className="p-0 m-0 w-100 row" style={{ position: "relative" }}>
      <div
        className="p-0 eforms_image_patern d-none d-lg-block"
        style={{ width: "24%" }}
      >
        <img src="/images/eforms/formpatern.png" className="w-100" alt="" />
      </div>
      <div className=" m-0 p-0 col-12">
        <EFormsHeaderSection
          title="Service Appoinment"
          desc={dealerData?.serviceApointment_desc}
          image={dealerData?.serviceApointment_image_url}
        />
      </div>
      <div className="p-0 pl-3 pl-sm-5 pt-5 pb-3 m-0 col-12 col-lg-8">
        <div className="p-0 m-0 row">
          <div
            className="p-0 m-0"
            dangerouslySetInnerHTML={{
              __html: findScript(dealerData?.serviceApointment_desc),
            }}
          />
          <div className="p-0 m-0 col-12">
            <form className="p-3 row" onSubmit={formik.handleSubmit}>
              <div className="p-0 m-0 mt-2 col-12">
                <EformsHeader title="Personal Information" />
              </div>
              <PersonalInfo formik={formik} />
              <div className="p-0 m-0 col-12">
                <EformsHeader title="Vehicle Information" />
              </div>
              <div className="p-0 m-0 col-12">
                <div className="p-0 m-0 row pr-3 pr-sm-5">
                  <div className="form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1">
                    <input
                      name="make"
                      className="form-control eforms_input_container"
                      placeholder="Make"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.make}
                    />
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1">
                    <input
                      name="model"
                      className="form-control eforms_input_container"
                      placeholder="Model"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.model}
                    />
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1">
                    <Select
                      name="year"
                      className="form-select w-100 eforms_input_select_container"
                      placeholder="Year"
                      options={years}
                      styles={reactSelectInputStyle}
                      onChange={(e) => {
                        formik.setFieldValue("year", e?.value);
                      }}
                    />
                    {formik.errors.year && formik.touched.year && (
                      <p className="text-danger">{formik.errors.year}</p>
                    )}
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1">
                    <input
                      name="trim"
                      className="form-control p-3 eforms_input_container"
                      placeholder="Trim"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.trim}
                    />
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1">
                    <input
                      type="date"
                      name="requested_date"
                      className="form-control p-3 eforms_input_select_container "
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.requested_date}
                    />
                  </div>
                  {formik.errors.requested_date &&
                    formik.touched.requested_date && (
                      <p className="text-danger text-left col-12 col-sm-6">
                        {formik.errors.requested_date}
                      </p>
                    )}
                  <div className="form-group col-12 p-0 m-0 mt-2 mb-2 p-1">
                    <textarea
                      name="comments"
                      className="form-control eforms_textarea_container"
                      placeholder="Message..."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      rows="3"
                      value={formik.values.comments}
                    />
                  </div>
                </div>
                <div className="p-0 m-0 col-12">
                  <div
                    className="p-2 px-3 row"
                    style={{ position: "relative" }}
                  >
                    <div className="p-0 m-0 d-flex w-100 justify-content-start align-items-center">
                      <div className="p-0 m-0 col-12">
                        <EformsHeader title="List" />
                      </div>
                      <button
                        style={{
                          position: "absolute",
                          top: "12px",
                          right: "0",
                        }}
                        type="button"
                        className="p-0 m-0 bg-transparent border-0 col-2"
                        onClick={() => {
                          handleAddClick(service, setService);
                        }}
                      >
                        <div className="d-flex justify-content-center align-items-center service_plus-btn">
                          <FaPlus color="#fff" />
                        </div>
                      </button>
                    </div>
                    <div className="p-0 m-0 mt-3 row w-100">
                      {service?.map((item, index) => (
                        <div
                          key={`serviceAppoinment${index}`}
                          className="p-0 m-0 mb-2 col-12"
                        >
                          <div className="p-0 m-0 row align-items-center w-100 eform_list_inputs_div__container">
                            <div className="p-0 m-0 col-12 col-sm-11">
                              <div className="p-0 m-0 row w-100">
                                <div className="form-group col-sm-6 col-12  p-2 m-0">
                                  <input
                                    name="requested_service"
                                    className="form-control p-3 eforms_input_container"
                                    placeholder="Request Service"
                                    onBlur={formik.handleBlur}
                                    onChange={(e) =>
                                      handleInputChange(
                                        e,
                                        index,
                                        service,
                                        setService,
                                        formik
                                      )
                                    }
                                    value={item.requested_service}
                                  />
                                </div>
                                <div className="form-group col-sm-6 col-12  p-2 m-0">
                                  <input
                                    name="comment"
                                    className="form-control p-3 eforms_input_container"
                                    placeholder="Comment Service"
                                    onBlur={formik.handleBlur}
                                    onChange={(e) =>
                                      handleInputChange(
                                        e,
                                        index,
                                        service,
                                        setService,
                                        formik
                                      )
                                    }
                                    value={item.comment}
                                  />
                                  {formik.errors.services && (
                                    <p className="p-0 mt-1 mb-3 ml-3 text-danger">
                                      at least one service
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="text-center p-0 m-0 col-1">
                              <button
                                style={{
                                  width: "46px",
                                  height: "46px",
                                  backgroundColor: "#111111",
                                  borderRadius: "0",
                                }}
                                type="button"
                                className="btn p-0 m-0"
                                onClick={() => {
                                  handleRemoveClick(index, service, setService);
                                }}
                              >
                                <i className="eform_list_trash_icon__style">
                                  <FaTrashAlt color="#fff" />
                                </i>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-0 m-0 mt-4 col-12 ">
                  <div className="col-12 mt-4 p-0 m-0 pr-3 pr-sm-5">
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="btn pl-4 pr-4 pt-1 pb-1 eform_button__submit"
                      >
                        <span className="p-0 m-0">Submit</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="p-0 m-0 col-12 col-lg-4">
        <div className="p-0 pb-4 pt-lg-5 m-0 d-flex flex-column">
          <div className="p-0 px-3 m-0">
            <EformsConatctInfo dealerData={dealerData} />
          </div>
          {/* <div className="pb-5 px-3 px-sm-5 pt-3 m-0">
                <SpecialCarsCustomerWeb data={dealerData?.specialData} />
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceAppintmentCustomerWeb;
