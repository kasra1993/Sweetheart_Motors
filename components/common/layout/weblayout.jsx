import React, { useRef } from "react";
import SidebarCustomerWeb from "./sidebar/sidebar";
import HeaderCustomerWeb from "./header/header";
import FooterCustomerWeb from "./footer/footer";
const Weblayout = (props) => {
  const { children, domain, dealerData, timeWork } = props;
  const headerRef = useRef();
  return (
    <div className="p-0 m-0 row w-100" style={{ overflowX: "hidden" }}>
      <div className="p-0 m-0 sidebar_menu_positioning d-none d-md-flex">
        <SidebarCustomerWeb data={dealerData} />
      </div>
      <HeaderCustomerWeb data={dealerData} ref={headerRef} />
      {children}
      <FooterCustomerWeb
        data={dealerData}
        ref={headerRef}
        timeWork={timeWork}
      />
    </div>
  );
};

export default Weblayout;
