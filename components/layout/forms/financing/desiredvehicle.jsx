import { CloseButton, Modal } from "react-bootstrap";
import React from "react";
import DesiredVehicleFinancial from "./desiredvehiclefinancial";
import { FaTimes } from "react-icons/fa";
import EformsHeader from "../../../common/layout/header/eform_header";

const DesiredVehiclee = (props) => {
  const { show, onClose, formik, domain, advanceSearchData } = props;
  return (
    <Modal
      size="xl"
      centered
      show={show}
      onHide={onClose}
      contentClassName="p-md-4 p-3 m-0"
    >
      <Modal.Header className="p-0 m-0 border-0">
        <Modal.Title className="p-0 m-0 w-100">
          <div className="p-1 m-0 mb-3 d-flex align-items-center justify-content-between">
            <EformsHeader title="Advance Search" />
            <button
              className="p-0 m-0 modal_close_button__style"
              onClick={onClose}
            >
              <FaTimes size={28} />
            </button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <DesiredVehicleFinancial
        onClose={onClose}
        advanceSearchData={advanceSearchData}
        otherFormik={formik}
        domain={domain}
      />
    </Modal>
  );
};

export default DesiredVehiclee;
