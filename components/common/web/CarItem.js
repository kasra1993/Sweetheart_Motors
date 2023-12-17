import Link from "next/link";
import { FaPhoneAlt, FaMap } from "react-icons/fa";
import { useEffect, useState } from "react";
import { dashRemoverForSlug } from "../../../utils/common/dash_remover";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import { BASE_URL, CDN_BASE_URL } from "../../../constant/base";
import { phonenumberConvertor } from "../../../utils/common/phone_number_converter";
const CarItem = ({
  car,
  isFinancial,
  otherFormik,
  onClose,
  dealerData,
  isClassic,
}) => {
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  const {
    stock_NO: stockNO,
    cover_image: coverImage,
    Vehicle,
    id,
    odometer,
    odometer_type,
    sell_price,
    special_price,
    vehicle_condition,
    model_year,
    make,
    model,
  } = car;
  const soldImage = dealerData?.soldImg?.src;
  const title = `${Vehicle?.model_year} ${Vehicle?.make} ${Vehicle?.model} ${Vehicle?.trim}`;
  const imgSrc =
    coverImage && coverImage !== null
      ? `https://hillzimage.blob.core.windows.net${coverImage}`
      : "https://hillzimage.blob.core.windows.net/test/default-inventory-image-car-med.jpeg";

  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(Vehicle?.make),
      model: dashRemoverForSlug(Vehicle?.model),
    }));
  }, []);
  return (
    <div
      className="row p-0 m-0 w-100 justify-content-center"
      style={{ position: "relative" }}
    >
      <div className={`p-0 m-0 pt-3 pb-5 col-12`}>
        <div className="row w-100 p-0 m-0 justify-content-center align-items-stretch">
          <div className="col-12 col-lg-4 d-flex justify-content-start justify-content-lg-center align-items-center p-0 m-0">
            <Link
              href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
            >
              <a className="p-0 m-0 w-100">
                <div className="p-0 m-0 w-100 inventory_div__car_iamge_conatiner">
                  {" "}
                  <img
                    height="100%"
                    width="100%"
                    src={imgSrc}
                    style={{ borderRadius: "20px" }}
                  />
                </div>
              </a>
            </Link>
            {car?.vehicle_status === 7 && (
              <img
                height="100%"
                width="100%"
                src={`${CDN_BASE_URL}${soldImage}`}
                className="inventory_soldImage-style"
              />
            )}
          </div>{" "}
          <div className="p-0 m-0 px-0 px-lg-3 pt-3 pt-lg-0 col-12 col-lg-8">
            <div className="p-3 p-lg-4 m-0 d-flex flex-column inventory_details_container h-100">
              <div className="p-0 m-0 row w-100 d-flex ">
                <div className="p-0 m-0 col-6 pt-3 pt-lg-0 d-flex justify-content-start align-items-center">
                  {Vehicle?.carfax_link !== null &&
                    Vehicle?.carfax_link !== "" && (
                      <a
                        href={Vehicle?.carfax_link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="/images/inventory/carfaxcanada_icon.png"
                          alt=""
                          className="w-100 h-100"
                          style={{
                            height: "26px",
                            objectFit: "contain",
                          }}
                        />
                      </a>
                    )}
                </div>
                <div className="p-0 m-0 col-6 d-flex justify-content-end align-items-center">
                  <FaPhoneAlt className="mr-2" size="25px" />
                  <FaMap size="25px" />
                </div>
              </div>
              <div className="p-0 m-0 pt-2 row w-100 justify-content-between align-items-center">
                <Link
                  href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
                >
                  <a className="text-decoration-none inventory_a__title">
                    {title}
                  </a>
                </Link>
                <div className="p-0 m-0 d-flex flex-column ">
                  {!car?.vehicle_site_detail?.call_for_price ? (
                    <>
                      <p className={`p-0 m-0 inventory_p__price `}>
                        Price: $
                        <p
                          className={`d-inline ${
                            special_price !== 0 && "inventory_p__sellprice_line"
                          } `}
                        >
                          {priceComma(sell_price, 2)}
                        </p>
                      </p>
                      {special_price !== 0 && (
                        <div className="p-0 m-0">
                          <p className="p-0 m-0 inventory_p__car_special  ">
                            ${priceComma(special_price, 2)}
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="p-0 m-0 inventory_p__price">
                      {" "}
                      Call for price!{" "}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-0 m-0 w-100 row">
                <div className="col-12 col-md-6 p-0 m-0 inventory_div__cell_border">
                  <div className="p-0 m-0 d-flex justify-content-between inventory_div__cell py-2 ">
                    Exterior Color: {Vehicle?.exterior_color?.name}
                  </div>
                  <div className="p-0 m-0 d-flex justify-content-between  inventory_div__cell py-2">
                    Stock #: {stockNO}
                  </div>
                  <div className="p-0 m-0 d-flex justify-content-between  inventory_div__cell py-2">
                    Odometer: {priceComma(odometer, 2)}{" "}
                    {odometer_type === 2 ? " KM" : " MI"}
                  </div>
                  <div className="p-0 m-0 d-flex justify-content-between  inventory_div__cell py-2">
                    Doors: {Vehicle?.doors}
                  </div>
                </div>
                <div className="col-12 col-md-6 p-0 m-0 inventory_div__cell_border">
                  <div className="p-0 m-0 d-flex justify-content-between  inventory_div__cell py-2">
                    Body Style: {Vehicle?.BodyStyle?.name}
                  </div>
                  <div className="p-0 m-0 d-flex justify-content-between  inventory_div__cell py-2">
                    Transmission: {Vehicle?.Transmission?.name}
                  </div>
                  <div className="p-0 m-0 d-flex justify-content-between  inventory_div__cell py-2">
                    Drivetrain: {Vehicle?.drive_type}
                  </div>
                  <div className="p-0 m-0 d-flex justify-content-between  inventory_div__cell py-2">
                    Engine: {Vehicle?.engine_cylinders}
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 w-100 row flex-row">
                <Link
                  href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
                >
                  <a className="btn text-decoration-none col-12 col-md-4 p-0 m-0 px-0 p-1">
                    <button
                      type="submit"
                      className="p-0 m-0 btn yellow_button w-100"
                    >
                      View Details
                    </button>
                  </a>
                </Link>

                {typeof otherFormik === "undefined" ? (
                  <>
                    <Link href="/forms/contact-us">
                      <a className="btn w-100 text-decoration-none col-12 col-md-4 p-0 m-0 px-0 p-1">
                        <button
                          type="submit"
                          className="p-0 m-0 btn white_button w-100"
                        >
                          Contact Us
                        </button>
                      </a>
                    </Link>
                    <Link href={`/forms/finance?selected_vehicle=${id}`}>
                      <a className="btn w-100 text-decoration-none col-12 col-md-4 p-0 m-0 px-0 p-1">
                        <button
                          type="submit"
                          className="p-0 m-0 btn white_button w-100"
                        >
                          Financing Application
                        </button>
                      </a>
                    </Link>
                  </>
                ) : (
                  <Link href="">
                    <a className="btn text-decoration-none  col-12 col-md-4 p-0 m-0 px-0 px-md-2 p-1">
                      <button
                        type="submit"
                        className="p-0 m-0 btn yellow_button w-100"
                        onClick={() => {
                          if (onClose && typeof otherFormik !== "undefined") {
                            otherFormik.setFieldValue(
                              "frk_desire_MidVclDS_id",
                              +id
                            );
                            onClose();
                          }
                        }}
                      >
                        Select For Finance
                      </button>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
