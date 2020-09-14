import React, { useState, useCallback, useRef } from 'react'
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
import Modal from '../../components/modal'
import Card, { ICardTemplate } from '../../components/Card'
import { TitleContainer, CardContainer, GeneralContainer } from './style'

const Home: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themePrincipal)
  const [openPopupInfo, setOpenPopupInfo] = useState(false)
  const InfoSection = useRef(null)

  const handleChangeTheme = useCallback(() => {
    if (theme === themePrincipal) {
      setTheme(themeBlackFriday)
    } else {
      setTheme(themePrincipal)
    }
  }, [theme])

  const scrollToInfo = useCallback(
    ref => window.scrollTo(0, ref.current.offsetTop),
    []
  )

  const handleOpenPopupInfo = useCallback(() => {
    if (openPopupInfo) {
      setOpenPopupInfo(false)
    } else {
      setOpenPopupInfo(true)
    }
  }, [openPopupInfo])

  const card1: ICardTemplate = {
    image: desktopDevice,
    title: 'Site Responsivo DESKTOP',
    cardColor: `${theme.color.danger}`,
    textColor: `${theme.color.secondary}`,
    textContent: 'o restante da informação deverá aparecer em scroll down.',
    textButton: 'Leia mais...',
    action: () => {
      scrollToInfo(InfoSection)
    }
  }

  const card2: ICardTemplate = {
    image: tabletDevice,
    title: 'Site Responsivo TABLET',
    cardColor: `${theme.color.warning}`,
    textColor: `${theme.color.secondary}`,
    textContent: 'informação deverá aparecer completa em um popup na tela.',
    textButton: 'Leia mais...',
    action: handleOpenPopupInfo
  }

  const card3: ICardTemplate = {
    image: mobileDevice,
    title: 'Site Responsivo MOBILE',
    cardColor: `${theme.color.info}`,
    textColor: `${theme.color.secondary}`,
    textContent: 'modifique o tema do site para blackfriday a seu gosto',
    textButton: 'alterar tema',
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
      <GeneralContainer ref={InfoSection}>
        <div>
          <h1>Site Responsivo Desktop</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </GeneralContainer>
      <Footer textColor={`${theme.color.secondary}`} />
      {openPopupInfo && (
        <Modal
          title={'Mais Informações'}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
            'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
            'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
            'in reprehenderit in voluptate velit esse cillum dolore eu ' +
            'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
            'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
            'laborum.'
          }
          action={handleOpenPopupInfo}
        />
      )}
    </ThemeProvider>
  )
}

export default Home
