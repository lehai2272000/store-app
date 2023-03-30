import React, { Component } from "react";
import { Link } from "react-router-dom";
class ListItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="content-catelogy">
        <Link to={`/detail/${data.id}`}>
          <div className="image-logo">
            <img src={data.logo} alt="avatar"></img>
          </div>
          <div className="title">
            <h5>{data.title}</h5>
          </div>
        </Link>
        <div className="description">{data.catelogy}</div>
        <div className="evaluate">
          <span>5 sao</span>
        </div>
      </div>
    );
  }
}

export default ListItem;
