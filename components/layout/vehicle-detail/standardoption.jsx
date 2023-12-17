// // import Accordion from "react-bootstrap/Accordion";
// import { useState } from "react";
// import { Accordion } from "react-bootstrap";
// import Swiper from "swiper";
// import AccordianToggleStandard from "./standardaccordian";
// import { IoIosSettings } from "react-icons/io";

// // import { Accordion } from "react-bootstrap";
// const StandardOptions = (props) => {
//   const [activeAccordian, setActiveAccordian] = useState(null);

//   const handleAccrodianActive = (i) => {
//     if (activeAccordian === i) {
//       setActiveAccordian(null);
//     } else {
//       setActiveAccordian(i);
//     }
//   };
//   const loopstandard =
//     props?.data?.data?.Vehicle?.standard &&
//     Object.entries(props?.data?.data?.Vehicle?.standard)
//       ? Object.entries(props?.data?.data?.Vehicle?.standard)
//       : [];
//   const lenght = loopstandard?.length;

//   return (
//     <>
//       <div className="p-0 m-0 w-100">
//         <h3 className="my-4 m-0 p-0 text-dscription d-flex justify-content-start align-items-center">
//           <IoIosSettings />
//           Options
//         </h3>
//         <div className="p-0 m-0 row w-100 justify-content-center align-items-center">
//           <div className="card__heder_box col-12 p-0 m-0  ">
//             <Accordion className="card p-0 m-0 w-100">
//               <div
//                 className="p-0 m-0 w-100 row"
//                 style={{ border: "0.5px solid #050505" }}
//               >
//                 {loopstandard?.map((loopstandardDatas, i, array) => {
//                   const lenghtchilde = loopstandardDatas[1].length;
//                   return (
//                     <div className="px-2 m-0 p-0 w-100 row bg-white">
//                       <div
//                         className="col-12 p-0 m-0"
//                         style={{ borderBottom: "0.5px solid #050505" }}
//                       >
//                         <div className="p-0 m-0 p-2 bg-white w-100">
//                           {" "}
//                           <div className="d-flex row p-0 w-100 justify-content-start align-items-center text-start m-0">
//                             <Accordion.Toggle
//                               as={AccordianToggleStandard}
//                               variant="link"
//                               eventKey={i + 1}
//                               className={`${
//                                 activeAccordian === i
//                                   ? "btn  p-0 m-0 d-flex row col-1 justify-content-start align-items-start text-end active_vehicle_option_accordian-open"
//                                   : ""
//                               }`}
//                               onClick={() => handleAccrodianActive(i)}
//                             ></Accordion.Toggle>
//                             <p
//                               className="d-flex row col-4 ml-2 px-2 mb-0 acardion_title"
//                               // style={{ fontWeight: "bold" }}
//                             >
//                               {loopstandardDatas[0]}
//                             </p>
//                           </div>
//                           <Accordion.Collapse eventKey={i + 1}>
//                             <>
//                               {loopstandardDatas[1]?.map((item, index) => {
//                                 return (
//                                   <p
//                                     className="px-2 px-md-5 text-dark py-2 m-0 "
//                                     style={{
//                                       borderBottom:
//                                         lenghtchilde - 1 === index
//                                           ? ""
//                                           : "1px solid #ddd",
//                                       color: "#000",
//                                     }}
//                                   >
//                                     {item}
//                                   </p>
//                                 );
//                               })}
//                             </>
//                           </Accordion.Collapse>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </Accordion>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StandardOptions;
// import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import AccordianToggleStandard from "./standardaccordian";

// import { Accordion } from "react-bootstrap";
const StandardOptions = (props) => {
  const [activeAccordian, setActiveAccordian] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleAccrodianActive = (i) => {
    if (activeAccordian === i) {
      setActiveAccordian(null);
    } else {
      setActiveAccordian(i);
    }
  };
  const loopstandard =
    props?.data?.data?.Vehicle?.standard &&
    Object.entries(props?.data?.data?.Vehicle?.standard) &&
    Object.entries(props?.data?.data?.Vehicle?.standard)
      ? Object.entries(props?.data?.data?.Vehicle?.standard)
      : [];
  const lenght = loopstandard?.length;
  return (
    <div className="p-0 m-0 w-100 p-3 option_bg">
      <h3 className="p-0 m-0 text-start direction_title pb-2">
        Features & Options
      </h3>
      <div className="p-0 m-0 w-100 row features_bg">
        {props?.data?.data?.VehicleExtraFeatures?.map((f) => (
          <div className="p-0 m-0 col-12 col-md-4 text-center py-2 detail_extra_feature_container">
            {f.feature_name}
          </div>
        ))}
        {/* {props?.data?.data?.VehicleExtraFeatures?.map((f) => (
          <div className="p-0 m-0 col-12 col-md-4 text-center py-2 detail_extra_feature_container">
            {f.feature_name}
          </div>
        ))} */}
      </div>
      {showOptions && (
        <div className="p-0 m-0 w-100 row">
          {loopstandard?.map((options) => (
            <>
              <h5 className="p-0 m-0 col-12 text-start py-2 font-weight-bold text-white">
                {options[0]}
              </h5>
              <ul className="p-0 m-0 row w-100 pl-3 py-3">
                {options[1]?.map((option_detail) => (
                  <li
                    className="p-0 m-0 col-12"
                    style={{
                      fontWeight: 300,
                      fontSize: "14px",
                      color: "#4e4d4d",
                    }}
                  >
                    {option_detail}
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      )}
      <>
        {!showOptions ? (
          <div
            className={`p-0 m-0 w-100 row justify-content-center ${
              !props?.data?.data?.VehicleExtraFeatures ? "pt-5 mt-5" : "pt-0"
            }`}
          >
            <button
              className="p-0 m-0 detail_page_btn_options btn text-center"
              onClick={() => setShowOptions((prev) => !prev)}
            >
              <i className="p-0 m-0">
                <FaCaretDown color="#fff" size="25" />
              </i>
            </button>
          </div>
        ) : (
          <div className="p-0 m-0 w-100 row justify-content-center pt-5 mt-5">
            <button
              className="p-0 m-0 detail_page_btn_options btn text-center"
              onClick={() => setShowOptions((prev) => !prev)}
            >
              <i className="p-0 m-0">
                <FaCaretUp color="#fff" size="25" />
              </i>
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default StandardOptions;
