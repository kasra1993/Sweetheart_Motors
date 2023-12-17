import Select from "react-select";
import { useGetAllCitiesWithDetail } from "../../../../hooks/city/useGetAllCitiesWithDetail";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
const FinancialCurrntAddress = ({ formik }) => {
  const { options: cityOptions } = useGetAllCitiesWithDetail();
  return (
    <div className="p-0  m-0 row w-100">
      <div className="form-group col-12 col-12 p-0 m-0 p-1">
        <textarea
          rows={4}
          name="user_currAddr"
          className="form-control  eforms_textarea_container"
          placeholder="Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_currAddr_postalcode"
          className="form-control  eforms_input_container"
          placeholder="Postal code"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr_postalcode}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          options={cityOptions}
          onChange={(option) => {
            formik.setFieldValue("frk_user_currAddr_city_id", option?.value);
            formik.setFieldValue("province", option?.province);
            formik.setFieldValue("country", option?.country);
          }}
          placeholder="City"
          name="city"
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          className="form-control eforms_input_container"
          name="province"
          placeholder="Province"
          value={formik.values.province}
          disabled
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          placeholder="Country"
          name="country"
          className="form-control eforms_input_container"
          value={formik.values.country}
          disabled
        />
      </div>

      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_currAddr_Duration_year"
          className="form-control eforms_input_container"
          placeholder="Duration year"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr_Duration_year}
        />
        {formik.errors.user_currAddr_Duration_year &&
          formik.touched.user_currAddr_Duration_year && (
            <small className="text-danger">
              {formik.errors.user_currAddr_Duration_year}
            </small>
          )}
      </div>

      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_currAddr_Duration_month"
          className="form-control eforms_input_container"
          placeholder="Duration Month"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr_Duration_month}
        />
        {formik.errors.user_currAddr_Duration_month &&
          formik.touched.user_currAddr_Duration_month && (
            <small className="text-danger">
              {formik.errors.user_currAddr_Duration_month}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
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
            formik.setFieldValue("user_currAddr_home_status", e?.value);
          }}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_currAddr_monthly_payment"
          className="form-control eforms_input_container"
          placeholder="Monthly payment"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr_monthly_payment}
        />
        {formik.errors.user_currAddr_monthly_payment &&
          formik.touched.user_currAddr_monthly_payment && (
            <small className="text-danger">
              {formik.errors.user_currAddr_monthly_payment}
            </small>
          )}
      </div>
    </div>
  );
};

export default FinancialCurrntAddress;
