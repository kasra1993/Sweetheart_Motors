import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { TEXT_US_NOW_INITIAL_VALUES } from "../../constant/text-us-now/text_us_now";
import { TEXT_US_NOW_VALIDATION } from "../../constant/formik/validation";
import { handleSubmit } from "../../utils/text-us-now/tet_us_now";
import Loading from "../../components/common/web/loading/loading";
import PersonalInfo from "../../components/layout/forms/personalinfo";
import EFormsHeaderSection from "../../components/common/web/eform-header/eforms_header_section";
import Head from "next/head";
import EformsConatctInfo from "../../components/common/web/eforms/eforms_contact_info";
import EformsHeader from "../../components/common/layout/header/eform_header";
import TextUsForm from "../../components/layout/forms/text-us-now/text_us_form";
import { CDN_BASE_URL } from "../../constant/base";
export default function ContactUpPage(props) {
  const { domain, dealerData } = props;
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
          {`Text Us | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }  | ${dealerData?.business_city?.city} used car dealer`}
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
          <div className="p-0 m-0 col-12 col-sm-6 px-2 d-flex justify-content-center align-items-center">
            <img
              className="w-100 about_us_image"
              src={CDN_BASE_URL + dealerData?.text_us_now_url}
              alt=""
            />
          </div>
          <div className="p-0 m-0 col-12 col-sm-6 pt-3 pt-sm-0 px-2 forms_container_back">
            <div className="p-0 m-0 row justify-content-start align-items-center p-1 p-sm-3">
              <div className="p-0 m-0 text_us_header">Text Us Now</div>
              <TextUsForm domain={domain} />
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
