import React from 'react'

import { Container } from './styles'
import rdLogoHeader from '../../assets/rd.png'

const Header: React.FC = () => (
  <Container>
    <div>
      <img src={rdLogoHeader} alt="RD Logo Header" />
      <div></div>
      <ul>
        <li>
          <button type="button">HTML5</button>
        </li>
        <li>
          <button type="button">CSS3</button>
        </li>
        <li>
          <button type="button">JAVASCRIPT</button>
        </li>
        <li>
          <button type="button">REACT</button>
        </li>
        <li>
          <button type="button">REDUX</button>
        </li>
      </ul>
    </div>
  </Container>
)

export default Header
