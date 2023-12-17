import { CDN_BASE_URL } from "../constant/base";
import Head from "next/head";
const About = (props) => {
  const { dealerData } = props;
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
          content={`Know about ${
            dealerData?.business_city?.city
          } based car dealer - ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }. Read more about who we are and how our team helps you in purchasing used cars.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`About ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } - Used Car Dealer in ${dealerData?.business_city?.city} ,
          ${dealerData?.business_city?.Province?.province}`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>

      <div
        className="p-0 m-0 px-2 px-md-3 px-lg-5 d-flex flex-wrap w-100 justify-content-start align-items-start "
        // style={{
        //   minHeight: "60vh",
        // }}
      >
        <div className="p-0 m-0 col-12  pt-5 pb-3">
          <div className="aboutus_h4__title_red p-0 m-0">
            Welcome to{" "}
            {dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
          </div>

          <div
            className="p-0 m-0 about_us_text"
            dangerouslySetInnerHTML={{ __html: dealerData?.about_us }}
          />
        </div>
        <div className="p-0 m-0 col-12">
          <img
            className="w-100 about_us_image"
            src={CDN_BASE_URL + dealerData?.aboutUs_image_url}
            alt=""
          />
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

export default About;
