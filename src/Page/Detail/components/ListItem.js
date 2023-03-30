import React, { Component } from "react";
import ReactModal from "react-modal";
import ScanQrCode from "../components/ScanQrCode";
class ListItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="image-avatar">
            <img src={data.logo} alt=""></img>
          </div>
          <div className="right">
            <div className="title">
              <h2>{data.title}</h2>
            </div>
            <div className="catelogy">
              <div className="the-loai">
                <span>{data.catelogy}</span>
              </div>
              <div className="evaluate">
                <span className="style-span">5 sao</span>
                <span>964.608</span>
              </div>
            </div>
            <div className="dung-luong">
              <span>103MB</span>
            </div>
            <div className="setting">
              <button onClick={this.handleOpenModal}>Cài đặt</button>
              <ReactModal isOpen={this.state.showModal} ariaHideApp={false}>
                <div
                  className="modal"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <ScanQrCode />
                  <div>
                    <button
                      onClick={this.handleCloseModal}
                      style={{
                        width: "100%",
                        padding: "10px",
                        background: "#689f38",
                        border: "#689f38",
                        borderRadius: "4px",
                        color: "#fff",
                      }}
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </ReactModal>
            </div>
          </div>
          <div className="location">
          <div className="item">
            <ul>
              Location
              <li>approximate location (network-based)</li>
              <li>precise location (GPS and network-based)</li>
            </ul>
          </div>
          <div className="item">
            <ul>
              Storage
              <li>read the contents of your USB storage</li>
              <li>modify or delete the contents of your USB storage</li>
            </ul>
          </div>
        </div>

        <div className="item-image">
        <img src={data.image?.[0]} alt="game" />
        </div>
        <div className="description">
          <h5>Mô tả</h5>
          <p className={this.state.hide ? "hide" : "show"}>{data.desciption}</p>
          <span
            className="information"
            onClick={() => this.setState({ hide: false })}
          >
            Thêm thông tin
          </span>
        </div>
      </>
    );
  }
}

export default ListItem;
