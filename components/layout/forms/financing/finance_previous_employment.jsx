const FinancialPreviousEmployment = ({ formik }) => {
  return (
    <div className="p-0 m-0 row w-100">
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_prev_employer"
          className="form-control  eforms_input_container"
          placeholder="Previous Employer"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_employer}
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_prev_emp_phone"
          className="form-control  eforms_input_container"
          placeholder="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_emp_phone}
        />
        {formik.errors.user_prev_emp_phone &&
          formik.touched.user_prev_emp_phone && (
            <small className="text-danger">
              {formik.errors.user_prev_emp_phone}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_prev_emp_Duration_year"
          className="form-control  eforms_input_container"
          placeholder="Duration Year"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_emp_Duration_year}
        />
        {formik.errors.user_prev_emp_Duration_year &&
          formik.touched.user_prev_emp_Duration_year && (
            <small className="text-danger">
              {formik.errors.user_prev_emp_Duration_year}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          name="user_prev_emp_Duration_month"
          className="form-control  eforms_input_container"
          placeholder="Duration Month"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_emp_Duration_month}
        />
        {formik.errors.user_prev_emp_Duration_month &&
          formik.touched.user_prev_emp_Duration_month && (
            <small className="text-danger">
              {formik.errors.user_prev_emp_Duration_month}
            </small>
          )}
      </div>
    </div>
  );
};

export default FinancialPreviousEmployment;
