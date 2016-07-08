import React from "react";

import Footer from "../components/layout/Footer";
import SimpleNav from "../components/layout/SimpleNav";


export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
   
    return (
      <div>

        <SimpleNav location={location} />

        <div className="container" style={containerStyle}>
              {this.props.children}
          <Footer/>
        </div>
      </div>

    );
  }
}
