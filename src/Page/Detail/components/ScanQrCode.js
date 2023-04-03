import React, { Component } from "react";
import QRCode from "qrcode.react";

import styled from "styled-components";
const StyleDivQrCode = styled.div`
  width: 100%;
  height: auto
`
class ScanQrCode extends Component {
  render() {
    return (
      <StyleDivQrCode>
        <QRCode
          value="1"
          id="qr"
          level={"M"}
          includeMargin={true}
          style={{ width: "300px", height: "auto" }}
        />
      </StyleDivQrCode>
    );
  }
}

export default ScanQrCode;
