import { useFormik } from "formik";
import { useState } from "react";
import { ORDER_SERVICE_VALIDATION } from "../../../constant/formik/validation";
import { INITIAL_VALUES } from "../../../constant/order-service/order_service";
import {
  handleAddClick,
  handleInputChange,
  handleRemoveClick,
  onSubmit,
} from "../../../utils/order-service/order-service";
import { toast } from "react-toastify";
import { reactSelectInputStyle } from "../../../utils/common/react_select_styles";
import { calculateYear } from "../../../utils/common/calculate_year";
import Select from "react-select";
import EFormsHeaderComponent from "./e_forms_header";
import Loading from "../../common/web/loading/loading";
import PersonalInfo from "./personalinfo";
import SpecialCarsCustomerWeb from "./specialcars";
import EFormsHeaderSection from "../../common/web/eform-header/eforms_header_section";
import CategoryTitle from "../../common/layout/header/category_title";
import { FaTrashAlt } from "react-icons/fa";

const ServiceOrderPartCustomerWeb = (props) => {
  const { domain, dealerData } = props;
  const { specialCars } = props;
  const [years] = useState(calculateYear);
  const [service, setService] = useState([{ part_name: "", comment: "" }]);
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => ORDER_SERVICE_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      if (
        service.length === 1 &&
        (service[0].part_name === "" || service[0].comment === "")
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
          setService([{ part_name: "", comment: "" }]);
          resetForm();
          return toast.success("successful");
        } else {
          return toast.error(message);
        }
      }
      return;
    },
  });

  return (
    <div className="p-0 px-1 px-md-3 px-lg-5 pt-4 m-0 w-100">
      <div className="py-5 m-0 d-flex flex-column flex-md-row align-items-scratch">
        <EFormsHeaderSection
          title="Order Part"
          desc={dealerData?.orderPart_desc}
          image={dealerData?.orderPart_image_url}
        />
      </div>
      <div className="p-0 m-0 w-100 row">
        <div className="p-0 m-0 col-12 col-lg-6 col-xl-4">
          <SpecialCarsCustomerWeb data={specialCars} />
        </div>
        <div className="p-0 pb-3 m-0 col-12 col-lg-6 col-xl-8">
          <div className="p-0 m-0 row">
            <div className="p-0 m-0 col-12 col-md-6">
              <form className="p-3 row" onSubmit={formik.handleSubmit}>
                <PersonalInfo formik={formik} type={2} />
                <div className="d-flex row justify-content-start align-items-start text-start col-12">
                  <CategoryTitle
                    title="Vehicle Information"
                    className="eform_title_h4__style"
                    type={2}
                  />
                </div>
                <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
                  <input
                    name="make"
                    className="form-control eforms_input_container"
                    placeholder="Make"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.make}
                  />
                </div>
                <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
                  <input
                    name="model"
                    className="form-control p-3 eforms_input_container"
                    placeholder="Model"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.model}
                  />
                </div>
                <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
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

                <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
                  <input
                    name="orderNo"
                    className="form-control eforms_input_container"
                    placeholder="Order No"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.orderNo}
                  />
                </div>
                <div className="form-group col-12 col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
                  <input
                    type="date"
                    name="requested_date"
                    className="form-control eforms_input_container"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.requested_date}
                  />
                  {formik.errors.requested_date &&
                    formik.touched.requested_date && (
                      <p className="text-danger">
                        {formik.errors.requested_date}
                      </p>
                    )}
                </div>
                <div className="form-group col-sm-12 col-md-12 p-0 m-0 mt-2 mb-2 p-1">
                  <textarea
                    name="comment"
                    className="form-control eforms_textarea_container"
                    placeholder="Your Comment ..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows="5"
                    value={formik.values.comment}
                  />
                </div>
                <div className="p-0 m-0 mt-4 col-12 d-flex row align-items-center justify-content-start">
                  <div className="col-12 mt-4">
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
              </form>
            </div>
            <div className="p-0 m-0 col-12 col-md-6">
              <div className="p-2 px-3 eforms_list_div__container">
                <div className="p-0 m-0 d-flex w-100 justify-content-between align-items-center">
                  <CategoryTitle
                    title="List"
                    className="eform_title_h4__style"
                    type={2}
                  />
                  <button
                    type="button"
                    className="p-0 m-0 bg-transparent border-0"
                    onClick={() => {
                      handleAddClick(service, setService);
                    }}
                  >
                    <img
                      src="/images/common/e-forms/add-to-list-btn-polygan.png"
                      alt=""
                    />
                  </button>
                </div>
                <div className="p-0 m-0 mt-3 row">
                  {service?.map((item, index) => (
                    <div
                      key={`serviceOrderPart${index}`}
                      className="p-0 m-0 mb-2 col-12"
                    >
                      <div className="p-0 m-0 row align-items-center eform_list_inputs_div__container">
                        <div className="p-0 m-0 col-10 col-md-11">
                          <div className="p-1 m-0 d-flex row ">
                            <div className="form-group col-sm-12 p-0 m-0">
                              <input
                                name="part_name"
                                value={item.part_name}
                                className="form-control eforms_input_select_container eform_list_input_req__container bg-transparent"
                                placeholder="Part name"
                                onChange={(e) =>
                                  handleInputChange(
                                    e,
                                    index,
                                    service,
                                    setService,
                                    formik
                                  )
                                }
                              />
                            </div>
                            <div className="form-group col-12 p-0 m-0">
                              <input
                                name="requested_service"
                                className="form-control eforms_input_select_container eform_list_input_req__container bg-transparent"
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
                            <div className="form-group col-12 p-0 m-0">
                              <input
                                name="comment"
                                className="form-control eforms_input_select_container eform_list_input_com__container bg-transparent"
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
                        <div className="text-center p-0 m-0 col-2 col-md-1">
                          <button
                            style={{ boxShadow: "none" }}
                            type="button"
                            className="btn p-0 m-0"
                            onClick={() => {
                              handleRemoveClick(index, service, setService);
                            }}
                          >
                            <i className="eform_list_trash_icon__style">
                              <FaTrashAlt />
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="p-0 m-0 mt-5">
    //   <div className="d-flex row justify-content-center align-items-center text-center col-12 p-0 m-0 pt-3">
    //     <div className="d-flex row justify-content-center align-items-center text-center col-12 p-0 m-3 ">
    //       <EFormsHeaderComponent>Service Order Part</EFormsHeaderComponent>
    //       <div className="d-flex row justify-content-center align-items-start text-center col-12 p-0 m-0">
    //         <div className="d-flex row justify-content-center align-items-center text-center col-12 col-md-7 p-0 m-0">
    //           <div className="d-flex row justify-content-center align-items-center eforms_div__container text-center col-12 p-0 m-0 p-3 ">
    //             <div className="p-0 pb-4 m-0 d-flex rounded flex-column ">
    //               <form
    //                 onSubmit={formik.handleSubmit}
    //                 className="p-1 m-0 row w-100"
    //               >
    //                 <PersonalInfo formik={formik} />
    //                 <div className="d-flex row justify-content-start align-items-start text-start col-12">
    //                   <h4 className="eform_h4__form_header">
    //                     Vehicle Information
    //                   </h4>
    //                 </div>
    //                 <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
    //                   <input
    //                     name="make"
    //                     className="form-control eforms_input_container"
    //                     placeholder="Make"
    //                     onChange={formik.handleChange}
    //                     onBlur={formik.handleBlur}
    //                     value={formik.values.make}
    //                   />
    //                 </div>
    //                 <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
    //                   <input
    //                     name="model"
    //                     className="form-control p-3 eforms_input_container"
    //                     placeholder="Model"
    //                     onChange={formik.handleChange}
    //                     onBlur={formik.handleBlur}
    //                     value={formik.values.model}
    //                   />
    //                 </div>
    //                 <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
    //                   <Select
    //                     name="year"
    //                     className="form-select w-100 eforms_input_select_container"
    //                     placeholder="Year"
    //                     options={years}
    //                     styles={reactSelectInputStyle}
    //                     onChange={(e) => {
    //                       formik.setFieldValue("year", e?.value);
    //                     }}
    //                   />
    //                   {formik.errors.year && formik.touched.year && (
    //                     <p className="text-danger">{formik.errors.year}</p>
    //                   )}
    //                 </div>

    //                 <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
    //                   <input
    //                     name="orderNo"
    //                     className="form-control eforms_input_container"
    //                     placeholder="Order No"
    //                     onChange={formik.handleChange}
    //                     onBlur={formik.handleBlur}
    //                     value={formik.values.orderNo}
    //                   />
    //                 </div>
    //                 <div className="form-group col-12 col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
    //                   <input
    //                     type="date"
    //                     name="requested_date"
    //                     className="form-control eforms_input_container"
    //                     onChange={formik.handleChange}
    //                     onBlur={formik.handleBlur}
    //                     value={formik.values.requested_date}
    //                   />
    //                   {formik.errors.requested_date &&
    //                     formik.touched.requested_date && (
    //                       <p className="text-danger">
    //                         {formik.errors.requested_date}
    //                       </p>
    //                     )}
    //                 </div>
    //                 <div className="form-group col-sm-12 col-md-12 p-0 m-0 mt-2 mb-2 p-1">
    //                   <textarea
    //                     name="comment"
    //                     className="form-control eforms_input_container"
    //                     placeholder="Your Comment ..."
    //                     onChange={formik.handleChange}
    //                     onBlur={formik.handleBlur}
    //                     rows="5"
    //                     value={formik.values.comment}
    //                   />
    //                 </div>
    //                 <div className="p-0 m-0 mt-4 col-12 d-flex row align-items-center justify-content-start">
    //                   <div className="col-12 mt-4">
    //                     {isLoading ? (
    //                       <Loading />
    //                     ) : (
    //                       <button
    //                         type="submit"
    //                         className="btn pl-4 pr-4 pt-1 pb-1 eform_button__submit"
    //                       >
    //                         Submit
    //                       </button>
    //                     )}
    //                   </div>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //           <div className="d-flex row text-center col-12 p-0 mt-5 eforms_div__container p-3 my-3 ">
    //             <div className="d-flex flex-row w-100 justify-content-between align-items-center  text-start ">
    //               <h4 className="eform_h4__form_header">List</h4>
    //               <button
    //                 type="button"
    //                 className="eform_button__services"
    //                 onClick={() => {
    //                   handleAddClick(service, setService);
    //                 }}
    //               >
    //                 <p className="p-2 m-0 "> Add</p>
    //               </button>
    //             </div>
    //             <div className="p-2  w-100 d-flex row justify-content-between align-items-start ">
    //               <div className="col-12 pr-0">
    //                 {service?.map((item, index) => (
    //                   <div
    //                     key={item}
    //                     className="col-12 d-flex eforms_input_select_container row px-0  my-3 ml-1"
    //                   >
    //                     <div className="p-0 m-0 d-flex col-sm-11 col-10 row">
    //                       <div className="form-group col-sm-12 p-0 m-0 mt-2 mb-2 p-1">
    //                         <input
    //                           name="part_name"
    //                           value={item.part_name}
    //                           className="form-control eforms_input_select_container bg-transparent"
    //                           placeholder="part_name"
    //                           onChange={(e) =>
    //                             handleInputChange(
    //                               e,
    //                               index,
    //                               service,
    //                               setService,
    //                               formik
    //                             )
    //                           }
    //                         />
    //                       </div>
    //                       <div className="form-group col-sm-12 p-0 m-0 mt-2 mb-2">
    //                         <input
    //                           name="comment"
    //                           value={item.comment}
    //                           className="form-control eforms_input_select_container bg-transparent"
    //                           placeholder="Comments"
    //                           onChange={(e) =>
    //                             handleInputChange(
    //                               e,
    //                               index,
    //                               service,
    //                               setService,
    //                               formik
    //                             )
    //                           }
    //                         />
    //                       </div>
    //                       {formik.errors.services && (
    //                         <p className="p-0 mt-1 mb-3 ml-3 text-danger">
    //                           at least one service
    //                         </p>
    //                       )}
    //                     </div>
    //                     <div className="row w-100 h-100 p-0 m-0 col-sm-1 col-2  mt-2">
    //                       <button
    //                         style={{ boxShadow: "none" }}
    //                         type="button"
    //                         className="w-2 m-1 btn p-0 m-0 d-flex row col-12 pt-2"
    //                         onClick={() => {
    //                           handleRemoveClick(index, service, setService);
    //                         }}
    //                       >
    //                         <i className="d-flex justify-content-center align-items-center text-center col-1 ml-1">
    //                           <img
    //                             src="/icons/btn-site-border.png"
    //                             className="m-1 "
    //                           />
    //                         </i>
    //                       </button>
    //                     </div>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="d-flex row justify-content-center align-items-start text-start col-12 col-md-4 p-0 m-0  ml-md-4 px-3 eforms_div__special_car">
    //           <div className="d-flex row justify-content-start align-items-start text-start col-12 p-0">
    //             <h4 className="eform_h4__special_cars text-left p-0 py-3">
    //               Special Offers
    //             </h4>
    //           </div>
    //           <SpecialCarsCustomerWeb data={specialCars} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ServiceOrderPartCustomerWeb;
