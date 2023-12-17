import Slider from "./slider/slider";
import HomeCategories from "./home_categories";
import SpecialInventorySlider from "./special-inventory/special_inventory";
import CoverFlowSlider from "./slider/cover_flow_slider";
import HomeAdvanceSearch from "./home_advance_search";
import { GOOGLE_REVIEW } from "../../../constant/home/home";
import Welcome from "./welcome/Welcome";
import FinanceHome from "./home_finance";
import OurBrandsHomePage from "./ourbrands";

const HomeCustomeerWeb = (props) => {
  const {
    data,
    specialData,
    brands,
    vehicleDataForSearch,
    advanceSearchData,
    dealerData,
  } = props;
  return (
    <div className="row w-100 p-0 m-0">
      <div className="m-0 p-0 col-12 ">
        <Slider
          slider={data?.data4}
          vehicleDataForSearch={vehicleDataForSearch}
          advanceSearchData={advanceSearchData}
          dealerData={dealerData}
        />
      </div>
      <div className="col-12 p-0">
        <HomeAdvanceSearch advanceSearchData={advanceSearchData} />
      </div>

      <HomeCategories dealerData={dealerData} />

      <Welcome {...props} />
      <FinanceHome {...props} />
      <OurBrandsHomePage {...props} />
      <SpecialInventorySlider specialCars={specialData?.data} />

      {/* <CoverFlowSlider
        hasButton={true}
        href="/hdmihig"
        buttonTittle={"Read More"}
        limit={true}
        defaultImage={true}
        data={GOOGLE_REVIEW}
      /> */}
      {/* <div className="p-0 m-0 row w-100 justify-content-center">
        <div className="p-0 m-0 col-12 col-md-11 pb-5">
          <Location dealerData={data?.dealerData} />
        </div>
      </div> */}

      {/* <ComponentHeader title="FEATURED SPECIALS" /> */}
      {/* <HomeAboutUs
        dealerData={data?.dealerData}
        description={data?.dealerData?.welcome_note}
      /> */}
      {/* <LinkTo {...props} /> */}
      {/* <div className="my-5 py-3 p-0 m-0"></div>
      <ComponentHeader title="CUSTOMER REVIEWS" /> */}
    </div>
  );
};

export default HomeCustomeerWeb;
