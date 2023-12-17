import React, { useState } from "react";
import { useFormik } from "formik";
import {
  DIREVE_TYPE,
  INITIAL_VALUES,
  SEARCH_PERIOD,
} from "../../../../constant/car-finder/car_finder";
import { CAR_FINDER_VALIDATION } from "../../../../constant/formik/validation";
import {
  onSubmit,
  handleFinancialCarfinder,
} from "../../../../utils/car-finder/car_finder";
import { toast } from "react-toastify";
import Select from "react-select";
import { calculateYear } from "../../../../utils/common/calculate_year";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import SpecialCarsCustomerWeb from "../specialcars";
import PersonalInfo from "../personalinfo";
import { colorOption } from "../../../../utils/value-your-trade/value_your_trade.utils";
import { reactSelectColorStyle } from "../../../../utils/common/react_select";
import Loading from "../../../common/web/loading/loading";
import EFormsHeaderSection from "../../../common/web/eform-header/eforms_header_section";
import CategoryTitle from "../../../common/layout/header/category_title";
import EformsConatctInfo from "../../../common/web/eforms/eforms_contact_info";
import EformsHeader from "../../../common/layout/header/eform_header";
import router, { useRouter } from "next/router";
const CarFinderForm = (props) => {
  const {
    domain,
    colors,
    otherFormik,
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
  const [years] = useState(calculateYear);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => CAR_FINDER_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { data, status, message } = await onSubmit(values, domain);
      setLoading(false);
      if (typeof otherFormik !== "undefined") {
        const frk_carFinder_id = await data?.CarFinder?.id;
        otherFormik.setFieldValue("frk_carFinder_id", +frk_carFinder_id);
      }
      if (status === 201) {
        toast.success("succesfull");
        resetForm();
        if (onClose && typeof otherFormik !== "undefined") {
          onClose();
        }
      } else {
        return toast.error(message);
      }
    },
    enableReinitialize: true,
  });
  return (
    <>
      <div
        className={`p-0 m-0 col-12 ${
          otherFormik === undefined ? "col-sm-11" : ""
        } `}
        style={{ position: "relative" }}
      >
        {typeof otherFormik === "undefined" && (
          <div className="p-0 m-0 row px-lg-5 pt-lg-5 px-4 pt-4 w-100">
            <EFormsHeaderSection
              title="Car Finder"
              desc={dealerData?.carFinder_desc}
              image={dealerData?.carFinder_image_url}
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
              <div className="p-0 m-0 mt-2 col-12">
                <EformsHeader title="Vehicle Information" />
              </div>

              <div className="col-12 p-0 m-0">
                <div className="row p-0 m-0 ">
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
                    <input
                      name="make"
                      className="form-control eforms_input_container"
                      placeholder="Make"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.make}
                    />
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
                    <input
                      name="model"
                      className="form-control eforms_input_container"
                      placeholder="Model"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.model}
                    />
                  </div>

                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
                    <input
                      name="trim"
                      className="form-control eforms_input_container"
                      placeholder="Trim"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.trim}
                    />
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
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
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
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
                        <div className="text-danger">
                          {formik.errors.transmission}
                        </div>
                      )}
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
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
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
                    <Select
                      className="form-select w-100"
                      placeholder="Exterior color"
                      value={colorOption(colors)?.filter(
                        (color) =>
                          color?.colorObject?.id ===
                          formik.values.frk_exterior_color
                      )}
                      options={colorOption(colors)}
                      styles={reactSelectColorStyle}
                      onChange={(e) => {
                        formik.setFieldValue(
                          "frk_exterior_color",
                          e?.colorObject?.id
                        );
                      }}
                    />
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
                    <Select
                      className="form-select w-100"
                      placeholder="Interior color"
                      value={colorOption(colors)?.filter(
                        (color) =>
                          color?.colorObject?.id ===
                          formik.values.frk_interior_color
                      )}
                      options={colorOption(colors)}
                      styles={reactSelectColorStyle}
                      onChange={(e) => {
                        formik.setFieldValue(
                          "frk_interior_color",
                          e?.colorObject?.id
                        );
                      }}
                    />
                  </div>
                  <div className="form-group d-flex col-12 col-sm-6 p-0 m-0 p-1">
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
                    <div className="p-0 px-2 m-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          checked={
                            formik.values.temp_odometer_type === 1
                              ? true
                              : false
                          }
                          value={
                            formik.values.temp_odometer_type === 1
                              ? true
                              : false
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
                          style={{ fontSize: "13px" }}
                          for="odometer_type1"
                        >
                          KM
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          checked={
                            formik.values.temp_odometer_type === 2
                              ? true
                              : false
                          }
                          value={
                            formik.values.temp_odometer_type === 2
                              ? true
                              : false
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
                          style={{ fontSize: "13px" }}
                          for="odometer_type2"
                        >
                          MI
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-group col-12 col-sm-6 col-12 p-0 m-0 p-1">
              <input
                name="vehicle_miles"
                className="form-control eforms_input_container"
                placeholder="Vehicle miles"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vehicle_miles}
              />
              {formik.errors.vehicle_miles && formik.touched.vehicle_miles && (
                <div className="text-danger">{formik.errors.vehicle_miles}</div>
              )}
            </div> */}
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
                    <Select
                      name="year"
                      className="form-select w-100 eforms_input_select_container"
                      placeholder="Year"
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
                      <small className="text-danger">
                        {formik.errors.year}
                      </small>
                    )}
                  </div>
                  <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
                    <Select
                      name="searchPeriod"
                      className="form-select w-100 eforms_input_select_container"
                      placeholder="Search Period"
                      value={SEARCH_PERIOD?.filter(
                        (sp) => sp?.value === formik.values.searchPeriod
                      )}
                      options={SEARCH_PERIOD}
                      styles={reactSelectInputStyle}
                      onChange={(e) => {
                        formik.setFieldValue("searchPeriod", e?.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-12 p-0 m-0 p-1">
                    <textarea
                      rows="4"
                      name="additional_info"
                      className="form-control eforms_textarea_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Additional Info"
                      value={formik.values.additional_info}
                    />
                  </div>
                </div>
                <div className="p-1 m-0 col-12 col-sm-6">
                  <div className="p-0 m-0">
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="btn yellow_button w-100"
                        onClick={(e) => {
                          e.preventDefault();
                          handleFinancialCarfinder(
                            formik,
                            `${router?.pathname}`,
                            true
                          );
                        }}
                      >
                        <span className="p-0 m-0 ">Submit</span>
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
    </>
  );
};

export default CarFinderForm;
