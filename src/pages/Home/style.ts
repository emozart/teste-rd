import styled from 'styled-components'

import bgImage from '../../assets/bg.jpg'

export const TitleContainer = styled.div`
  width: 100%;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;

  div {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    letter-spacing: -2px;
    font-stretch: ultra-condensed;
    margin: 0 auto;

    h1 {
      max-width: 1000px;
      font-size: 58px;
      font-weight: 300;
      line-height: 60px;
      text-align: center;
      color: #007f56;
      margin-top: 60px;
      margin-bottom: 60px;

      span {
        font-weight: 800;
      }
    }

    h2 {
      font-size: 28px;
      font-weight: 300;
      color: #868686;

      span {
        font-weight: 800;
      }
    }

    ul {
      margin: 0 auto;
      list-style: none;

      li {
        display: inline;
        font-size: 28px;
        font-weight: 300;
        color: #868686;
        margin-right: 15px;

        svg {
          margin: auto 0;
        }
      }
    }
  }
`

export const CardContainer = styled.section`
  width: 100%;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;
  padding: 30px 0;

  div {
    max-width: 1200px;
    display: flex;
    align-content: space-around;
    letter-spacing: -2px;
    font-stretch: ultra-condensed;
    margin: 0 auto;
  }
`
