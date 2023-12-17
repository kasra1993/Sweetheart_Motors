import VehicleDetailList from "../../../components/layout/vehicle-detail/vehicle_detail_list";
import DetaileProductSliderCustomrWeb from "../../../components/layout/vehicle-detail/gallery_slider";
import StandardOptions from "../../../components/layout/vehicle-detail/standardoption";
import { BASE_URL, CDN_BASE_URL } from "../../../constant/base";
import ButtonDetaileProduct from "../../../components/layout/vehicle-detail/buttondetaile";
import Dscription from "../../../components/layout/vehicle-detail/Dscription";
import Waranty from "../../../components/layout/vehicle-detail/Waranty";
import SwiperCore, { Pagination } from "swiper/core";
import { useState } from "react";
import { httpRequest } from "../../../apis";
import Link from "next/link";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import Head from "next/head";
import CalculatoreCustomerWeb from "../../../components/common/web/calculator/calculator";
import TextUsForm from "../../../components/layout/forms/text-us-now/text_us_form";

SwiperCore.use([Pagination]);
const DetailProduct = (data) => {
  const { dealerData, domain, specialData } = data;
  const [description, setDescription] = useState(true);
  const [warranty, setWarranty] = useState(false);
  const [options, setOptions] = useState(false);
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  return (
    <>
      <Head>
        <meta
          property="og:site_name"
          value={dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
        />
        <title>{`${data?.data?.Vehicle?.model_year} ${data?.data?.Vehicle?.make} ${data?.data?.Vehicle?.model}`}</title>
        <meta
          property="og:title"
          content={`${data?.data?.Vehicle?.model_year} ${data?.data?.Vehicle?.make} ${data?.data?.Vehicle?.model}`}
          key=""
        />
        <meta
          property="og:url"
          content={`https://${dealerData?.business_website}/cars/used/${data?.Vehicle?.model_year}-${data?.Vehicle?.make}-${data?.Vehicle?.model}-${data?.id}`}
        />

        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${data?.data?.cover_image}`}
        />
        <meta
          property="og:image:url"
          content={`https://hillzimage.blob.core.windows.net${data?.data?.cover_image}`}
        />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:description" content="new car" />
        <meta property="og:price:currency" content="" />
        <meta property="og:locale" content="" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`Find used cars, trucks and SUVs for sale in our inventory list at${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }. Contact us to learn more about our inventory in ${
            dealerData?.business_city?.city
          }, ${dealerData?.business_city?.Province?.province}.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`  Used Cars Inventory ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } | List of Used
          Vehicles at ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        </title>
        <meta
          name="title"
          property="og:title"
          content={`${data?.data?.Vehicle?.model_year} ${data?.data?.Vehicle?.make} ${data?.data?.Vehicle?.model}`}
        />

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>

      <div className="p-0 m-0 px-1 px-md-3 px-lg-5 row w-100 justify-content-center align-items-center">
        <div className="p-0 m-0 w-100 row justify-content-start align-items-stretch">
          <div className="p-0 m-0 col-12 col-md-11 col-lg-8 px-1 px-md-3 ">
            {" "}
            <DetaileProductSliderCustomrWeb
              data={data}
              data2={data?.data2}
              dealerData={dealerData}
            />
          </div>
          <div className="p-0 m-0 col-12 col-md-11 col-lg-3 px-1 px-md-2 pt-3 pt-lg-0">
            <VehicleDetailList vehicleData={data} />
          </div>
        </div>
        <div className="p-0 m-0 w-100 row justify-content-start align-items-stretch py-3">
          <div className="p-0 m-0 col-12 col-md-11 col-lg-4 px-1 px-md-3">
            {" "}
            <ButtonDetaileProduct
              domain={domain}
              data={data?.data}
              data2={data?.data2}
              dealerData={dealerData}
            />
          </div>
          <div className="p-0 m-0 col-12 col-md-11 col-lg-7 px-1 px-md-3">
            <div className="p-0 m-0 row w-100">
              <div
                className={`p-0 mb-2 m-0 detail_desc_container ${
                  data?.data?.comment === null ? "d-none" : "d-flex  col-12"
                }`}
              >
                <Dscription data={data?.data} data2={data?.data2} />
              </div>
              <div
                className={`p-0 m-0 detail_desc_container ${
                  data?.data?.waranty === null ? "d-none" : "d-flex col-12"
                }`}
              >
                <Waranty data={data?.data} data2={data?.data2} />
              </div>
            </div>
            <div className="p-0 m-0 row w-100">
              <StandardOptions data={data} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-0 py-5 m-0 w-100 row justify-content-center align-items-stretch"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="p-0 m-0 row w-100 px-1 px-md-3 px-lg-5 justify-content-start align-items-stretch">
          <div className="p-0 m-0 col-12 col-md-11">
            <div className="p-0 m-0 row w-100 justify-content-start align-items-stretch">
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-4 px-2">
                <div className="p-1 p-md-2 p-lg-4 m-0 row w-100 details_eform_container">
                  Financial Calculator
                  <CalculatoreCustomerWeb detail={true} />
                </div>
              </div>
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-4 px-2 pt-3 pt-sm-0">
                <div className="p-1 p-md-2 p-lg-4 m-0 row w-100 details_eform_container">
                  Text Us Now
                  <TextUsForm detail={true} domain={domain} />
                </div>
              </div>
              <div className="p-0 m-0 d-none d-lg-flex col-lg-4 px-2">
                {" "}
                <iframe
                  allow="geolocation"
                  src={data?.dealerData?.map_url}
                  frameborder="0"
                  width="100%"
                  height="500"
                  className="border-0 w-100 h-100 p-0 m-0"
                  aria-hidden="false"
                  tabindex="0"
                  id="iframe"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const { req, params } = context;
  const host = req.headers.host;
  const res = await fetch(
    `${BASE_URL}/api/dealership/mid/vehicle/single/${host}/${params?.vehicleBase}`
  );
  const res2 = await fetch(
    `${BASE_URL}/api/vehicle/dealership/media/mid/all/${host}/${params?.vehicleBase}`
  );
  const { data: specialData, status: specialStatus } = await httpRequest(
    "GET",
    `/api/dealership/vehicles/${host}/special`,
    {},
    {}
  );
  // const res3 = await fetch(`${BASE_URL}/api/soldImages/${host}`);
  // const sold = await res3.json();
  if (res.status === 200 && res2.status === 200 && specialStatus === 200) {
    const data = await res.json();
    const data2 = await res2.json();
    return { props: { data, data2, domain: host, specialData } };
  } else {
    return {
      notFound: true,
    };
  }
}
export default DetailProduct;
