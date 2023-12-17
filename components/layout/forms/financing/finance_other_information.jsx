import Select from "react-select";
import {
  USER_OTHER_BANKRUPTCY_OPTIONS,
  USER_OTHER_IS_CONSIGER_AVAILABLE_OPTIONS,
  USER_OTHER_REPOSSISSION_OPTIONS,
  USER_PLEASE_RATE_YOUR_CREDIT_OPTIONS,
} from "../../../../constant/fainancial/fainancial";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
const FinancialOtherInformation = ({ formik }) => {
  return (
    <div className="p-0 m-0 row w-100 ">
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          name="user_please_rate_your_credit"
          placeholder="Rate Your Credit"
          onChange={(option) =>
            formik.setFieldValue("user_please_rate_your_credit", option.value)
          }
          onBlur={formik.handleBlur}
          options={USER_PLEASE_RATE_YOUR_CREDIT_OPTIONS}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          name="user_other_repossission"
          placeholder="Repossession"
          onChange={(option) =>
            formik.setFieldValue("user_other_repossission", option.value)
          }
          onBlur={formik.handleBlur}
          options={USER_OTHER_REPOSSISSION_OPTIONS}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          name="user_other_bankruptcy"
          placeholder="Bankruptcy"
          onChange={(option) =>
            formik.setFieldValue("user_other_bankruptcy", option.value)
          }
          onBlur={formik.handleBlur}
          options={USER_OTHER_BANKRUPTCY_OPTIONS}
        />
      </div>

      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          name="user_other_is_consiger_available"
          placeholder="Is Co-signer Available?"
          onChange={(option) =>
            formik.setFieldValue(
              "user_other_is_consiger_available",
              option.value
            )
          }
          onBlur={formik.handleBlur}
          options={USER_OTHER_IS_CONSIGER_AVAILABLE_OPTIONS}
        />
      </div>
      <div className="form-group col-12  p-0 m-0 p-1">
        <textarea
          rows={4}
          name="comment"
          className="form-control  eforms_textarea_container"
          placeholder="Comment"
          onChange={formik.handleChange}
          value={formik.values.comment}
          onBlur={formik.handleBlur}
        />
      </div>
    </div>
  );
};

export default FinancialOtherInformation;
