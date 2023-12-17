import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useGetColor } from "../../../../hooks/common/useGetColor";
import { useGetFooterData } from "../../../../hooks/common/useGetFooterData";
import { getToken } from "../../../../utils/common/get_token";
import EformsHeader from "../../../common/layout/header/eform_header";
import Loading from "../../../common/web/loading/loading";
import CarFinderForm from "../car-finder/car_finder_form";

const CarFinderVehicleFinancial = (props) => {
  const { show, onClose, formik, domain } = props;
  const { data: colorData } = useGetColor();

  return (
    <Modal
      contentClassName="eforms_div__container p-2 m-0"
      show={show}
      size="xl"
      onHide={onClose}
      centered
    >
      <Modal.Header className="p-0 m-0 border-0">
        <Modal.Title className="p-0 m-0 w-100">
          <div className="p-1 m-0 mb-3 d-flex align-items-center justify-content-between">
            <EformsHeader title="Car Finder" />
            <button
              className="p-0 m-0 modal_close_button__style"
              onClick={onClose}
            >
              <FaTimes size={28} />
            </button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CarFinderForm
          onClose={onClose}
          otherFormik={formik}
          domain={domain}
          colors={colorData}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CarFinderVehicleFinancial;
