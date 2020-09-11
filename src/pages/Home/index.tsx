import React from 'react'
import { MdBrightness1 } from 'react-icons/md'

import desktopDevice from '../../assets/desktop.png'
import tabletDevice from '../../assets/tablet.png'
import mobileDevice from '../../assets/mobile.png'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { TitleContainer, CardContainer } from './style'

interface ICard {
  image: string
  title: string
  cardColor: string
  textContent: string
  textButton: string
}

const Home: React.FC = () => {
  const card1: ICard = {
    image: desktopDevice,
    title: 'Site Responsivo DESKTOP',
    cardColor: '#FE9481',
    textContent: 'o restante da informação deverá aparecer em scroll down.',
    textButton: 'Leia mais...',
  }

  const card2: ICard = {
    image: tabletDevice,
    title: 'Site Responsivo TABLET',
    cardColor: '#FCDA92',
    textContent: 'informação deverá aparecer completa em um popup na tela.',
    textButton: 'Leia mais...',
  }

  const card3: ICard = {
    image: mobileDevice,
    title: 'Site Responsivo MOBILE',
    cardColor: '#9C8CB9',
    textContent: 'modifique o tema do site para blackfriday a seu gosto',
    textButton: 'Leia mais...',
  }

  return (
    <>
      <Header />
      <TitleContainer>
        <div>
          <h1>
            Crie este site <span>responsivo</span> com <span>REACT</span>{' '}
            utilizando <span>styled-components</span>
          </h1>
          <h2>A fonte utilizada é a Open Sans de 300 a 800.</h2>
          <h2>exemplo: 'Open Sans', Helvetica, san-serif, arial;</h2>
          <h2>já as cores são:</h2>
          <ul>
            <li>
              <MdBrightness1 color="#007F56" size={15} />
              #007F56,
            </li>
            <li>
              <MdBrightness1 color="#868686" size={15} />
              #868686,
            </li>
            <li>
              <MdBrightness1 color="#FE9481" size={15} />
              #FE9481,
            </li>
            <li>
              <MdBrightness1 color="#FCDA92" size={15} />
              #FCDA92 e
            </li>
            <li>
              <MdBrightness1 color="#9C8CB9" size={15} />
              #9C8CB9
            </li>
          </ul>
        </div>
      </TitleContainer>
      <CardContainer>
        <div>
          <Card
            image={card1.image}
            title={card1.title}
            cardColor={card1.cardColor}
            textContent={card1.textContent}
            textButton={card1.textButton}
          />
          <Card
            image={card2.image}
            title={card2.title}
            cardColor={card2.cardColor}
            textContent={card2.textContent}
            textButton={card2.textButton}
          />
          <Card
            image={card3.image}
            title={card3.title}
            cardColor={card3.cardColor}
            textContent={card3.textContent}
            textButton={card3.textButton}
          />
        </div>
      </CardContainer>
      <Footer />
    </>
  )
}

export default Home
