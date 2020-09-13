import styled from 'styled-components'

import bgImage from '../../assets/bg.jpg'

import { IFooter } from './index'

export const Container = styled.div<IFooter>`
  width: 100%;
  height: 80px;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;

  div {
    display: flex;
    width: 1200px;
    height: 80px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      color: ${props => props.textColor};
      margin-right: 30px;
    }

    ul {
      list-style: none;
      align-content: flex-end;
      margin: 0 30px;

      li {
        display: inline;
        margin: 6px;
      }
    }

    div {
      flex: 1;
      width: 100%;
    }
  }
`
