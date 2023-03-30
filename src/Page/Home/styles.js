import styled from "styled-components";
import Select from "react-select";

export const StyleDivHeader = styled.div`
  padding: 8px;

  body {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  .header {
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
    .left {
      display: flex;
      justify-content: start;
      @media (max-width: 600px) {
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        align-items: center;
      }
      .logo {
        width: 30%;
        img {
          @media (max-width: 600px){
            width: 100%;
          }
          @media (min-width: 650px){
            height: 40px;
            width: 100%;
          }
        }
      }
      .search input {
        width: 500px;
        padding: 8px;
        border: 1px solid green;
        height: 40px;
        border-radius: 4px;
        box-sizing: border-box;
        color: green;
        @media (min-width: 320px) and (max-width: 800px){
          width: 200px;
          padding: 8px;
          border: 1px solid green;
          height: 40px;
          border-radius: 4px;
          box-sizing: border-box;
          color: green;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      .most {
        display: flex;
        justify-content: space-between;
        .home button {
          margin-right: 12px;
          width: 80px;
          height: 40px;
          border: 1px solid green;
          font-size: 16px;
          border-radius: 4px;
          @media (max-width: 600px) {
            margin-right: 0;
          }
        }
        .top button {
          margin-right: 12px;
          width: 80px;
          height: 40px;
          border: 1px solid green;
          font-size: 16px;
          border-radius: 4px;
          @media (max-width: 600px) {
            margin-right: 0;
          }
        }
        .new button {
          width: 80px;
          height: 40px;
          border: 1px solid green;
          font-size: 16px;
          border-radius: 4px;
          @media (max-width: 600px) {
            margin-right: 0;
          }
        }
      }
      .category {
        padding-top: 15px;
        height: 32px;
      }
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    background: #f5effb;
    width: 100%;
    padding-top: 15px;
    .content-catelogy {
      width: 16.66%;
      padding: 0 15px;
      a {
        text-decoration: none;
      }
      @media (max-width: 600px) {
        width: 33.33%;
        padding: 15px;
      }
      .image-logo {
        img {
          width: 100%;
          border-radius: 32px;
          @media (max-width: 600px) {
            border-radius: 16px;
          }
        }
      }
      .title {
        padding: 0 8px;
        font-size: 1.4em;
        h5 {
          margin: 8px 0 0 0;
          font-weight: 600;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          @media (max-width: 600px) {
            -webkit-line-clamp: 2;
          }
        }
      }
      .description {
        padding: 4px 8px;
        @media (max-width: 600px) {
          display: none;
        }
      }
    }
    .evaluate {
      display: flex;
      justify-content: space-between;
      padding: 16px 8px;
    }
  }
`;

export const StyleSelect = styled(Select)`
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  .css-yk16xz-control {
    height: 40px;
    border: 1px solid green;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 12px;
    height: 32px;
  }
  option {
    border: 1px solid green;
    font-size: 16px;
  }
`;
