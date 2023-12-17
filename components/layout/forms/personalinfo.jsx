import { reactSelectInputStyle } from "./../../../utils/common/react_select_styles";
import Select from "react-select";
import NumberFormat from "react-number-format";

const PersonalInfo = (props) => {
  const { formik, complete = false, detail } = props;
  const { otherFormik = undefined } = props;
  return (
    <div className="p-0 m-0 row w-100 ">
      <div
        className={`form-group  ${
          detail ? "col-12" : "col-12 col-sm-6"
        } p-0 m-0 p-1`}
      >
        <input
          name="firstName"
          className="form-control  eforms_input_container"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <small className="text-danger">{formik.errors.firstName}</small>
        )}
      </div>
      <div
        className={`form-group ${
          detail ? "col-12" : "col-12 col-sm-6"
        } p-0 m-0 p-1`}
      >
        <input
          name="lastName"
          className="form-control eforms_input_container"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <small className="text-danger">{formik.errors.lastName}</small>
        )}
      </div>
      <div
        className={`form-group ${
          detail ? "col-12" : "col-12 col-sm-6"
        } p-0 m-0 p-1`}
      >
        <input
          name="email"
          className="form-control eforms_input_container"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <small className="text-danger">{formik.errors.email}</small>
        )}
      </div>
      <div
        className={`form-group ${
          detail ? "col-12" : "col-12 col-sm-6"
        } p-0 m-0 p-1`}
      >
        {/* <NumberFormat
          prefix="+"
          format="+# (###) ###-####"
          mask="_"
          allowEmptyFormatting={false}
          onValueChange={(e) => {
            formik.setFieldValue("phone", e.value);
          }}
          placeholder="Cell Phone Number"
          onBlur={formik.handleBlur}
          name="phone"
          id="phone"
          className="form-control eforms_input_container"
          value={formik.values.phone}
        /> */}
        <input
          name="phone"
          className="form-control eforms_input_container"
          placeholder="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.errors.phone && formik.touched.phone && (
          <small className="text-danger">{formik.errors.phone}</small>
        )}
      </div>
      {complete && (
        <>
          <div
            className={`form-group ${
              detail ? "col-12" : "col-12 col-sm-6"
            } p-0 m-0 p-1`}
          >
            <Select
              name="user_salutation"
              className="form-select w-100 eforms_input_select_container"
              placeholder="Salutation"
              options={[
                { value: 1, label: "Dr" },
                { value: 2, label: "Miss" },
                { value: 3, label: "Mr." },
                { value: 4, label: "Ms." },
                { value: 5, label: "Mrs." },
              ]}
              styles={reactSelectInputStyle}
              onChange={(e) => {
                formik.setFieldValue("user_salutation", e?.value);
              }}
            />
          </div>
          <div
            className={`form-group ${
              detail ? "col-12" : "col-12 col-sm-6"
            } p-0 m-0 p-1`}
          >
            <Select
              name="user_marital_status"
              className="form-select w-100 eforms_input_select_container"
              placeholder="Marital Status"
              options={[
                { value: 1, label: "Single" },
                { value: 2, label: "Married" },
                { value: 3, label: "Divorce" },
                { value: 4, label: "Other" },
              ]}
              styles={reactSelectInputStyle}
              onChange={(e) => {
                formik.setFieldValue("user_marital_status", e?.value);
              }}
            />
          </div>
          <div
            className={`form-group ${detail ? "col-12" : "col-12 col-sm-6"} ${
              otherFormik && "col-md-6"
            } p-0 m-0 p-1`}
          >
            <input
              name="user_sin_number"
              className="form-control eforms_input_container"
              placeholder="SIN"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_sin_number}
            />
          </div>
          <div
            className={`form-group ${detail ? "col-12" : "col-12 col-sm-6"} ${
              otherFormik && "col-md-6"
            } p-0 m-0 p-1`}
          >
            <input
              type="text"
              name="user_birthday"
              onFocus={(e) => (e.target.type = "date")}
              className="form-control eforms_input_container"
              placeholder="Birth Date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_birthday}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInfo;
