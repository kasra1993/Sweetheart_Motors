import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";
import { VALUE_YOURTRADE_VALIDATION } from "../../../constant/formik/validation";
import {
  DIREVE_TYPE,
  INITIAL_VALUES,
} from "../../../constant/value-your-trade/value_your_trade";
import { useGetSpecialCars } from "../../../hooks/vehicles/useGetSpecialCars";
import {
  colorOption,
  handleFinancialValueyourtrade,
  onSubmit,
} from "../../../utils/value-your-trade/value_your_trade.utils";
import { toast } from "react-toastify";
import Select from "react-select";
import { calculateYear } from "../../../utils/common/calculate_year";
import { reactSelectInputStyle } from "../../../utils/common/react_select_styles";
import EFormsHeaderComponent from "./e_forms_header";
import { reactSelectColorStyle } from "../../../utils/common/react_select";
import Loading from "../../common/web/loading/loading";
import PersonalInfo from "./personalinfo";
import SpecialCarsCustomerWeb from "./specialcars";
import EFormsHeaderSection from "../../common/web/eform-header/eforms_header_section";
import CategoryTitle from "../../common/layout/header/category_title";
import EformsHeader from "../../common/layout/header/eform_header";
import EformsConatctInfo from "../../common/web/eforms/eforms_contact_info";

const ValuetradeCustomerWeb = (props) => {
  const {
    domain,
    colors,
    dealerData,
    specialCars,
    onClose,
    transmitionData,
    transmitionLoading,
    transmitionFetching,
    bodyStylesData,
    bodyStylesIsLoadig,
    bodyStylesIsFetching,
  } = props;
  const [isLoading, setLoading] = useState(false);
  const { otherFormik = undefined } = props;
  const [years] = useState(calculateYear);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => VALUE_YOURTRADE_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { data, message, status } = await onSubmit(values, domain);
      setLoading(false);
      if (status === 201) {
        //reusable for financial component to set frk value your trade id
        if (typeof otherFormik !== "undefined") {
          const frk_valueYourTrade_id = await data?.ValueYourTrade?.id;
          otherFormik.setFieldValue(
            "frk_valueYourTrade_id",
            frk_valueYourTrade_id
          );
        }
        toast.success(message);
        resetForm();
        if (onClose && typeof otherFormik !== "undefined") {
          onClose();
        }
      } else {
        toast.error(message);
      }
    },
  });
  const router = useRouter();
  return (
    <div
      className={`p-0 m-0 col-12 ${
        otherFormik === undefined ? "col-sm-11" : ""
      } `}
      style={{ position: "relative" }}
    >
      {typeof otherFormik === "undefined" && (
        <div className="p-0 m-0 row px-lg-5 pt-lg-5 px-4 pt-4 w-100">
          <EFormsHeaderSection
            title="Appraise My Trade"
            desc={dealerData?.valueYourTrade_desc}
            image={dealerData?.valueYourTrade_image_url}
          />
        </div>
      )}

      <div
        className={`p-0 m-0 row w-100 justify-content-start align-items-start ${
          otherFormik === undefined ? "px-lg-5 pt-lg-5 px-4 pt-4" : ""
        }`}
      >
        <div
          className={`p-0 m-0 ${
            typeof otherFormik === "undefined"
              ? "col-12 col-lg-8 forms_container_back"
              : "col-12"
          }`}
        >
          <form
            onSubmit={formik.handleSubmit}
            className={`p-3 m-0 row w-100  ${
              typeof otherFormik === "undefined" ? "" : ""
            } `}
          >
            <div className="p-0 m-0 mt-2 col-12">
              <EformsHeader title="Personal Information" />
            </div>
            <PersonalInfo formik={formik} otherFormik={otherFormik} />
            {typeof otherFormik === "undefined" && (
              <div className="p-0 m-0 mt-2 col-12">
                <EformsHeader title="Vehicle Information" />
              </div>
            )}
            <div className="col-12 p-0 m-0 ">
              <div className="row p-0 m-0  ">
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  <input
                    name="make"
                    className="form-control  eforms_input_container"
                    placeholder="Make"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.make}
                  />
                </div>
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  <input
                    name="model"
                    className="form-control  eforms_input_container"
                    placeholder="Model"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.model}
                  />
                </div>
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  <Select
                    name=""
                    className="form-select w-100 eforms_input_select_container"
                    placeholder="year"
                    options={years}
                    styles={reactSelectInputStyle}
                    value={years?.filter(
                      (year) => year?.value === formik.values.year
                    )}
                    onChange={(e) => {
                      formik.setFieldValue("year", e?.value);
                    }}
                  />
                  {formik.errors.year && formik.touched.year && (
                    <p className="text-danger">{formik.errors.year}</p>
                  )}
                </div>
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  <input
                    name="trim"
                    className="form-control  eforms_input_container"
                    placeholder="Trim"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.trim}
                  />
                  {formik.errors.trim && formik.touched.trim && (
                    <p className="text-danger">{formik.errors.trim}</p>
                  )}
                </div>
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  {bodyStylesIsLoadig || bodyStylesIsFetching ? (
                    <Loading />
                  ) : (
                    <>
                      <Select
                        name="bodyStyle"
                        className="form-select w-100 eforms_input_select_container"
                        placeholder="Body Style"
                        value={bodyStylesData?.filter(
                          (option) => option.value === formik.values.bodyStyle
                        )}
                        options={bodyStylesData}
                        styles={reactSelectInputStyle}
                        onChange={(e) => {
                          formik.setFieldValue("bodyStyle", e?.value);
                        }}
                      />
                    </>
                  )}
                </div>
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  {transmitionLoading || transmitionFetching ? (
                    <Loading />
                  ) : (
                    <>
                      <Select
                        name="transmission"
                        className="form-select w-100 eforms_input_select_container"
                        placeholder="Transmission"
                        value={transmitionData?.filter(
                          (option) =>
                            option.value === formik.values.transmission
                        )}
                        options={transmitionData}
                        styles={reactSelectInputStyle}
                        onChange={(e) => {
                          formik.setFieldValue("transmission", e?.value);
                        }}
                      />
                    </>
                  )}
                  {formik.errors.transmission &&
                    formik.touched.transmission && (
                      <p className="text-danger">
                        {formik.errors.transmission}
                      </p>
                    )}
                </div>
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  <Select
                    name="driveLine"
                    className="form-select w-100 eforms_input_select_container"
                    placeholder="Drivetrain "
                    value={DIREVE_TYPE?.filter(
                      (option) => option.value === formik.values.driveLine
                    )}
                    options={DIREVE_TYPE}
                    styles={reactSelectInputStyle}
                    onChange={(e) => {
                      formik.setFieldValue("driveLine", e?.value);
                    }}
                  />
                </div>
                <div className="form-group d-flex col-sm-6 col-12 p-0 m-0 p-1 justify-content-start align-items-start">
                  <div className="p-0 m-0 w-100">
                    <input
                      name="temp_odometer"
                      className="form-control eforms_input_container"
                      placeholder="Odometer"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.temp_odometer}
                    />
                    {formik.errors.temp_odometer &&
                      formik.touched.temp_odometer && (
                        <small className="text-danger">
                          {formik.errors.temp_odometer}
                        </small>
                      )}
                  </div>
                  <div className="p-0 m-0 pl-2 d-flex flex-column justify-content-start align-items-start">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        checked={
                          formik.values.temp_odometer_type === 1 ? true : false
                        }
                        value={
                          formik.values.temp_odometer_type === 1 ? true : false
                        }
                        type="radio"
                        name="odometer_type"
                        id="odometer_type1"
                        onChange={() =>
                          formik.setFieldValue("temp_odometer_type", 1)
                        }
                      />
                      <label
                        className="form-check-label"
                        for="odometer_type1"
                        style={{ fontSize: "12px" }}
                      >
                        KM
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        checked={
                          formik.values.temp_odometer_type === 2 ? true : false
                        }
                        value={
                          formik.values.temp_odometer_type === 2 ? true : false
                        }
                        type="radio"
                        name="odometer_type"
                        id="odometer_type2"
                        onChange={() =>
                          formik.setFieldValue("temp_odometer_type", 2)
                        }
                      />
                      <label
                        className="form-check-label"
                        for="odometer_type2"
                        style={{ fontSize: "12px" }}
                      >
                        MI
                      </label>
                    </div>
                  </div>
                </div>
                {/* <div className="form-group col-sm-6 p-0 m-0 mb-2 p-1">
                  <input
                    name="vehicle_miles"
                    className="form-control  eforms_input_container"
                    placeholder="Vehicle miles"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.vehicle_miles}
                  />
                  {formik.errors.vehicle_miles && formik.touched.vehicle_miles && (
                    <p className="text-danger">{formik.errors.vehicle_miles}</p>
                  )}
                </div> */}
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  <input
                    name="vin_number"
                    className="form-control  eforms_input_container"
                    placeholder="Vin"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.vin_number}
                  />
                </div>
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  <Select
                    className="form-select w-100"
                    placeholder="Exterior color"
                    options={colorOption(colors)}
                    styles={reactSelectColorStyle}
                    value={colorOption(colors)?.filter(
                      (color) =>
                        color?.colorObject?.id ===
                        formik.values.frk_exterior_color
                    )}
                    onChange={(e) => {
                      formik.setFieldValue(
                        "frk_exterior_color",
                        e?.colorObject?.id
                      );
                    }}
                  />
                </div>
                <div className="form-group col-sm-6 p-0 m-0 p-1">
                  <Select
                    className="form-select w-100 "
                    placeholder="Interior color"
                    options={colorOption(colors)}
                    styles={reactSelectColorStyle}
                    value={colorOption(colors)?.filter(
                      (color) =>
                        color?.colorObject?.id ===
                        formik.values.frk_interior_color
                    )}
                    onChange={(e) => {
                      formik.setFieldValue(
                        "frk_interior_color",
                        e?.colorObject?.id
                      );
                    }}
                  />
                </div>
                <div className="form-group col-12 col-md-12 p-0 m-0 p-1">
                  <textarea
                    rows="6"
                    name="additional_info"
                    className="form-control eforms_textarea_container"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Additional Info"
                    value={formik.values.additional_info}
                  />
                </div>
              </div>
              <div className="p-1 m-0 col-12 col-md-6">
                <div className="p-0 m-0">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <button
                      type="submit"
                      className="btn yellow_button w-100"
                      onClick={(e) => {
                        e.preventDefault();
                        handleFinancialValueyourtrade(
                          formik,
                          `${router?.pathname}`,
                          true
                        );
                      }}
                    >
                      <span className="p-0 m-0">Submit</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        {typeof otherFormik === "undefined" && (
          <div className="p-0 m-0 col-12 col-lg-4 px-lg-4">
            <SpecialCarsCustomerWeb data={dealerData?.specialData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ValuetradeCustomerWeb;
