import { findScript } from "../../../utils/common/html_script";

const Waranty = (props) => {
  return (
    <div className="p-0 m-0">
      <div
        className={` row col-12 justify-content-start align-items-start text-start p-0 m-0 pr-3 ${
          props?.data?.waranty === null ? "d-none" : "d-flex"
        } `}
      >
        <h3 className="mt-4 m-0 p-0 direction_title">
          Waranty
          {/* <img src="/icons/right.png" className="d-none d-md-inline" /> */}
        </h3>
        <div
          className="col-12 m-0 py-4 px-2 DetaileProductCustomrWeb-description-text"
          dangerouslySetInnerHTML={{
            __html: findScript(props?.data?.waranty),
          }}
        />
      </div>
    </div>
  );
};

export default Waranty;
