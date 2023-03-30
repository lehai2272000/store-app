import axios from "axios";
import Slider from "react-slick";
import React, { Component } from "react";
import { StyleDivHeader } from "./styles";
import ReactModal from "react-modal";
import ScanQrCode from "./components/ScanQrCode";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyleReactModal = styled(ReactModal)`
  .ReactModal__Overlay{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: #000;
  }
`;
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      showModal: false,
      hide: true,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    // const { params } = this.props.match;
    const params = useParams();
    console.log("Ket qua", params);
    return axios
      .get(
        `https://5f95437f2de5f50016ca1da2.mockapi.io/api/products/${params.id}`
      )
      .then((res) => {
        var data = res.data;
        this.setState({
          data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    let { data } = this.state;
    return (
      <StyleDivHeader>
        <div className="content">
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
              <StyleReactModal
                isOpen={this.state.showModal}
                ariaHideApp={false}
              >
                <div className="modal">
                  <ScanQrCode />
                  <div>
                    <button
                      onClick={this.handleCloseModal}
                      style={{
                        width: "300px",
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
              </StyleReactModal>
            </div>
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
          <Slider>
            <img src={data.image?.[0]} alt="game" />
            <img src={data.image?.[1]} alt="game" />
            <img src={data.image?.[3]} alt="game" />
            <img src={data.image?.[4]} alt="game" />
          </Slider>
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
      </StyleDivHeader>
    );
  }
}

export default Detail;
