import { FaClock } from "react-icons/fa";
import { DAYS } from "../../../../constant/footer/footer";

const Eformstimework = (props) => {
  const { timework } = props;
  return (
    <div className="p-0 m-0 my-3">
      <h3 className="eforms_title">Business Hours</h3>
      <div
        className="row justify-content-center align-items-center p-0 m-0 "
        // style={{ fontSize: "13px" }}
      >
        <div className="col-12 p-0 m-0">
          <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_container footer_desc_container">
            <p className="p-0 m-0">Monday</p>
            <p className="p-0 m-0 ">
              {props?.timework[0]?.startAt}{" "}
              {props?.timework[0]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timework[0]?.endAt}
            </p>
          </div>
        </div>
        <div className="d-inline w-100">
          <img className=" d-inline w-100 " src="/images/home/Line 3.png" />
        </div>
        <div className="col-12 p-0 m-0">
          <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_container">
            <p className="p-0 m-0">Tuesday</p>
            <p className="p-0 m-0">
              {props?.timework[1]?.startAt}{" "}
              {props?.timework[1]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timework[1]?.endAt}
            </p>
          </div>
        </div>
        <div className="d-inline w-100">
          <img className=" d-inline w-100 " src="/images/home/Line 3.png" />
        </div>
        <div className="col-12 p-0 m-0">
          <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_container">
            <p className="p-0 m-0">Wednesday</p>
            <p className="p-0 m-0">
              {props?.timework[2]?.startAt}{" "}
              {props?.timework[2]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timework[2]?.endAt}
            </p>
          </div>
        </div>
        <div className="d-inline w-100">
          <img className=" d-inline w-100 " src="/images/home/Line 3.png" />
        </div>
        <div className="col-12 p-0 m-0">
          <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_container">
            <p className="p-0 m-0">Thursday</p>
            <p className="p-0 m-0">
              {props?.timework[3]?.startAt}{" "}
              {props?.timework[3]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timework[3]?.endAt}
            </p>
          </div>
        </div>
        <div className="d-inline w-100">
          <img className=" d-inline w-100 " src="/images/home/Line 3.png" />
        </div>
        <div className="col-12 p-0 m-0">
          <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_container">
            <p className="p-0 m-0">Friday</p>
            <p className="p-0 m-0">
              {props?.timework[4]?.startAt}{" "}
              {props?.timework[4]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timework[4]?.endAt}
            </p>
          </div>
        </div>
        <div className="d-inline w-100">
          <img className=" d-inline w-100 " src="/images/home/Line 3.png" />
        </div>
        <div className="col-12 p-0 m-0">
          <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_container">
            <p className="p-0 m-0">Saturday</p>
            <p className="p-0 m-0">
              {props?.timework[5]?.startAt}{" "}
              {props?.timework[5]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timework[5]?.endAt}
            </p>
          </div>
        </div>
        <div className="d-inline w-100">
          <img className=" d-inline w-100 " src="/images/home/Line 3.png" />
        </div>
        <div className="col-12 p-0 m-0">
          <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_container">
            <p className="p-0 m-0">Sunday</p>
            <p className="p-0 m-0">
              {props?.timework[6]?.startAt}{" "}
              {props?.timework[6]?.holiday === 1 ? "" : "-"}{" "}
              {props?.timework[6]?.endAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eformstimework;
