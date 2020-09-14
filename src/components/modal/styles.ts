import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${rgba('#000000', 0.3)};
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 500px;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 30px;
      margin: 20px;
    }

    p {
      font-size: 16px;
      margin: 20px;
    }

    button {
      width: 100px;
      height: 35px;
      margin: 10px;
      align-self: flex-end;
    }
  }
`
