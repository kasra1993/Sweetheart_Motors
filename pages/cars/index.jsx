import AdvanceFilter from "../../components/common/web/filter/AdvanceFilter";
import Cars from "../../components/common/web/Cars";
import { httpRequest } from "../../apis";
import { useState, useEffect } from "react";
import Head from "next/head";
import InventoryFilterContext from "../../context/inventoryFilterContext";
import InventorySortVehicles from "../../components/common/web/inventory/inventory_sort";
import { useRouter } from "next/router";
import { useGetVehiclesBaseOnFilter } from "../../hooks/vehicles/useGetVehiclesBaseOnFilter";
export default function Inventory(props) {
  const { domain, advanceSearchData, vehiclesData, dealerData } = props;
  const [vehicles, setVehiclesData] = useState(() => vehiclesData);
  const { query } = useRouter();
  const {
    // data: vehiclesData,
    isLoading,
    mutate,
  } = useGetVehiclesBaseOnFilter(
    {
      onSuccessFunction: (data) => {
        setVehiclesData(data);
      },
    },
    domain
  );

  const currentYear = new Date().getFullYear();
  const body = {
    // url: domain,
    year_start: "0", //query?.is_classic === "1" ? "0" : "1970",
    year_end: currentYear, //query?.is_classic === "1" ? "1970" : currentYear,
    price_low: advanceSearchData?.minPrice,
    price_high: advanceSearchData?.maxPrice,
    odometer_low: advanceSearchData?.minOdometer,
    odometer_high: advanceSearchData?.maxOdometer,
    make: "",
    model: "",
    transmission: "",
    body_style: "",
    drive_train: "",
    doors: "",
    interior_color: "",
    Exterior_color: "",
    classic: query?.is_classic === "1" ? "1" : null,
  };
  useEffect(() => {
    query?.make || query?.model || query?.Minyear || query?.Maxyear
      ? undefined
      : mutate(body);
  }, []);
  const isClassic = query?.is_classic === "1" ? true : false;

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
          content={`Find used cars, trucks and SUVs for sale in our inventory list at  ${
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
          {`Used Cars Inventory ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } | List of All
          Used, New Cars Inventory at  ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>
      <InventoryFilterContext
        domain={domain}
        advanceSearchData={advanceSearchData}
        setVehiclesData={setVehiclesData}
        minOdometer={advanceSearchData?.minOdometer}
        maxOdometer={advanceSearchData?.maxOdometer}
        minPrice={advanceSearchData?.minPrice}
        maxPrice={advanceSearchData?.maxPrice}
        makeBodystyle={query?.bodystyle}
      >
        <div className="p-0 my-3 my-lg-5 m-0 row w-100 inventory_div__container px-3 px-md-4 px-lg-4">
          <div className="col-12 p-0 m-0 px-2 px-md-3 px-lg-5">
            <AdvanceFilter
              domain={domain}
              advanceSearchData={advanceSearchData}
              setVehiclesData={setVehiclesData}
              minOdometer={advanceSearchData?.minOdometer}
              maxOdometer={advanceSearchData?.maxOdometer}
              minPrice={advanceSearchData?.minPrice}
              maxPrice={advanceSearchData?.maxPrice}
              vehiclesData={vehicles}
              makeBodystyle={query?.bodystyle}
              isClassic={isClassic}
            />
          </div>
          <div className="col-12 d-flex flex-column p-0 m-0  px-2 px-md-3">
            <InventorySortVehicles vehiclesData={vehicles} />
            <Cars
              mobileRenderComponent={
                <AdvanceFilter
                  domain={domain}
                  advanceSearchData={advanceSearchData}
                  setVehiclesData={setVehiclesData}
                  minOdometer={advanceSearchData?.minOdometer}
                  maxOdometer={advanceSearchData?.maxOdometer}
                  minPrice={advanceSearchData?.minPrice}
                  maxPrice={advanceSearchData?.maxPrice}
                />
              }
              vehiclesData={vehicles}
              dealerData={dealerData}
              isClassic={isClassic}
            />
          </div>
        </div>
      </InventoryFilterContext>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const currentYear = new Date().getFullYear();
  const { data: advanceSearchData, status: advanceSearchStatus } =
    await httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/${domain}`,
      {},
      {},
      false
    );
  const body = {
    year_start: "1970",
    year_end: currentYear,
    price_low: advanceSearchData?.minPrice,
    price_high: advanceSearchData?.maxPrice,
    odometer_low: advanceSearchData?.minOdometer,
    odometer_high: advanceSearchData?.maxOdometer,
    make: "",
    model: "",
    transmission: "",
    body_style: "",
    drive_train: "",
    doors: "",
    interior_color: "",
    Exterior_color: "",
    classic: "",
  };

  const query = ctx.query;
  if (
    query?.make !== "" ||
    query?.model !== "" ||
    (query?.bodystyle && query?.bodystyle !== "") ||
    query?.Minyear !== "" ||
    query?.Maxyear !== "" ||
    query?.classic !== null
  ) {
    body.year_start = query.Minyear || "1970";
    body.year_end = query.Maxyear || currentYear;
    body.make = query.make;
    body.model = query.model;
    body.body_style = query.bodystyle;
    const { status: vehiclesStatus, data: vehiclesData } = await httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}`,
      body,
      {},
      false
    );
    if (vehiclesStatus !== 200 || advanceSearchStatus !== 200) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          domain,
          advanceSearchData,
          vehiclesData,
        },
      };
    }
  } else {
    const { status: vehiclesStatus, data: vehiclesData } = await httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}`,
      body,
      {},
      false
    );
    if (vehiclesStatus !== 200 || advanceSearchStatus !== 200) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        domain,
        advanceSearchData,
        vehiclesData,
      },
    };
  }
}
