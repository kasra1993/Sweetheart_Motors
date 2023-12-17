import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { INITIAL_VALUES } from "../../../constant/fainancial/fainancial";
import ValueTradeFormFinansial from "../../../components/layout/forms/financing/tradeInfinancial";
import CarFinderVehicleFinancial from "../../../components/layout/forms/financing/car-finder-financial";
import DesiredVehiclee from "../../../components/layout/forms/financing/desiredvehicle";
import PersonalInfo from "../../../components/layout/forms/personalinfo";
import { onSubmit } from "../../../utils/fainancial/fainancial";
import { FINANCIAL_VALIDATION_SCHEMA } from "../../../constant/formik/validation";
import Loading from "../../../components/common/web/loading/loading";
import { httpRequest } from "../../../apis";
import EFormsHeaderSection from "../../../components/common/web/eform-header/eforms_header_section";
import FinancialCurrntAddress from "../../../components/layout/forms/financing/finance_current_address";
import FinancialCurrentEmployment from "../../../components/layout/forms/financing/finance_current_employment";
import FinancialPreviousEmployment from "../../../components/layout/forms/financing/finance_previous_employment";
import FinancialOtherInformation from "../../../components/layout/forms/financing/finance_other_information";
import Head from "next/head";
import EformsConatctInfo from "../../../components/common/web/eforms/eforms_contact_info";
import EformsHeader from "../../../components/common/layout/header/eform_header";
import FinanceSearchForVehicle from "../../../components/layout/forms/financing/finance_search_for_vehicle";
import { useRouter } from "next/router";
import SpecialCarsCustomerWeb from "../../../components/layout/forms/specialcars";
const Fainancial = (props) => {
  const { domain, advanceSearchData, dealerData, vehicleDataForSearch } = props;
  const [isLoading, setLoading] = useState(false);
  const { query } = useRouter();
  const [confirm, setConfirm] = useState(false);
  const [desiredModal, setDesiredModal] = React.useState(false);
  const [valueYourTrade, setValueYourTrade] = React.useState(false);
  const [carFinder, setCarFinder] = React.useState(false);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => FINANCIAL_VALIDATION_SCHEMA(),
    onSubmit: async (values, { resetForm }) => {
      if (confirm) {
        setLoading(true);
        const { data, status, message } = await onSubmit(values, domain);
        setLoading(false);
        if (status === 201) {
          resetForm();
          return toast.success(message);
        } else if (status === 401) {
          showPersonal(true);
          return toast.error(message);
        } else {
          return toast.error(message);
        }
      } else {
        toast.error("You must confirm the agreement");
      }
    },
    enableReinitialize: true,
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
          content={`Apply for car loan in ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } with ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }! Contact us today for Car Financing related queries. We like to assist you.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />
        <meta
          name="description"
          content={`Fill out the application form for car loan. Tell us your needs, budget and other necessary information for car financing in ${dealerData?.business_city?.city}, ${dealerData?.business_city?.Province?.province}.`}
        />

        <title>
          {`  Used Car Financing | Used Car Loans ${
            dealerData?.business_city?.city
          }
          , ${dealerData?.business_city?.Province?.province}| $
          ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}`}
        </title>
        <title>
          {`  Car Loan Application ${dealerData?.business_city?.city}, 
          ${dealerData?.business_city?.Province?.province} | Car Finance
          Application Form | 
          ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
        {" "}`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>

      <DesiredVehiclee
        show={desiredModal}
        onClose={() => setDesiredModal(false)}
        formik={formik}
        domain={domain}
        advanceSearchData={advanceSearchData}
      />
      <ValueTradeFormFinansial
        show={valueYourTrade}
        onClose={() => setValueYourTrade(false)}
        formik={formik}
        domain={domain}
      />
      <CarFinderVehicleFinancial
        show={carFinder}
        onClose={() => setCarFinder(false)}
        formik={formik}
        domain={domain}
      />
      <div
        className="p-0 m-0 col-12 col-sm-11"
        style={{ position: "relative" }}
      >
        {typeof otherFormik === "undefined" && (
          <div className="p-0 m-0 row px-lg-5 pt-lg-5 px-4 pt-4 w-100">
            <EFormsHeaderSection
              title="Finance Application"
              desc={dealerData?.financial_desc}
              image={dealerData?.financial_image_url}
            />
          </div>
        )}

        <div className="p-0 m-0 row px-lg-5 pt-lg-5 px-4 pt-4 w-100 justify-content-start align-items-start">
          <div
            className={`p-0 m-0 ${
              typeof otherFormik === "undefined"
                ? "col-12 col-lg-8 p-3 forms_container_back"
                : "col-12"
            }`}
          >
            <form onSubmit={formik.handleSubmit} className="p-0 m-0 row w-100">
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <EformsHeader title="Personal Information" />
                <PersonalInfo formik={formik} complete />
              </div>
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <EformsHeader title="Current Address" />
                <FinancialCurrntAddress formik={formik} />
              </div>
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <EformsHeader title="Current Employment" />
                <FinancialCurrentEmployment formik={formik} />
              </div>
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <EformsHeader title="Previous Employment" />
                <FinancialPreviousEmployment formik={formik} />
              </div>
              <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                <EformsHeader title="Other information" />
                <FinancialOtherInformation formik={formik} />
              </div>
              <div className="p-0 py-2 pb-5 m-0 row">
                {query?.selected_vehicle &&
                query?.selected_vehicle !== null &&
                query?.selected_vehicle !== "" ? (
                  <div className="p-1 col-12">You Choosed a Vehicle</div>
                ) : (
                  <>
                    <EformsHeader title="Choose Your Vehicle" />
                    <div className="p-0 m-0 w-100">
                      <FinanceSearchForVehicle
                        vehicleDataForSearch={vehicleDataForSearch}
                        formik={formik}
                      />
                    </div>
                    {/* <div className="p-1 py-2 m-0 col-12" /> */}

                    <div className="p-1 py-3 py-sm-0 m-0 col-12 col-sm-4">
                      <button
                        type="button"
                        onClick={() => setDesiredModal(true)}
                        className={`btn ${
                          formik.values.frk_desire_MidVclDS_id
                            ? "yellow_button financial_button__modal_button_selected"
                            : "yellow_button"
                        }  w-100`}
                      >
                        <span className="p-0 m-0 text-center ">
                          {formik.values.frk_desire_MidVclDS_id
                            ? "Vehicle selected"
                            : "Advance Search"}
                        </span>
                      </button>
                    </div>
                  </>
                )}
                <div className="p-1 py-3 py-sm-0 m-0 col-12 col-sm-4">
                  <button
                    type="button"
                    onClick={() => setValueYourTrade(true)}
                    className={`btn ${
                      formik.values.frk_valueYourTrade_id
                        ? "yellow_button financial_button__modal_button_selected"
                        : "yellow_button"
                    }  w-100`}
                  >
                    <span className="p-0 m-0 text-center">
                      {formik.values.frk_valueYourTrade_id
                        ? "Appraise My Trade selected"
                        : "Appraise My Trade"}
                    </span>
                  </button>
                </div>
                <div className="p-1 py-3 py-sm-0 m-0 col-12 col-sm-4">
                  <button
                    type="button"
                    onClick={() => setCarFinder(true)}
                    className={`btn ${
                      formik.values.frk_carFinder_id
                        ? "yellow_button financial_button__modal_button_selected"
                        : "yellow_button"
                    }  w-100`}
                  >
                    <span className="p-0 m-0 text-center ">
                      {formik.values.frk_carFinder_id
                        ? "Car finder selected"
                        : "Car finder"}
                    </span>
                  </button>
                </div>
                <div className="p-0 m-0 mt-3 col-12">
                  <div className="p-0 m-0 w-100 d-flex">
                    <input
                      type="checkbox"
                      name="confirm"
                      id="confirm"
                      className="m-0 mt-1"
                      onChange={(e) => {
                        setConfirm(e.target.checked);
                      }}
                    />
                    <span
                      className="p-0 m-0 px-2"
                      style={{
                        textAlign: "justify",
                      }}
                    >
                      I agree that by submitting this application, I authorize
                      and give this dealership, as well as any potential
                      financing source this dealership presents this application
                      to, my consent to obtain my credit report from any credit
                      reporting agency used to complete an investigation of my
                      credit.
                    </span>
                  </div>
                </div>
                <div className="p-1 m-0 mt-3 col-12 px-2">
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
          </div>
          {typeof otherFormik === "undefined" && (
            <div className="p-0 m-0 col-12 col-lg-4 px-lg-3">
              <SpecialCarsCustomerWeb data={dealerData?.specialData} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Fainancial;

export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const { data: advanceSearchData, status: advanceSearchDataStatus } =
    await httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/${domain}`,
      null,
      {},
      false
    );
  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/api/dealership/vehicles/all/${domain}`, {}, {});
  if (+vehicleDataForSearchStatus === 200 && +advanceSearchDataStatus === 200) {
    return {
      props: {
        domain,
        advanceSearchData,
        vehicleDataForSearch,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
