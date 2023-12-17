import { PrivacyDesc } from "../utils/common/privacy_data";
import Head from "next/head";
import EformsConatctInfo from "../components/common/web/eforms/eforms_contact_info";
const PrivacyPage = (props) => {
  const { dealerData } = props;
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${dealerData?.tab_logo_url}`}
        />

        <title>
          Online car dealership |{" "}
          {dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
        </title>
        <meta
          name="description"
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } site as an online car dealership in ${
            dealerData?.business_city?.city
          } ${
            dealerData?.business_city?.Province?.Country?.country
          }, provide buy, sell or trade-in value services with the best price and quality.`}
        />
        <meta name="keywords" content="online car dealership" />
      </Head>
      <div className="p-0 pt-2 pt-md-5 m-0 w-100">
        <div className="p-0  px-3 py-md-4 py-lg-5  m-0 w-100 row d-flex flex-column flex-lg-row">
          <div className="p-0 pb-3 m-0 col-12 col-md-11 forms_container_back">
            {/* <EformsHeader title="Privacy & policy" /> */}
            <div className="p-3 p-md-3 p-lg-5 m-0 row">
              <PrivacyDesc
                bussinessName={
                  dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
                }
              />
            </div>
          </div>
          {/* <div className="p-0 pl-lg-4 m-0 col-12 col-lg-4 ">
            <div className="p-0 m-0 d-flex flex-column">
              <EformsConatctInfo dealerData={dealerData} />
              <SpecialCarsCustomerWeb data={dealerData?.specialData} />
            </div>
          </div> */}
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

export default PrivacyPage;
