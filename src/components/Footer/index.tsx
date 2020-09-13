import React, { HTMLAttributes } from 'react'

import logoRaia from '../../assets/drogaraia.png'
import logoDrogasil from '../../assets/drogasil.png'
import logoFarmasil from '../../assets/farmasil.png'
import logoUnivers from '../../assets/univers.png'
import logo4bio from '../../assets/4bio.png'
import logoRD from '../../assets/rd-small.png'

import { Container } from './styles'

export interface IFooter extends HTMLAttributes<HTMLDivElement> {
  textColor: string
}

const Footer: React.FC<IFooter> = ({ textColor, ...rest }) => (
  <Container textColor={textColor}>
    <div>
      <p>RD 2017. Todos os direitos reservados</p>
      <ul>
        <li>
          <img src={logoRaia} alt="Logo Raia" />
        </li>
        <li>
          <img src={logoDrogasil} alt="Logo Drogasil" />
        </li>
        <li>
          <img src={logoFarmasil} alt="Logo Farmasil" />
        </li>
        <li>
          <img src={logoUnivers} alt="Logo Univers" />
        </li>
        <li>
          <img src={logo4bio} alt="Logo 4bio" />
        </li>
      </ul>
      <div />
      <img src={logoRD} alt="RD Logo Footer" />
    </div>
  </Container>
)

export default Footer
