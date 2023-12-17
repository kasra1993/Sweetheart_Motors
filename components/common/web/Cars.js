import React, { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import ComponentHeader from "../layout/header/component_header";
import CarItem from "./CarItem";
import { Modal } from "react-bootstrap";
import AdvanceFilter from "./filter/AdvanceFilter";
import { useInventoryFilterFormLoading } from "../../../hooks/context/useInventoryFilterFormik";
import Loading from "./loading/loading";
const Cars = (props) => {
  const {
    vehiclesData,
    isFinancial = false,
    otherFormik = undefined,
    onClose,
    mobileRenderComponent,
    dealerData = { dealerData },
    isClassic,
  } = props;
  const loading = useInventoryFilterFormLoading();
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const onCloseHandler = () => {
    setShowMobileFilter(false);
  };
  return (
    <div className="row p-0 m-0 px-1 px-md-3">
      {/* <div className="p-0 pt-3 m-0 mb-5 d-lg-none row w-100 d-flex justify-content-start align-items-center mobile_filter_border">
        <div className="p-0 m-0  inventory_search_title" data-text="Inventory">
          Search The Car Inventory
        </div>
        <div className="p-0 m-0 justify-content-end ">
          <button
            className="btn  p-0 m-0"
            onClick={(e) => {
              setShowMobileFilter((prev) => !prev);
            }}
          >
            <FaFilter color="#1B6939" size="30" />
          </button>
        </div>
      </div> */}
      {loading ? (
        <div className="p-0 m-0 w-100">
          <Loading />
        </div>
      ) : (
        <>
          {vehiclesData?.map((item, index) => (
            <div
              key={`carInventory${item?.id}`}
              className="col-12 p-0 m-0 pl-lg-3"
            >
              <CarItem
                car={item}
                otherFormik={otherFormik}
                onClose={onClose}
                dealerData={dealerData}
                isClassic={isClassic}
              />
            </div>
          ))}
        </>
      )}
      <div className=" p-0 m-0 row w-100 d-none">
        <Modal
          backdropClassName=""
          size="xl"
          centered
          show={showMobileFilter}
          onHide={onCloseHandler}
          className=""
          contentClassName="p-2 m-0 rounded eforms_div__container "
        >
          <Modal.Header className="p-0 m-0 border-0">
            <Modal.Title className="d-flex justify-content-between py-3 p-0 m-0 w-100">
              Advance Search
              <button
                className="p-0 m-0 modal_close_button__style"
                onClick={onCloseHandler}
              >
                <FaTimes size={28} />
              </button>
            </Modal.Title>
          </Modal.Header>
          {mobileRenderComponent}
        </Modal>
      </div>
    </div>
  );
};

// export default Cars;
export default React.memo(Cars);
