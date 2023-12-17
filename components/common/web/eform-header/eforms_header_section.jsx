import { CDN_BASE_URL } from "../../../../constant/base";
import { findScript } from "../../../../utils/common/html_script";
import CategoryTitle from "../../layout/header/category_title";
const EFormsHeaderSection = ({
  title = "",
  desc: Desc = "",
  image = "",
  className = "",
  imagePosition = "center",
  showImage = true,
}) => {
  return (
    <div
      className={`p-0 m-0 row w-100 ${className}`}
      style={{
        position: "relative",
      }}
    >
      <div className="p-0 m-0 col-12 col-sm-6 col-lg-3 eforms_header_img__container">
        <img
          src={CDN_BASE_URL + image}
          alt={image}
          style={{
            objectPosition: imagePosition,
          }}
          className=""
        />
      </div>
      <div className="p-0 m-0 col-12 col-sm-6 col-lg-9 px-0 px-sm-4">
        <div className="p-0 m-0 row w-100 eforms_header_title__container ">
          {title}
        </div>
        <div
          className="p-0 m-0 row w-100 eforms_header_desc__container text-justify footer_desc_container "
          dangerouslySetInnerHTML={{
            __html: findScript(Desc),
          }}
        />
      </div>
    </div>
  );
};

export default EFormsHeaderSection;
