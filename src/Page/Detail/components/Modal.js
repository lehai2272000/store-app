import React, { Component } from "react";
import ReactModal from "react-modal"
import styled from "styled-components";
import ScanQrCode from "./ScanQrCode";

const StyleModal = styled.div`
    .qr-code{
        width: 100%;
        justify-content: center;
    }
`
class Modal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
        <div>

        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
            <div className="qr-code">
            <ScanQrCode />
            </div>
          <button onClick={this.handleCloseModal}>Đóng</button>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
