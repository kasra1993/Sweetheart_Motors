import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { GET_MORE_INFORMATION_VALIDATION_SCHEMA } from "../../../../constant/formik/validation";
import { GET_MORE_INFORMATION } from "../../../../constant/get-more-information/get_more_information";
import { onSubmit } from "../../../../utils/get-more-information/get_more_information";
import EformsHeader from "../../../common/layout/header/eform_header";
import Loading from "../../../common/web/loading/loading";
import PersonalInfo from "../../forms/personalinfo";

const GetMoreInformation = (props) => {
  const { domain, vehicleId, modalInformationClose } = props;
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: GET_MORE_INFORMATION,
    validationSchema: GET_MORE_INFORMATION_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { status, message, data } = await onSubmit(
        values,
        domain,
        vehicleId
      );
      setLoading(false);
      if (status === 201) {
        modalInformationClose();
        toast.success("Successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-0 m-0 col-12">
        <PersonalInfo formik={formik} withoutHeader />
        <div className="form-group col-sm-12 col-md-12 p-1 m-0 mt-2 mb-2">
          <textarea
            rows="3"
            name="message"
            className="form-control eforms_textarea_container"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Message"
            value={formik.values.message}
          />
          {formik.errors.message && formik.touched.message && (
            <small className="text-danger">{formik.errors.message}</small>
          )}
        </div>
        <div className="p-1 m-0 col-12">
          <div className="p-0 m-0">
            {isLoading ? (
              <Loading />
            ) : (
              <button type="submit" className="btn yellow_button w-100">
                <span className="p-0 m-0">Submit</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default GetMoreInformation;
