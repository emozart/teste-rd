import styled from 'styled-components'

import bgImage from '../../assets/bg.jpg'

import { IHeader } from './index'

export const Container = styled.div<IHeader>`
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
  }
`
