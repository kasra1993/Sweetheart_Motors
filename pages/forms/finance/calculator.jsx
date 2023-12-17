import CalculatoreCustomerWeb from "../../../components/common/web/calculator/calculator";
import EFormsHeaderSection from "../../../components/common/web/eform-header/eforms_header_section";
import Head from "next/head";
import EformsConatctInfo from "../../../components/common/web/eforms/eforms_contact_info";
import EformsHeader from "../../../components/common/layout/header/eform_header";
import SpecialCarsCustomerWeb from "../../../components/layout/forms/specialcars";
const FinancialCalculatorPage = (props) => {
  const { domain, dealerData } = props;
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
          content={`Fill out the application form for car loan. Tell us your needs, budget and other necessary information for car financing in ${dealerData?.business_city?.city}, ${dealerData?.business_city?.Province?.province}.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`Car Loan Application ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } | Car Finance
          Application Form |${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } `}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>
      <div
        className="p-0 m-0 col-12 col-sm-11"
        style={{ position: "relative" }}
      >
        {typeof otherFormik === "undefined" && (
          <div className="p-0 m-0 row px-lg-5 pt-lg-5 px-4 pt-4 w-100">
            <EFormsHeaderSection
              title="Finance Calculator"
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
            <EformsHeader title="Loan Detail" />

            <CalculatoreCustomerWeb />
          </div>
          {typeof otherFormik === "undefined" && (
            <div className="p-0 m-0 col-12 col-lg-4 px-lg-4">
              <SpecialCarsCustomerWeb data={dealerData?.specialData} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  return {
    props: {
      domain,
    },
  };
}
export default FinancialCalculatorPage;
