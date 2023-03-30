import styled from "styled-components";

export const StyleDivHeader = styled.div`
  position: relative;
  padding: 8px;
  .content {
    display: flex;
    margin-bottom: 32px;
    .image-avatar {
      width: 40%;
      img {
        width: 100%;
        border: 1px solid #000;
        border-radius: 16px;
      }
    }
    .right {
      padding-left: 16px;
      width: 60%;
      .setting button {
        margin-top: 8px;
        float: right;
        padding: 5px 10px;
        background: #689f38;
        color: #fff;
        height: 40px;
        border: 1px solid green;
        font-size: 16px;
        border-radius: 4px;
      }
      h2 {
        margin: 0;
        text-transform: uppercase;
        @media (max-width: 320px) {
          font-size: 1.3em;
        }
      }
      .information p {
        margin: 4px 0;
      }
      .dung-luong {
        border-bottom: 1px solid #585858;
      }
    }
    .catelogy {
      width: 100%;
      display: flex;
      justify-content: space-between;
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }
      .evaluate {
        .style-span {
          padding-right: 50px;
        }
        @media (max-width: 600px) {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  .location {
    @media (min-width: 600px) {
      position: absolute;
      top: 150px;
      left: 40%;
    }
  }
  .item-image img {
    width: 100%;
    height: auto;
  }
  .information {
    display: flex;
    justify-content: center;
  }
  .description p.hide {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }

  .description p.show {
    overflow: inherit;
    -webkit-line-clamp: inherit;
  }
`;
