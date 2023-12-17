import { useFormik } from "formik";
import { useRef, useState } from "react";
import NumberFormat from "react-number-format";
import Select from "react-select";
import * as Yup from "yup";
import {
  reactSelectInputStyle,
  reactSelectInputStyleWhiteTheme,
} from "../../../../utils/common/react_select_styles";
import CategoryTitle from "../../layout/header/category_title";
import EformsHeader from "../../layout/header/eform_header";

const CalculatoreCustomerWeb = (props) => {
  const { sellPrice = undefined, modalMode, detail = false } = props;
  const [results, setResults] = useState();
  const formik = useFormik({
    initialValues: {
      vehiclePrice: sellPrice ? +sellPrice : "",
      loanTerm: "",
      intRate: "",
      downPayment: "",
      tradeValue: "",
    },
    validationSchema: Yup.object({
      vehiclePrice: Yup.number("You must enter a number").required("Required"),
      loanTerm: Yup.mixed().required("Required").typeError("Required"),
      intRate: Yup.number("You must enter a number")
        .min(1, "must be more than 0")
        .max(100, "must be less than 100")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const dowPay = isNaN(parseInt(values?.downPayment))
        ? 0
        : parseInt(values?.downPayment);
      const trdeVal = isNaN(parseInt(values?.tradeValue))
        ? 0
        : parseInt(values?.tradeValue);
      const totalDown = dowPay + trdeVal;
      let data = (
        (parseFloat(values?.intRate) / 1200 +
          parseFloat(values?.intRate) /
            1200 /
            (Math.pow(
              1 + parseFloat(values?.intRate) / 1200,
              parseInt(values?.loanTerm?.value)
            ) -
              1)) *
        (parseInt(values?.vehiclePrice) - (totalDown || 0))
      ).toFixed(2);
      setResults(data);
    },
  });
  const options = [
    {
      label: "12 Months",
      value: 12,
    },
    {
      label: "24 Months",
      value: 24,
    },
    {
      label: "36 Months",
      value: 36,
    },
    {
      label: "48 Months",
      value: 48,
    },
    {
      label: "60 Months",
      value: 60,
    },
    {
      label: "72 Months",
      value: 72,
    },
  ];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="m-0 p-0 w-100 d-flex row align-items-start justify-content-start"
    >
      <div className="p-0 m-0 col-12">
        <div className="p-0 m-0 row">
          <div className={`p-1 m-0 ${detail ? "col-12" : "col-12 col-sm-6"}`}>
            <div className="p-0 m-0 form-group">
              <NumberFormat
                onValueChange={(e) => {
                  formik.setFieldValue("vehiclePrice", e.floatValue);
                }}
                className="form-control eforms_input_container"
                id="vehiclePrice"
                name="vehiclePrice"
                placeholder="Vehicle Price"
                displayType={"number"}
                thousandSeparator={true}
                value={formik.values.vehiclePrice}
                prefix={"$ "}
              />
              {formik.errors.vehiclePrice && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.vehiclePrice}
                </div>
              )}
            </div>
          </div>
          <div className={`p-1 m-0 ${detail ? "col-12" : "col-12 col-sm-6"}`}>
            <div className="p-0 m-0 form-group">
              <NumberFormat
                onValueChange={(e) => {
                  formik.setFieldValue("downPayment", e.floatValue);
                }}
                className="form-control eforms_input_container"
                id="downPayment"
                name="downPayment"
                placeholder="Down payment"
                displayType={"number"}
                thousandSeparator={true}
                value={formik.values.downPayment}
                prefix={"$ "}
              />
              {formik.errors.downPayment && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.downPayment}
                </div>
              )}
            </div>
          </div>
          <div className={`p-1 m-0 ${detail ? "col-12" : "col-12 col-sm-6"}`}>
            <div className="p-0 m-0 form-group">
              <NumberFormat
                onValueChange={(e) => {
                  formik.setFieldValue("tradeValue", e.floatValue);
                }}
                className="form-control eforms_input_container"
                id="tradeValue"
                name="tradeValue"
                placeholder="Your trade"
                displayType={"number"}
                thousandSeparator={true}
                value={formik.values.tradeValue}
                prefix={"$ "}
              />
              {formik.errors.tradeValue && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.tradeValue}
                </div>
              )}
            </div>
          </div>

          <div className={`p-1 m-0 ${detail ? "col-12" : "col-12 col-sm-6"}`}>
            <div className="p-0 m-0 form-group">
              <Select
                className="form-select w-100  eforms_input_select_container"
                styles={reactSelectInputStyle}
                options={options}
                onChange={(e) => {
                  formik.setFieldValue("loanTerm", e);
                }}
                id="loanTerm"
                name="loanTerm"
                placeholder="Loan Term (ex: 36 Months)"
                value={formik.values.loanTerm}
              />
              {formik.errors.loanTerm && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.loanTerm}
                </div>
              )}
            </div>
          </div>
          <div className={`p-1 m-0 ${detail ? "col-12" : "col-12 col-sm-6"}`}>
            <div className="p-0 m-0 form-group">
              <NumberFormat
                onValueChange={(e) => {
                  formik.setFieldValue("intRate", e.floatValue);
                }}
                className="form-control eforms_input_container"
                id="intRate"
                name="intRate"
                placeholder="Interest rate"
                displayType={"number"}
                value={formik.values.intRate}
                onBlur={formik.handleBlur}
                prefix={"%"}
                // maxLength={4}
              />
              {formik.errors.intRate && formik.touched.intRate && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.intRate}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-0 m-0 col-12">
        <div className="p-0 m-0 col-12">
          <EformsHeader title="Result" />
        </div>
        <div className="p-0 m-0 row">
          <div className="p-1 m-0 col-12">
            <div className="w-100 p-0 m-0 pl-2 d-flex align-items-center form-control eforms_input_container">
              Monthly Payment:
              <h5 className="d-flex row col-4 col-md-4 col-xl-4 p-0 m-0 justify-content-start align-items-start text-start">
                <NumberFormat
                  value={results}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(value, props) => <div {...props}>{value}</div>}
                />
              </h5>
            </div>
          </div>
          <div
            className={`p-1 m-0 pt-2 ${detail ? "col-12" : "col-12 col-sm-6"}`}
          >
            <button
              type="submit"
              className="btn yellow_button text-center w-100"
            >
              <span className="p-0 m-0 ">Calculate Payment</span>
            </button>
          </div>
          <div
            className={`p-1 m-0 pt-2 ${detail ? "col-12" : "col-12 col-md-6"}`}
          >
            <button
              className="btn yellow_button text-center w-100"
              onClick={(e) => {
                e.preventDefault();
                formik.handleReset();
                setResults("");
              }}
              id="calculate"
            >
              <span className="p-0 m-0 ">Reset</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CalculatoreCustomerWeb;
