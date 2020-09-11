import styled from 'styled-components'

import bgImage from '../../assets/bg.jpg'

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;

  div {
    display: flex;
    max-width: 1200px;
    height: 75px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    p {
      font-weight: 300;
      font-size: 12px;
      color: #868686;
      margin-right: 100px;
    }

    ul {
      list-style: none;
      align-content: flex-end;

      li {
        display: inline;
        padding: 10px;
      }
    }

    div {
      flex: 1;
      width: 100%;
    }
  }
`
