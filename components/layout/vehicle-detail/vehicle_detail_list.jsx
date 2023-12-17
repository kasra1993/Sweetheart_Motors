import { priceComma } from "../../../utils/common/price_odometer_handler";

const VehicleDetailList = (props) => {
  const { vehicleData } = props;
  const showDetail = vehicleData?.data?.vehicle_site_detail;

  return (
    <div className="p-0 m-0 h-100 col-12 p-3 p-lg-2 inventory_details_container">
      <div className="p-0 m-0 row w-100">
        <div className="col-12 col-sm-6 col-lg-12 px-2 px-sm-3 px-md-0 p-0 m-0 w-100 d-flex flex-column align-items-center justify-content-center border_right_style_detail">
          <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Year</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.model_year}
            </span>
          </div>
          {showDetail?.frk_titleStatus &&
            props?.vehicleData?.data?.TitleStatus?.name && (
              <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
                <span>Title Status</span>
                <span className="vehicle_single_detail_div__container_text">
                  {props?.vehicleData?.data?.TitleStatus?.name}
                </span>
              </div>
            )}
          <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Make</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.make}
            </span>
          </div>
          <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Model</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.model}
            </span>
          </div>
          {/* <div className="p-0 px-md-3 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Body Style</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.BodyStyle?.name}
            </span>
          </div>
          <div className="p-0 px-md-3 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Odometer</span>
            <span className="vehicle_single_detail_div__container_text">
              {priceComma(props?.vehicleData?.data?.odometer, 2)}{" "}
              {props?.vehicleData?.data?.odometer_type === 1 ? "MI" : "KM"}
            </span>
          </div>
          <div className="p-0 px-md-3 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Transmission</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.Transmission?.name}
            </span>
          </div> */}
          {/* 
          <div className="p-0 px-md-3 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Exterior Color</span>
            <div className="p-0 m-0 d-flex align-items-center">
              <div
                className="p-0 m-0 mx-0 mx-md-2"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: `#${props?.vehicleData?.data.Vehicle?.exterior_color?.code}`,
                }}
              />
              <span className="d-none d-md-inline vehicle_single_detail_div__container_text">
                {props?.vehicleData?.data.Vehicle?.exterior_color?.name}
              </span>
            </div>
          </div> */}
          <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Interior Color</span>
            <div className="p-0 m-0 d-flex align-items-center">
              <div
                className="p-0 m-0 mx-0 mx-md-2"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: `#${props?.vehicleData?.data.Vehicle?.interior_color?.code}`,
                }}
              />
              <span className="d-none d-md-inline vehicle_single_detail_div__container_text">
                {props?.vehicleData?.data.Vehicle?.interior_color?.name}
              </span>
            </div>
          </div>
          <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Doors</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.doors}
            </span>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-12 px-2 px-sm-3 px-md-0 p-0 m-0 w-100 d-flex flex-column align-items-center justify-content-center">
          <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Passengers</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.passenger}
            </span>
          </div>
          {/* <div className="p-0 px-md-3 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Fuel Type</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.fuel_type}
            </span>
          </div> */}
          <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>City Fuel</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.city_fuel}
              {props?.vehicleData?.data?.Vehicle?.fuel_unit}
            </span>
          </div>
          <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Highway Fuel</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.hwy_fuel}
              {props?.vehicleData?.data?.Vehicle?.fuel_unit}
            </span>
          </div>
          <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Stock Number</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.stock_NO}
            </span>
          </div>
          {showDetail?.vin_number && (
            <div className="p-0 px-md-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
              <span>Vin</span>
              <span className="vehicle_single_detail_div__container_text">
                {props?.vehicleData?.data?.Vehicle?.vin_number}
              </span>
            </div>
          )}
          {/* <div className="p-0 px-md-3 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Engine</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.engine_cylinders}
            </span>
          </div> */}

          {/* <div className="p-0 px-md-3 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container py-md-3 py-2 ">
            <span>Drivetrain</span>
            <span className="vehicle_single_detail_div__container_text">
              {props?.vehicleData?.data?.Vehicle?.drive_type}
            </span>
          </div> */}
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default VehicleDetailList;
