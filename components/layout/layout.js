import React from "react";
import MainHeader from "./main-header";
import { Fragment } from "react/cjs/react.production.min";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
