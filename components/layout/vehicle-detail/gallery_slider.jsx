import React, { useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import ImageGallery from "react-image-gallery";
import Link from "next/link";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import CalculatoreCustomerWeb from "../../common/web/calculator/calculator";
import { Modal, CloseButton } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CDN_BASE_URL } from "../../../constant/base";
import NumberFormat from "react-number-format";
SwiperCore.use([Navigation, Thumbs]);
const DetaileProductSliderCustomrWeb = (props) => {
  const { dealerData, data } = props;
  const soldImage = dealerData?.soldImg?.src;

  const images = props?.data2?.map((img) => ({
    original: `https://hillzimage.blob.core.windows.net${img.media_src}`,
    thumbnail: `https://hillzimage.blob.core.windows.net${img.media_src}`,
    originalHeight: "auto",
    originalWidth: "100%",
  }));
  const mobileimages = props?.data2?.map((img) => ({
    original: `https://hillzimage.blob.core.windows.net${img.media_src}`,
    thumbnail: `https://hillzimage.blob.core.windows.net${img.media_src}`,
    originalHeight: "520px",
    originalWidth: "520px",
  }));
  const [confirm, setConfirm] = useState(false);
  const [show, setShow] = useState(false);
  const [showDir, setShowDir] = useState(false);
  const [vehicle, setVehicle] = useState(null);
  const [loanTerm, setLoanTerm] = useState();
  const [intRate, setIntRate] = useState();
  const [downPayment, setDownPayment] = useState();
  const [tradeValue, setTradeValue] = useState();
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState();
  const [token, setToken] = useState("");
  const [paymentResults, setPaymentResults] = useState();
  const [results, setResults] = useState();

  const [calculate, setCalculate] = useState();
  const calc = () => {
    let data = (
      (parseFloat(intRate) / 1200 +
        parseFloat(intRate) /
          1200 /
          (Math.pow(1 + parseFloat(intRate) / 1200, parseInt(loanTerm)) - 1)) *
      (parseInt(vehiclePrice) -
        (parseInt(downPayment) + parseInt(tradeValue) || 0))
    ).toFixed(2);
    setResults(data);

    // return <p>{results}</p>;
  };
  const getToken = () => {
    return localStorage.getItem("token");
  };
  useEffect(() => {
    setToken(getToken());
  }, []);

  const formik = useFormik({
    initialValues: {
      dealershld: 1,
      f_name: "",
      l_name: "",
      mobile: "",
      message: "",
      email: "",
      status: 1,
    },
    validationSchema: Yup.object({
      dealershld: Yup.number(),
      f_name: !token && Yup.string().required(),
      l_name: !token && Yup.string().required(),
      email: !token && Yup.string().email().required(),
      mobile: !token && Yup.number().required(),
      message: !token && Yup.string().required(),
    }),
    onSubmit: submitHandler,
  });

  async function submitHandler(values) {
    const token = getToken();
    const config = token
      ? {
          Headers: {
            Authorization: token,
          },
        }
      : undefined;

    try {
      const res = await agent.contactUs.post(values, config);
    } catch (err) {
      console.log(err);
    }
  }
  const showmodal = () => {
    setModal(true);
  };
  const modallocationClose = () => {
    setLocation(false);
  };
  const modalcalculatorClose = () => {
    setCalculate(false);
  };
  const modalCloseHandle = () => {
    setModal(false);
  };
  return (
    <>
      <Modal
        show={modal}
        onHide={modalCloseHandle}
        size="xl"
        // title="Send A Text Message"
        // textBtn="SEND"
        // open={modal}
        // onClose={modalCloseHandler}
        onSubmit={formik.handleSubmit}
        onClick={formik.handleSubmit}
      >
        <Modal.Header
          style={{ color: "#2a2b2b" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Request Information</Modal.Title>
          {/* <button
            className="btn-close"
            onClick={() => {
              modalCloseHandle();
            }}
          >
            <FaTimes
              style={{
                border: "0px",
                color: "#ce1431",
              }}
            />
          </button> */}
          <CloseButton
            onClick={() => {
              modalCloseHandle();
            }}
          />
        </Modal.Header>
        <Modal.Body>
          {!token && (
            <div className="d-flex row justify-content-center align-items-center text-center col-12 m-0">
              <div className="col-12 col-md-6 p-0 pr-1">
                <input
                  style={{ borderColor: "#2a2b2b" }}
                  id="f_name"
                  name="f_name"
                  type="text"
                  className={`form-control  my-1 ${
                    formik.touched.f_name && formik.errors.f_name
                  } border-3`}
                  placeholder="Your First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.f_name}
                />
              </div>
              <div className="col-12 col-md-6 my-1 p-0">
                <input
                  style={{ borderColor: "#2a2b2b" }}
                  id="l_name"
                  name="l_name"
                  type="text"
                  className={`form-control ${
                    formik.touched.l_name && formik.errors.l_name
                  } border-3`}
                  placeholder="Your Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.l_name}
                />
              </div>
            </div>
          )}
          {/* {!token && (
            
          )} */}
          {!token && (
            <div className="d-flex row justify-content-center align-items-center text-center col-12 m-0">
              <div className="col-12 col-md-6 my-1 p-0 pr-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                  } border-3`}
                  placeholder="Your Email"
                  style={{ borderColor: "#2a2b2b" }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className="col-12 col-md-6 my-1 p-0">
                {/* <NumberFormat
                  prefix="+"
                  format="+# (###) ###-####"
                  mask="_"
                  allowEmptyFormatting={false}
                  onValueChange={(e) => {
                    formik.setFieldValue("mobile", e.value);
                  }}
                  placeholder="Cell Phone Number"
                  onBlur={formik.handleBlur}
                  name="mobile"
                  id="mobile"
                  className={`form-control ${
                    formik.touched.mobile && formik.errors.mobile
                  } border-3`}
                  value={formik.values.mobile}
                /> */}
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  style={{ borderColor: "#2a2b2b" }}
                  className={`form-control ${
                    formik.touched.mobile && formik.errors.mobile
                  } border-3`}
                  placeholder="Your mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
              </div>
            </div>
          )}
          {/* {!token && (
            
          )} */}

          <div className="col-12">
            <textarea
              style={{ borderColor: "#2a2b2b" }}
              id="message"
              name="message"
              rows={6}
              className="form-control w-100 h-100 border-3"
              placeholder="Some Text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
          </div>
          <div className="p-0 m-0 mt-4 col-12 d-flex row align-items-center justify-content-start">
            <div className="col-12 d-flex row align-items-center justify-content-start">
              <input
                type="checkbox"
                name="confirmation"
                checked={confirm}
                value={confirm}
                id="confirmation"
                className="col-1 d-flex align-items-center justify-content-end"
                onChange={() => {
                  setConfirm((prev) => {
                    if (prev === false) {
                      formik.setFieldError("confirm", false);
                    }
                    return !prev;
                  });
                }}
              />
              <label
                className="col-11 d-flex align-items-center justify-content-start pl-0 mb-0"
                style={{ wordWrap: "break-word", color: "#2a2b2b" }}
              >
                Disclaimer : By submitting this application , you authorize us
                to run your credit report.
              </label>
              {formik.errors.confirm && (
                <p className="p-0 mt-1 mb-3 ml-3 text-danger">Accept rules</p>
              )}
            </div>
            <div className="col-12 mt-4">
              <button
                type="submit"
                className="btn pl-4 pr-4 pt-1 pb-1 d-flex col-12 text-center align-items-center justify-content-center"
                style={{
                  backgroundColor: "#ce1431",
                  color: "#f6fbff",
                }}
                disabled={confirm ? false : true}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        onHide={modalcalculatorClose}
        show={calculate}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ color: "#2a2b2b", backgroundColor: "#f4f4f4" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Calculate Your Auto Loan Payment:</Modal.Title>
          {/* <button
            className="btn-close"
            onClick={() => {
              modalcalculatorClose();
            }}
          >
            <FaTimes
              style={{
                border: "0px",
                color: "#ce1431",
              }}
            />
          </button> */}
          <CloseButton
            onClick={() => {
              modalcalculatorClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#2a2b2b", backgroundColor: "#f4f4f4" }}>
          <CalculatoreCustomerWeb data={props} />
        </Modal.Body>
      </Modal>
      <Modal
        show={location}
        onHide={modallocationClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          // style={{ color: "#ce1431" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Location</Modal.Title>
          <CloseButton
            onClick={() => {
              modallocationClose();
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <Link href="/" class="d-flex col-12">
            <div className="d-flex row col-12 justify-content-center align-items-center text-center">
              <h3 className="vehicle_modal_header-style border-1 col-12 d-flex row">
                {dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
              </h3>
              <p className="d-flex row col-12 justify-content-start align-items-start text-start">
                {dealerData?.business_street} {" ,"}
                {dealerData?.business_postal}
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5212.611852629698!2d-122.940964!3d49.213725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677d04a0aab7b%3A0x3f7c4310153e5735!2s7777%20Kingsway%2C%20Burnaby%2C%20BC%20V3N%203C9%2C%20Canada!5e0!3m2!1sen!2snl!4v1636896095556!5m2!1sen!2snl"
                frameborder="0"
                height="400"
                class="border-0 w-100 d-flex row col-12"
                aria-hidden="false"
                tabindex="0"
                width="100%"
                className={`mb-2`}
              ></iframe>
              <Link href="/direction">
                <button
                  type="submit"
                  className="btn pl-4 pr-4 pt-1 pb-1 d-flex col-12 text-center align-items-center justify-content-center result-and-reset-button"
                >
                  Get Direction
                </button>
              </Link>
            </div>
          </Link>
        </Modal.Body>
      </Modal>

      <div className="p-0 m-0 w-100 inventory_details_container">
        <div className="pt-3 px-1 px-lg-5 p-0 m-0 w-100 row">
          <div className="col-12 text-start DetaileProductCustomrWeb-title m-0 p-0 px-3">
            <div className="w-100 m-0 p-0 d-flex justify-content-between align-items-start align-md-center flex-column flex-md-row">
              <div className="p-0 m-0 DetaileProductCustomrWeb-title">
                {data?.data?.Vehicle?.model_year} {data?.data?.Vehicle?.make}{" "}
                {data?.data?.Vehicle?.model}
              </div>
              <div className="DetaileProductCustomrWeb-price p-0 m-0 d-flex flex-row text-right">
                {!data?.vehicle_site_detail?.call_for_price ? (
                  <>
                    <p className={`p-0 m-0 DetaileProductCustomrWeb-price`}>
                      {" "}
                      Price: $
                      <p
                        className={`d-inline ${
                          data?.data?.special_price !== 0 &&
                          "inventory_p__sellprice_line"
                        } `}
                      >
                        {priceComma(data?.data?.sell_price, 2)}
                      </p>
                    </p>
                    {data?.data?.special_price !== 0 && (
                      <div className="p-0 m-0">
                        <p className=" p-0 m-0 DetaileProductCustomrWeb-price pl-2">
                          ${priceComma(data?.data?.special_price, 2)}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <span className="p-0 m-0 DetaileProductCustomrWeb-price">
                    {" "}
                    Call for price!{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="p-0 m-0 row w-100 DetaileProductCustomrWeb-trim">
              Trim: {data?.data?.Vehicle?.trim}
            </div>

            <div className="p-0 m-0 row w-100">
              {data?.data?.Vehicle?.carfax_link !== null &&
                data?.data?.Vehicle?.carfax_link !== "" && (
                  <>
                    <a
                      href={data?.data?.Vehicle?.carfax_link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="/images/inventory/carfaxcanada_icon.png"
                        alt=""
                        className="w-100"
                        style={{
                          maxWidth: "120px",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </>
                )}
            </div>
          </div>
        </div>
        <div className="pl-0 pl-lg-3 px-3 px-md-0 p-0 m-0 w-100 row justify-content-between align-items-start ">
          <div className="p-0 m-0 col-12 col-lg-7">
            <div
              className="p-0 m-0 d-flex row justify-content-center align-items-stretch text-start h-100"
              style={{ position: "relative" }}
            >
              {data?.vehicle_status === 7 && (
                <img
                  height="40%"
                  width="40%"
                  src={`${CDN_BASE_URL}${soldImage}`}
                  className="detail_soldImage-style"
                />
              )}
              <div
                className="col-12 p-0 m-0 d-flex row justify-content-center align-items-center text-center  "
                // style={{ backgroundColor: "#fff" }}
              >
                <div className="col-12 DetaileProductCustomrWeb-slider-make p-0 m-0 ">
                  <div className="p-0 m-0 d-flex row justify-content-center align-items-stretch text-start ">
                    <div
                      className="col-12 p-0 m-0 d-flex row justify-content-center align-items-center text-center"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="col-12 vehicle_detail_gallary_div__container p-0 px-lg-0  m-0">
                        <div className="p-0 m-0 w-100 d-flex align-items-center justify-content-center">
                          {images?.length !== 0 && (
                            <ImageGallery
                              className="w-100"
                              thumbnailPosition="bottom"
                              items={images}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-0 m-0 col-12 col-lg-5 pl-4">
            <div className="p-0 m-0 w-100 row">
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-12 w-100 vehicle_single_detail_div__container_text py-2">
                <img src="/icons/detail/engine.png" className="p-0 m-0 pr-2" />
                Engine: {data?.data?.Vehicle?.engine_cylinders}
              </div>
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-12 w-100 vehicle_single_detail_div__container_text py-2">
                <img src="/icons/detail/engine.png" className="p-0 m-0 pr-2" />
                Engine Size: {data?.data?.Vehicle?.engine_size + " " + "L"}
              </div>
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-12 w-100 vehicle_single_detail_div__container_text py-2">
                <img src="/icons/detail/drive.png" className="p-0 m-0 pr-2" />
                Drivetrain: {data?.data?.Vehicle?.drive_type}
              </div>
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-12 w-100 vehicle_single_detail_div__container_text py-2">
                <img
                  src="/icons/detail/fuelType.png"
                  className="p-0 m-0 pr-2"
                />
                Fuel Type: {data?.data?.Vehicle?.fuel_type}
              </div>
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-12 w-100 vehicle_single_detail_div__container_text py-2">
                <img
                  src="/icons/detail/bodyStyle.png"
                  className="p-0 m-0 pr-2"
                />
                Body Style: {data?.data?.Vehicle?.body_style}
              </div>
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-12 w-100 vehicle_single_detail_div__container_text py-2">
                <div className="p-0 m-0 d-flex flex-row align-items-center">
                  <img src="/icons/detail/color.png" className="p-0 m-0 pr-2" />
                  Exterior Color:{" "}
                  <div
                    className="p-0 m-0 mx-0 mx-md-2"
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: `#${props?.vehicleData?.data.Vehicle?.exterior_color?.code}`,
                    }}
                  />
                  <span className="d-none d-md-inline vehicle_single_detail_div__container_text">
                    {data?.data?.Vehicle?.exterior_color?.name}
                  </span>
                </div>
              </div>
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-12 w-100 vehicle_single_detail_div__container_text py-2">
                <img
                  src="/icons/detail/transmission.png"
                  className="p-0 m-0 pr-2"
                />
                Transmission: {data?.data?.Vehicle?.Transmission?.name}
              </div>
              <div className="p-0 m-0 col-12 col-sm-6 col-lg-12 w-100 vehicle_single_detail_div__container_text py-2">
                <img src="/icons/detail/ometer.png" className="p-0 m-0 pr-2" />
                Odometer: {priceComma(data?.data?.odometer, 2)}
                {data?.data?.odometer_type === 2 ? "KM" : "MI"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetaileProductSliderCustomrWeb;
