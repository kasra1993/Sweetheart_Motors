import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/sass/main.scss";
//swiper
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import Weblayout from "../components/common/layout/weblayout";
import { httpRequest } from "../apis";
import Head from "next/head";
import { Translate } from "../components/layout/home/translate";
function MyApp(props) {
  const { Component, pageProps } = props;
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={
            "https://hillzimage.blob.core.windows.net" +
            props?.dealerData?.logo_url
          }
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <Weblayout
            dealerData={props?.dealerData}
            domain={props?.domain}
            timeWork={props?.timeWork}
          >
            <Component
              dealerData={props?.dealerData}
              {...pageProps}
              domain={props?.domain}
            />
          </Weblayout>
        </Hydrate>
      </QueryClientProvider>
      <ToastContainer position="top-center" />
    </>
  );
}
MyApp.getInitialProps = async ({ ctx }) => {
  const domain = ctx.req.headers.host;
  const { data: timeWork, status: timeWorkStatus } = await httpRequest(
    "GET",
    `/api/dealership/timework/get/${domain}`,
    {},
    {},
    false
  );
  const { data, status } = await httpRequest(
    "GET",
    `/api/dealership/single/by/url/${domain}`,
    {},
    {},
    false
  );
  const { data: specialData, status: specialStatus } = await httpRequest(
    "GET",
    `/api/vehicle/dealership/mid/spicial/${domain}?offset=0&limit=3&order=id,DESC`,
    {},
    {},
    false
  );
  const { data: soldImg, status: soldImgStatus } = await httpRequest(
    "GET",
    `/api/soldImages/${domain}`,
    { sold: "" },
    {},
    false
  );
  if ((status === 200 && timeWorkStatus === 200, specialStatus === 200)) {
    return {
      domain,
      dealerData: {
        ...data,
        timeWork: timeWork,
        specialData: specialData,
        soldImg: soldImg,
      },
    };
  }
  return {
    notFound: true,
  };
};
export default MyApp;
