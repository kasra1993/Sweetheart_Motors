const HouresOperation = (props) => {
  return (
    <>
      <h5
        className="d-flex row justify-content-start align-items-start text-start col-12  p-0 m-0 mb-2 mx-1"
        style={{ color: "#fff" }}
      >
        Business Hours
      </h5>
      {/* {props?.timeWorke?.map((time) => {
        return ( */}
      <div className="p-0 m-0 d-flex row align-items-center justify-content-center col-12">
        <div className="col-md-12 col-sm-12 col-12 p-1 m-0">
          <div className="contact_information_container-style p-2 m-0 d-flex flex-column">
            <div className="p-0 m-0 d-flex flex-column justify-content-center">
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6 border-right-contactinfo py-2">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">MONDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[0]?.startAt +
                        " - " +
                        props?.timeWorke[0]?.endAt}
                    </h6>
                  </div>
                </div>
                <div className="p-0 m-0 d-none d-md-flex flex-row justify-content-start align-items-center col-12 col-md-6">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">TUESDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[1]?.startAt +
                        " - " +
                        props?.timeWorke[1]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex d-md-none flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6  py-2">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">TUESDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[1]?.startAt +
                        " - " +
                        props?.timeWorke[1]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6 border-right-contactinfo  py-2">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">WEDNESDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[2]?.startAt +
                        " - " +
                        props?.timeWorke[2]?.endAt}
                    </h6>
                  </div>
                </div>
                <div className="p-0 m-0 d-none d-md-flex flex-row justify-content-start align-items-center col-12 col-md-6">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">THURSDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[3]?.startAt +
                        " - " +
                        props?.timeWorke[3]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex d-sm-none flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6  py-2 py-0">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">THURSDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[3]?.startAt +
                        " - " +
                        props?.timeWorke[3]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6 border-right-contactinfo py-2">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">FRIDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[4]?.startAt +
                        " - " +
                        props?.timeWorke[4]?.endAt}
                    </h6>
                  </div>
                </div>
                <div className="p-0 m-0 d-none d-md-flex flex-row justify-content-start align-items-center col-12 col-md-6">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">SATURDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[5]?.startAt +
                        " - " +
                        props?.timeWorke[5]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex d-md-none flex-row justify-content-start align-items-center col-12 border-bottom-contactinfo">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6  py-2 py-0">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">SATURDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[5]?.startAt +
                        " - " +
                        props?.timeWorke[5]?.endAt}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12">
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6 border-right-contactinfo py-2 ">
                  <div className="p-0 px-2 m-0 w-100 d-flex justify-content-between align-items-center">
                    <h6 className="p-0 m-0 contactinfo-text">SUNDAY</h6>
                    <h6 className="p-0 m-0 contactinfo-text">
                      {props?.timeWorke[6]?.startAt +
                        " - " +
                        props?.timeWorke[6]?.endAt}
                    </h6>
                  </div>
                </div>
                <div className="p-0 m-0 d-flex flex-row justify-content-start align-items-center col-12 col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouresOperation;
