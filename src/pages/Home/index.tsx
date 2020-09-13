import React, { useState, useCallback } from 'react'
import { MdBrightness1 } from 'react-icons/md'
import { ThemeProvider } from 'styled-components'

import {
  themePrincipal,
  themeBlackFriday,
  DefaultTheme
} from '../../styles/theme'

import desktopDevice from '../../assets/desktop.png'
import tabletDevice from '../../assets/tablet.png'
import mobileDevice from '../../assets/mobile.png'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card, { ICardTemplate } from '../../components/Card'
import { TitleContainer, CardContainer } from './style'

const Home: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themePrincipal)

  const handleChangeTheme = useCallback(() => {
    if (theme === themePrincipal) {
      setTheme(themeBlackFriday)
    } else {
      setTheme(themePrincipal)
    }
  }, [theme])

  const handleAction1 = useCallback(() => {
    if (theme === themePrincipal) {
      setTheme(themeBlackFriday)
    } else {
      setTheme(themePrincipal)
    }
  }, [theme])

  const handleAction2 = useCallback(() => {
    if (theme === themePrincipal) {
      setTheme(themeBlackFriday)
    } else {
      setTheme(themePrincipal)
    }
  }, [theme])

  const card1: ICardTemplate = {
    image: desktopDevice,
    title: 'Site Responsivo DESKTOP',
    cardColor: `${theme.color.danger}`,
    textColor: `${theme.color.secondary}`,
    textContent: 'o restante da informação deverá aparecer em scroll down.',
    textButton: 'Leia mais...',
    action: handleAction1
  }

  const card2: ICardTemplate = {
    image: tabletDevice,
    title: 'Site Responsivo TABLET',
    cardColor: `${theme.color.warning}`,
    textColor: `${theme.color.secondary}`,
    textContent: 'informação deverá aparecer completa em um popup na tela.',
    textButton: 'Leia mais...',
    action: handleAction2
  }

  const card3: ICardTemplate = {
    image: mobileDevice,
    title: 'Site Responsivo MOBILE',
    cardColor: `${theme.color.info}`,
    textColor: `${theme.color.secondary}`,
    textContent: 'modifique o tema do site para blackfriday a seu gosto',
    textButton: 'Leia mais...',
    action: handleChangeTheme
  }

  return (
    <ThemeProvider theme={theme}>
      <Header
        menuColor={`${theme.color.primary}`}
        borderColor={`${theme.color.secondary}`}
      />
      <TitleContainer
        titleColor={`${theme.color.primary}`}
        subtitleColor={`${theme.color.secondary}`}
      >
        <div>
          <h1>
            Crie este site <span>responsivo</span> com <span>REACT</span>{' '}
            utilizando <span>styled-components</span>
          </h1>
          <h2>
            A fonte utilizada é a Open Sans de 300 a 800.
            <br />
            exemplo: 'Open Sans', Helvetica, san-serif, arial;
            <br />
            já as cores são:
            <ul>
              <li>
                <MdBrightness1 color={`${theme.color.primary}`} size={15} />
                {`${theme.color.primary}`},
              </li>
              <li>
                <MdBrightness1 color={`${theme.color.secondary}`} size={15} />
                {`${theme.color.secondary}`},
              </li>
              <li>
                <MdBrightness1 color={`${theme.color.danger}`} size={15} />
                {`${theme.color.danger}`},
              </li>
              <li>
                <MdBrightness1 color={`${theme.color.warning}`} size={15} />
                {`${theme.color.warning}`} e
              </li>
              <li>
                <MdBrightness1 color={`${theme.color.info}`} size={15} />
                {`${theme.color.info}`}
              </li>
            </ul>
          </h2>
        </div>
      </TitleContainer>
      <CardContainer>
        <div>
          <Card card={card1} />
          <Card card={card2} />
          <Card card={card3} />
        </div>
      </CardContainer>
      <Footer textColor={`${theme.color.secondary}`} />
    </ThemeProvider>
  )
}

export default Home
