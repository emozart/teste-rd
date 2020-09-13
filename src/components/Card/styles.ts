import styled from 'styled-components'

interface ICard {
  cardColor: string
  textColor: string
}

export const Container = styled.div<ICard>`
  width: 360px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  letter-spacing: -2px;
  font-stretch: ultra-condensed;

  div {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.cardColor};
    width: 100%;

    img {
      margin: 15px auto;
    }

    h3 {
      text-align: center;
      font-size: 32px;
      font-weight: 300;
      color: #fff;
      margin: 22px 0;
    }
  }

  p {
    display: block;
    text-align: justify;
    font-size: 20px;
    font-weight: 300;
    line-height: 20px;
    padding: 6px;
    color: ${props => props.textColor};

    span {
      font-weight: 600;
    }
  }

  button {
    align-self: flex-end;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -2px;
    font-stretch: ultra-condensed;
    background-color: ${props => props.cardColor};
    color: #fff;
    padding: 0 5px;
    border: none;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`
