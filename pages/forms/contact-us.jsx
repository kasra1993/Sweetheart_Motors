import Head from "next/head";
import EFormsHeaderSection from "../../components/common/web/eform-header/eforms_header_section";
import EformsConatctInfo from "../../components/common/web/eforms/eforms_contact_info";
import SpecialCarsCustomerWeb from "../../components/layout/forms/specialcars";
import { useFormik } from "formik";
import { CONTACT_US_INITIAL_VALUE } from "../../constant/contact-us/contact_us";
import { CONTACT_US_VALIDATION_SCHEMA } from "../../constant/formik/validation";
import Loading from "../../components/common/web/loading/loading";
import { useState } from "react";
import Location from "../../components/layout/directions/location";
import { onSubmit } from "../../utils/contact-us/contact_us";
import { toast } from "react-toastify";
import EformsHeader from "../../components/common/layout/header/eform_header";
import NumberFormat from "react-number-format";
import { CDN_BASE_URL } from "../../constant/base";
export default function ContactUpPage(props) {
  const { dealerData, domain } = props;
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: CONTACT_US_INITIAL_VALUE,
    validationSchema: CONTACT_US_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      const { data, message, status } = await onSubmit(values, domain);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
        setIsLoading(false);
      } else {
        toast.error(message);
        setIsLoading(false);
      }
    },
  });
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${dealerData?.tab_logo_url}`}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }  is located at ${dealerData?.business_street} ${
            dealerData?.business_city?.city
          }, ${dealerData?.business_city?.Province?.province} ,${
            dealerData?.business_postal
          }. Call us at: ${dealerData?.business_phone}`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`  Contact Information | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }  | ${dealerData?.business_city?.city} used car
          dealer`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>

      <div
        className="p-0 m-0 col-12 col-md-11 w-100 pb-4 row justify-content-start align-items-start"
        style={{ position: "relative" }}
      >
        <div className="p-0 pt-5 px-1 px-md-3 px-lg-5 m-0 w-100 row">
          <div className="p-0 m-0 col-12 col-sm-6 px-3">
            <img
              className="w-100 about_us_image"
              src={CDN_BASE_URL + dealerData?.contactUs_image_url}
              alt=""
            />
          </div>
          <div className="p-0 m-0 col-12 col-sm-6 px-3 forms_container_back">
            <div className="p-0 m-0 row justify-content-start align-items-center p-1 p-sm-3">
              <div className="p-0 m-0 text_us_header">Contact Us</div>
              <form onSubmit={formik.handleSubmit} className="p-0 m-0 row">
                <div className="p-0 m-0 mt-2 col-12">
                  <EformsHeader title="Personal Information" />
                </div>
                <div className="p-0 m-0 col-12 ">
                  <div className="p-0 m-0 row">
                    <div className="p-1 m-0 form-group col-12 col-sm-6">
                      <input
                        id="f_name"
                        name="f_name"
                        type="text"
                        className="form-control eforms_input_container"
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.f_name}
                      />
                      {formik.errors.f_name && formik.touched.f_name && (
                        <div className="text-danger">
                          {formik.errors.f_name}
                        </div>
                      )}
                    </div>

                    <div className="p-1 m-0 form-group col-12 col-sm-6">
                      <input
                        id="l_name"
                        name="l_name"
                        type="text"
                        className="form-control eforms_input_container"
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.l_name}
                      />
                      {formik.errors.l_name && formik.touched.l_name && (
                        <div className="text-danger">
                          {formik.errors.l_name}
                        </div>
                      )}
                    </div>

                    <div className="p-1 m-0 form-group col-12 col-sm-6">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        className="form-control eforms_input_container"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.errors.email && formik.touched.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </div>

                    <div className="p-1 m-0 form-group col-12 col-sm-6">
                      {/* <NumberFormat
                      prefix="+"
                      format="+# (###) ###-####"
                      mask="_"
                      allowEmptyFormatting={false}
                      onValueChange={(e) => {
                        formik.setFieldValue("mobile", e.value);
                      }}
                      placeholder="Cell Phone Number"
                      onBlur={formik.handleBlur}
                      name="mobile"
                      id="mobile"
                      className="form-control eforms_input_container"
                      value={formik.values.mobile}
                    /> */}
                      <input
                        id="mobile"
                        name="mobile"
                        type="text"
                        className="form-control eforms_input_container"
                        placeholder="Mobile"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobile}
                      />
                      {formik.errors.mobile && formik.touched.mobile && (
                        <div className="text-danger">
                          {formik.errors.mobile}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-1 m-0 form-group col-12">
                  <EformsHeader title="Message" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-control eforms_textarea_container"
                    placeholder="Message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.errors.message && formik.touched.message && (
                    <div className="text-danger">{formik.errors.message}</div>
                  )}
                </div>
                <div className="p-1 m-0 pt-3 col-12 col-sm-6">
                  <div className="p-0 m-0">
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <button type="submit" className="btn yellow_button w-100">
                        <span className="p-0 m-0 ">Send</span>
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  return {
    props: {
      domain,
    },
  };
}
