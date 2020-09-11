import styled from 'styled-components'

import bgImage from '../../assets/bg.jpg'

export const Container = styled.div`
  width: 100%;
  height: 95px;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;

  div {
    display: flex;
    max-width: 1200px;
    height: 95px;
    border-bottom: 1px solid;
    border-color: rgba(180, 180, 180, 0.8);
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
        padding: 10px;

        button {
          background-color: rgba(255, 255, 255, 0);
          font-size: 16px;
          border: none;
        }
      }
    }
  }
`
