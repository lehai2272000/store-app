import React, { Component } from "react";
import { StyleSelect } from "../styles";
class ListCatelogy extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
       <StyleSelect options={data.catelogy} />
      </>
    );
  }
}

export default ListCatelogy;
