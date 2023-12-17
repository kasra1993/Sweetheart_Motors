import React from "react";
import { httpRequest } from "../../apis";
import ServiceAppintmentCustomerWeb from "../../components/layout/forms/serviceappintmentcustomerweb";
import Head from "next/head";
import { useGetBodyStyles } from "../../hooks/common/useGetBodyStyle";
import { useGetTransmitions } from "../../hooks/common/useGetTransmition";
const ServiceAppointment = (props) => {
  const {
    domain,
    dealerData,
    colors,
    otherFormik = undefined,
    onClose,
  } = props;
  const {
    data: bodyStylesData,
    isLoading: bodyStylesIsLoadig,
    isFetching: bodyStylesIsFetching,
    isError: bodyStylesIsError,
    error: bodyStylesError,
    isSuccess: bodyStylesIsSuccess,
  } = useGetBodyStyles();
  const {
    data: transmitionData,
    isLoading: transmitionLoading,
    isFetching: transmitionFetching,
    isError: transmitionIsError,
    error: transmitionError,
    isSuccess: transmitionSuccess,
  } = useGetTransmitions();
  return (
    <>
      {/* <Head>
        <title>Value your Trade | {dealerData?.bussiness_name} </title>
        <meta
          name="description"
          content={`Check car prices and values your trade when buying and selling new or used vehicles online on the ${dealerData?.bussiness_name}.`}
        />
        <meta name="keywords" content="value your trade" />
      </Head> */}
      <Head>
        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${dealerData?.tab_logo_url}`}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />

        <title>
          {`  ${
            dealerData?.business_city?.city
          } Used Cars Services - In-House Mechanic Shop for Car Repairing
          ${dealerData?.business_city?.Province?.province} | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } `}
        </title>
        <meta
          name="description"
          content={`Looking for used cars' repairing center in ${
            dealerData?.business_city?.city
          }, ${dealerData?.business_city?.Province?.province}? Contact ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }  now! We are offering In-House Car Service Center and Auto Detailing Shop.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>
      <ServiceAppintmentCustomerWeb
        transmitionData={transmitionData}
        transmitionLoading={transmitionLoading}
        transmitionFetching={transmitionFetching}
        bodyStylesData={bodyStylesData}
        bodyStylesIsLoadig={bodyStylesIsLoadig}
        bodyStylesIsFetching={bodyStylesIsFetching}
        dealerData={dealerData}
        domain={domain}
        otherFormik={otherFormik}
        colors={colors}
        specialCars={dealerData?.specialData}
        onClose={onClose}
      />
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const { data: colorData, status: colorStatus } = await httpRequest(
    "GET",
    "/api/colors",
    {},
    {},
    false
  );
  if (colorStatus !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      domain,
      colors: colorData,
    },
  };
}
export default ServiceAppointment;
