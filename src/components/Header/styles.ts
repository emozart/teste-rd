import styled from 'styled-components'

import bgImage from '../../assets/bg.jpg'

import { IHeader } from './index'

export const Container = styled.div<IHeader>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;

  div {
    display: flex;
    max-width: 1200px;
    height: 100px;
    border-bottom: 1px solid;
    border-color: ${props => props.borderColor};
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    div {
      flex: 1;
      width: 100%;
    }

    ul {
      list-style: none;
      align-content: flex-end;

      @media (max-width: 767px) {
        position: absolute;
        top: 70px;
        right: 0;
        background-color: #fff;
      }

      li {
        display: inline;
        margin: 12px 10px;

        @media (max-width: 767px) {
          display: list-item;
        }

        a {
          background-color: rgba(255, 255, 255, 0);
          vertical-align: 20px;
          font-size: 22px;
          font-weight: 300;
          letter-spacing: -2px;
          font-stretch: ultra-condensed;
          text-decoration: none;
          color: ${props => props.menuColor};
          cursor: pointer;
        }
      }
    }

    .menu-fixo {
      list-style: none;
      align-content: flex-end;

      @media (max-width: 767px) {
        display: none;
      }

      li {
        display: inline;
        margin: 12px 10px;

        a {
          background-color: rgba(255, 255, 255, 0);
          vertical-align: 20px;
          font-size: 22px;
          font-weight: 300;
          letter-spacing: -2px;
          font-stretch: ultra-condensed;
          text-decoration: none;
          color: ${props => props.menuColor};
          cursor: pointer;
        }
      }
    }

    button {
      display: none;
      width: 100px;
      height: 40px;
      margin: 10px;
      font-size: 22px;
      font-weight: 300;
      letter-spacing: -2px;
      font-stretch: ultra-condensed;

      @media (max-width: 767px) {
        display: inline-block;
      }
    }
  }
`
