import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function UserHeader() {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
              "url(" + require("assets/img/theme/typewriter-801921.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-yellow opacity-8" />
        {/* Header container */}
        
      </div>
    </>
  );
}

export default UserHeader;
