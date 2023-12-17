import { findScript } from "../../../utils/common/html_script";

const Dscription = (props) => {
  return (
    <div className="p-0 m-0">
      <div className="d-flex row col-12 justify-content-start align-items-center text-center p-0 m-0 pr-md-3 ">
        <h3 className="mt-4 m-0 p-0 direction_title">
          Description
          {/* <img src="/icons/right.png" className="d-none d-md-inline" /> */}
        </h3>
        <div
          className="col-12 m-0 py-3 px-0 px-md-2  justify-content-center align-items-center DetaileProductCustomrWeb-description-text text-center"
          dangerouslySetInnerHTML={{
            __html: findScript(props?.data?.comment),
          }}
        />
      </div>
    </div>
  );
};

export default Dscription;
