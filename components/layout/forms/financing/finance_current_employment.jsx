import Select from "react-select";
import { USER_EMPLOYMENT_OPTIONS } from "../../../../constant/fainancial/fainancial";
import { useGetAllCitiesWithDetail } from "../../../../hooks/city/useGetAllCitiesWithDetail";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";

const FinancialCurrentEmployment = ({ formik }) => {
  const { options: cityOptions } = useGetAllCitiesWithDetail();
  return (
    <div className="p-0 m-0 row w-100">
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <Select
          styles={reactSelectInputStyle}
          options={USER_EMPLOYMENT_OPTIONS}
          className="form-select w-100  eforms_input_select_container"
          name="user_curr_employment"
          placeholder="Type"
          onChange={(option) => {
            formik.setFieldValue("user_curr_employment", option.value);
          }}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_curr_employer"
          className="form-control  eforms_input_container"
          placeholder="Employer"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_employer}
        />
      </div>

      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_curr_emp_occupation"
          className="form-control  eforms_input_container"
          placeholder="Occupation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_occupation}
        />
      </div>
      {/* <div className="form-group col-12 col-md-6 p-0 m-0 mb-2 p-1">
              <Select
                name="user_currAddr_home_status"
                className="form-select w-100 eforms_input_select_container"
                placeholder="Home Status"
                options={[
                  { value: 1, label: "Rent" },
                  { value: 2, label: "Own with mortage" },
                  { value: 3, label: "With parent" },
                  { value: 4, label: "Other" },
                ]}
                styles={reactSelectInputStyle}
                onChange={(e) => {
                  formik.setFieldValue(
                    "user_currAddr_home_status",
                    e?.value
                  );
                }}
              />
            </div> */}
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_curr_emp_phone"
          className="form-control  eforms_input_container"
          placeholder="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_phone}
        />
        {formik.errors.user_curr_emp_phone &&
          formik.touched.user_curr_emp_phone && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_phone}
            </small>
          )}
      </div>

      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_curr_emp_income"
          className="form-control  eforms_input_container"
          placeholder="Gross Income"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_income}
        />
        {formik.errors.user_curr_emp_income &&
          formik.touched.user_curr_emp_income && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_income}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_curr_emp_Duration_year"
          className="form-control  eforms_input_container"
          placeholder="Duration Year"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_Duration_year}
        />
        {formik.errors.user_curr_emp_Duration_year &&
          formik.touched.user_curr_emp_Duration_year && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_Duration_year}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_curr_emp_Duration_month"
          className="form-control  eforms_input_container"
          placeholder="Duration Month"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_Duration_month}
        />
        {formik.errors.user_curr_emp_Duration_month &&
          formik.touched.user_curr_emp_Duration_month && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_Duration_month}
            </small>
          )}
      </div>
      {/* </div> */}

      <div className="form-group col-12 p-0 m-0 p-1">
        <textarea
          rows="4"
          name="user_curr_emp_addr"
          className="form-control eforms_textarea_container"
          placeholder="Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_addr}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_curr_emp_postalcode"
          className="form-control  eforms_input_container"
          placeholder="Postal Code"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_postalcode}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          options={cityOptions}
          onChange={(option) => {
            formik.setFieldValue("frk_user_curr_emp_city_id", option?.value);
            formik.setFieldValue(
              "frk_user_curr_emp_province_id",
              option?.province
            );
            formik.setFieldValue(
              "frk_user_curr_emp_country_id",
              option?.country
            );
          }}
          placeholder="City"
          name="frk_user_curr_emp_city_id"
          onBlur={formik.handleBlur}
        />
        {formik.errors.frk_user_curr_emp_city_id &&
          formik.touched.frk_user_curr_emp_city_id && (
            <small className="text-danger">
              {formik.errors.frk_user_curr_emp_city_id}
            </small>
          )}
      </div>

      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          className="form-control eforms_input_container"
          name="frk_user_curr_emp_province_id"
          placeholder="Province"
          value={formik.values.frk_user_curr_emp_province_id}
          disabled
        />
        {formik.errors.frk_user_curr_emp_province_id &&
          formik.touched.frk_user_curr_emp_province_id && (
            <small className="text-danger">
              {formik.errors.frk_user_curr_emp_province_id}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          placeholder="Country"
          name="frk_user_curr_emp_country_id"
          className="form-control eforms_input_container"
          value={formik.values.frk_user_curr_emp_country_id}
          disabled
        />
        {formik.errors.frk_user_curr_emp_country_id &&
          formik.touched.frk_user_curr_emp_country_id && (
            <small className="text-danger">
              {formik.errors.frk_user_curr_emp_country_id}
            </small>
          )}
      </div>
    </div>
  );
};

export default FinancialCurrentEmployment;
