import React, { HTMLAttributes, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import rdLogoHeader from '../../assets/rd.png'

export interface IHeader extends HTMLAttributes<HTMLDivElement> {
  menuColor: string
  borderColor: string
}

const Header: React.FC<IHeader> = ({ menuColor, borderColor, ...rest }) => {
  const [showMenuButton, setShowMenuButton] = useState(false)

  const handleShowMenuButton = useCallback(() => {
    if (showMenuButton) {
      setShowMenuButton(false)
    } else {
      setShowMenuButton(true)
    }
  }, [showMenuButton])

  return (
    <Container menuColor={menuColor} borderColor={borderColor}>
      <div>
        <img src={rdLogoHeader} alt="RD Logo Header" />
        <button onClick={handleShowMenuButton}>Menu</button>
        {showMenuButton && (
          <ul>
            <li>
              <Link to={'#'}>HTML5</Link>
            </li>
            <li>
              <Link to={'#'}>CSS3</Link>
            </li>
            <li>
              <Link to={'#'}>JAVASCRIPT</Link>
            </li>
            <li>
              <Link to={'#'}>REACT</Link>
            </li>
            <li>
              <Link to={'#'}>REDUX</Link>
            </li>
          </ul>
        )}
        <ul className="menu-fixo">
          <li>
            <Link to={'#'}>HTML5</Link>
          </li>
          <li>
            <Link to={'#'}>CSS3</Link>
          </li>
          <li>
            <Link to={'#'}>JAVASCRIPT</Link>
          </li>
          <li>
            <Link to={'#'}>REACT</Link>
          </li>
          <li>
            <Link to={'#'}>REDUX</Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Header
