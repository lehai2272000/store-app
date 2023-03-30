import React, { Component } from "react";
import { StyleDivHeader, StyleSelect } from "./styles";
import axios from "axios";
import ListItem from "./components/ListItem";


const groupedOptions = [
    { value: "hot", label: "Game Hot" },
    { value: "makeup", label: "Làm Đẹp" },
    { value: "map", label: "Bản Đồ" },
    { value: "intellectual", label: "Game Trí Tuệ" },
    { value: "reflex", label: "Mạo Hiểm" },
    { value: "entertainment", label: "Giải trí" },
    { value: "document", label: "Tài liệu" },
  ];

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: [],
        keyword: "",
        selectedOption: null,
      };
    }
  
    componentDidMount = () => {
      this.getData();
    };
  
    getData = () => {
      return axios
        .get(`https://5f95437f2de5f50016ca1da2.mockapi.io/api/products`)
        .then((res) => {
          var data = res.data;
          this.setState({
            list: data,
          });
        });
    };
  
    searchData = (params) => {
      return axios
        .get(
          `https://5f95437f2de5f50016ca1da2.mockapi.io/api/products?title=${params}`
        )
        .then((res) => {
          var data = res.data;
          this.setState({
            list: data,
          });
        });
    };
  
    getDataCatelogy = (params) => {
      return axios
        .get(
          `https://5f95437f2de5f50016ca1da2.mockapi.io/api/products?catelogy=${params}`
        )
        .then((res) => {
          if (res) {
            console.log("res", res);
          }
          var data = res.data;
          this.setState({
            list: data,
          });
        });
    };
  
    _onChangeSearch = (e) => {
      const value = e.target.value;
      this.setState(
        {
          keyword: value,
        },
        () => {
          if (this.searching) {
            window.clearTimeout(this.searching);
          }
          this.searching = window.setTimeout(() => {
            this.searching = undefined;
            this.searchData(value);
          }, 300);
        }
      );
    };
  
    handleChangeCatelogy = (selectedOption) => {
      this.setState({ selectedOption });
      this.getDataCatelogy(selectedOption?.value);
    };
  
    render() {
      const { selectedOption } = this.state;
      const { keyword } = this.state;
      return (
        <StyleDivHeader>
        <div>
          <div className="header">
            <div className="left">
              <div className="logo">
                <img
                  src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png"
                  alt="logo"
                ></img>
              </div>
              <div className="search">
                <input
                  type="text"
                  name="keyword"
                  value={keyword}
                  onChange={this._onChangeSearch}
                  placeholder="Tìm kiếm"
                />
              </div>
            </div>
            <div className="right">
              <div className="most">
                <div className="home">
                  <button>Home</button>
                </div>
                <div className="top">
                  <button>Top</button>
                </div>
                <div className="new">
                  <button>New</button>
                </div>
              </div>
              <div className="category">
                <StyleSelect
                  value={selectedOption}
                  options={groupedOptions}
                  onChange={this.handleChangeCatelogy}
                />
              </div>
            </div>
          </div>
          <div className="navigation">
            <div className="game-hot">
              <h2>Game mới nhất</h2>
            </div>
          </div>
          <div className="content">
            {this.state.list.map((data) => (
              <ListItem data={data} key={data.id} />
            ))}
          </div>
          </div>
        </StyleDivHeader>
      );
    }
  }
  
  export default Home;