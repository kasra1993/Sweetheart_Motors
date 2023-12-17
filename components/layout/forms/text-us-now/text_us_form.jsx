import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { TEXT_US_NOW_INITIAL_VALUES } from "../../../../constant/text-us-now/text_us_now";
import { TEXT_US_NOW_VALIDATION } from "../../../../constant/formik/validation";
import { handleSubmit } from "../../../../utils/text-us-now/tet_us_now";
import EformsHeader from "../../../common/layout/header/eform_header";
import PersonalInfo from "../personalinfo";
import Loading from "../../../common/web/loading/loading";
export default function TextUsForm(props) {
  const { domain, dealerData, detail = false } = props;
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: TEXT_US_NOW_INITIAL_VALUES,
    validationSchema: () => TEXT_US_NOW_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { status, message, data } = await handleSubmit(values, domain);
      setLoading(false);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="p-0 m-0 row w-100 ">
        {!detail && (
          <div className="p-0 m-0 pt-5 col-12">
            <EformsHeader title="Personal Information" />
          </div>
        )}
        <PersonalInfo formik={formik} detail={detail} />

        <div
          className={`form-group col-12 p-0 m-0 p-1 ${detail ? "pt-5" : ""}`}
        >
          <EformsHeader title="Message" />
          <textarea
            rows="4"
            name="message"
            className="form-control eforms_textarea_container"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=""
            value={formik.values.message}
          />
          {formik.errors.message && formik.touched.message && (
            <small className="text-danger">{formik.errors.message}</small>
          )}
        </div>
        <div
          className={`p-1 m-0 pt-3 ${detail ? "col-12" : "col-12 col-md-6"}`}
        >
          <div className="p-0 m-0">
            {isLoading ? (
              <Loading />
            ) : (
              <button type="submit" className="btn yellow_button w-100">
                <span className="p-0 m-0 ">Submit</span>
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
