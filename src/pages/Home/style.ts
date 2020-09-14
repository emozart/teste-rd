import styled from 'styled-components'

import bgImage from '../../assets/bg.jpg'

interface ITitleSection {
  titleColor: string
  subtitleColor: string
}

export const TitleContainer = styled.div<ITitleSection>`
  width: 100%;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;
  margin-top: 100px;

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
      font-size: 60px;
      font-weight: 300;
      line-height: 60px;
      text-align: center;
      color: ${props => props.titleColor};
      margin: 52px 0;

      span {
        font-weight: 800;
      }
    }

    h2 {
      font-size: 32px;
      font-weight: 300;
      line-height: 36px;
      text-align: center;
      color: ${props => props.subtitleColor};

      span {
        font-weight: 800;
      }

      ul {
        margin: 0 auto;
        list-style: none;

        li {
          display: inline;
          margin-right: 10px;

          svg {
            margin: auto 0;
            vertical-align: 4px;
          }
        }
      }
    }
  }
`

export const CardContainer = styled.section`
  width: 100%;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;
  padding: 20px 0;

  div {
    max-width: 1200px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
`

export const GeneralContainer = styled.section`
  width: 100%;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;
  padding: 70px 0;

  div {
    max-width: 1200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;

    h1 {
      font-size: 32px;
      font-weight: 300;
      line-height: 36px;
      text-align: left;
      margin: 10px;
    }

    p {
      font-size: 26px;
      font-weight: 300;
      line-height: 30px;
      text-align: left;
      margin: 10px;
    }
  }
`
