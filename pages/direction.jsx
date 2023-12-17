import { QueryClient } from "react-query";
import { httpRequest } from "../apis/index";
import { dehydrate } from "react-query/hydration";
import Location from "../components/layout/directions/location";
import EformsConatctInfo from "../components/common/web/eforms/eforms_contact_info";
import Head from "next/head";
import { CDN_BASE_URL } from "../constant/base";

const Direction = (props) => {
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
          content={` ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } is the One Stop used car dealership for all Makes and Models of both New and Used cars for sale. We offer Car Loans on Low interest rates and assure you of quick and easy Car Loan approvals.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />
        <title>
          {` ${
            dealerData?.business_city?.city
          } Used Car Dealer | New and Used Car For Sale | 
         ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}`}
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
        <div className="p-0 pt-5 px-1 px-md-3 px-lg-5 m-0 w-100 row ">
          <div className="p-0 m-0 col-12 col-sm-6 px-2 direction_container_back">
            <div className="p-0 m-0 row justify-content-start align-items-center p-1 p-sm-3">
              <div className="p-0 m-0 text_us_header">Get Direction</div>{" "}
              <iframe
                allow="geolocation"
                src={dealerData?.map_url}
                frameborder="0"
                width="100%"
                height="300"
                className="border-0 w-100 p-0 m-0"
                aria-hidden="false"
                tabindex="0"
                id="iframe"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
          <div className="p-0 m-0 pt-3 pt-sm-0 col-12 col-sm-6 px-2 d-flex justify-content-center align-items-center">
            <img
              className="w-100 about_us_image"
              src={CDN_BASE_URL + dealerData?.orderPart_image_url}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Direction;
export async function getServerSideProps(ctx) {
  const domain = await ctx.req.headers.host;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("footer-data", () =>
    httpRequest("GET", `/api/dealership/single/by/url/${domain}`, {}, {}, true)
  );
  await queryClient.prefetchQuery("special-cars", () =>
    httpRequest(
      "GET",
      `/api/vehicle/dealership/mid/spicial/${domain}?offset=0&limit=3&order=id,DESC`,
      {},
      {},
      true
    )
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      domain,
    },
  };
}
